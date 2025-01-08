import React from "react";
import { Button } from "./ui/button";

export const Test = () => {
  const [count, setCount] = React.useState(0);

  return (
    <Button onClick={() => setCount((prevState) => prevState + 1)}>
      {count}
    </Button>
  );
};
