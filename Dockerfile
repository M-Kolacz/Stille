# syntax = docker/dockerfile:1

# Adjust NODE_VERSION as desired
ARG NODE_VERSION=20.18.0
FROM node:${NODE_VERSION}-slim as base

LABEL fly_launch_runtime="Remix"

# Set production environment
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}


# Install packages needed to build node modules
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential node-gyp pkg-config python-is-python3 openssl

# Install all node_modules, including dev dependencies
FROM base as deps

# Remix app lives here
WORKDIR /app

# Install node modules
ADD package.json package-lock.json .npmrc ./
RUN npm ci --include=dev

# Setup production node_modules
FROM base as production-deps

WORKDIR /myapp

COPY --from=deps /myapp/node_modules /myapp/node_modules
ADD package.json package-lock.json .npmrc ./

# Remove development dependencies
RUN if [ "$NODE_ENV" = "production" ]; then \
    npm prune --omit-dev; \
    fi

# Build the app
FROM base as build

ARG COMMIT_SHA
ENV COMMIT_SHA=$COMMIT_SHA

WORKDIR /myapp

COPY --from=deps /myapp/node_modules /myapp/node_modules

ADD . .

RUN npm run build

# Finally, build the production image with minimal footprint
FROM base

WORKDIR /myapp

RUN INTERNAL_COMMAND_TOKEN=$(openssl rand -hex 32) && \
    echo "INTERNAL_COMMAND_TOKEN=$INTERNAL_COMMAND_TOKEN" > .env

COPY --from=production-deps /myapp/node_modules /myapp/node_modules

COPY --from=build /myapp/server-build /myapp/server-build
COPY --from=build /myapp/build /myapp/build
COPY --from=build /myapp/package.json /myapp/package.json

ADD . . 

CMD ["npm","run","start"]