export type Article = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
};

export const articles: Article[] = [
  {
    id: "1",
    title: "Getting Started with Minimalism",
    slug: "getting-started-with-minimalism",
    excerpt:
      "Discover how embracing minimalism can transform your life and bring clarity to your daily routine.",
    content: `
  # Getting Started with Minimalism
  
  Minimalism isn't just about owning fewer things; it's a mindset that helps you focus on what truly matters. By eliminating excess and distractions, you create space for the things that bring genuine value to your life.
  
  ## Why Minimalism?
  
  In today's world of constant consumption and information overload, minimalism offers a refreshing alternative. It encourages intentional living and thoughtful choices about how you spend your time, energy, and resources.
  
  ## Starting Your Journey
  
  Begin by assessing what truly adds value to your life. This doesn't mean you need to discard everything you own or live in an empty space. Instead, it's about being mindful of what you bring into your life and why.
  
  1. **Start small**: Choose one area of your home to declutter.
  2. **Ask questions**: For each item, ask if it serves a purpose or brings you joy.
  3. **Be patient**: Minimalism is a journey, not a destination.
  
  Remember, minimalism looks different for everyone. The goal isn't to live with as little as possible, but to make room for what matters most to you.
      `,
    date: "2023-03-15",
  },
  {
    id: "2",
    title: "The Art of Mindful Reading",
    slug: "the-art-of-mindful-reading",
    excerpt:
      "Learn how to approach reading with intention and presence, enhancing both comprehension and enjoyment.",
    content: `
  # The Art of Mindful Reading
  
  In an age of digital distractions and information overload, the simple act of reading a book has become increasingly rare. Yet, reading mindfully offers unique benefits for our minds and souls that scrolling through social media simply cannot provide.
  
  ## What is Mindful Reading?
  
  Mindful reading involves giving your full attention to the text before you. It means engaging deeply with the words, ideas, and emotions presented on the page, rather than rushing through to reach the end.
  
  ## Benefits of Mindful Reading
  
  When you read mindfully, you:
  - Improve comprehension and retention
  - Develop greater empathy through connecting with different perspectives
  - Reduce stress and anxiety
  - Enhance focus and attention span
  
  ## How to Practice Mindful Reading
  
  1. **Create a dedicated space**: Find a quiet, comfortable place free from distractions.
  2. **Set an intention**: Before you begin, take a moment to consider why you're reading this particular text.
  3. **Engage your senses**: Notice the feel of the book, the sound of turning pages, even the smell of the paper.
  4. **Read with curiosity**: Approach the text with an open mind and genuine interest.
  5. **Take your time**: Pause to reflect on meaningful passages rather than racing to finish.
  
  The next time you pick up a book, try approaching it as more than just an item to check off your to-do list. Instead, see it as an opportunity for presence and connection.
      `,
    date: "2023-04-22",
  },
  {
    id: "3",
    title: "Finding Beauty in Simplicity",
    slug: "finding-beauty-in-simplicity",
    excerpt:
      "Explore how embracing simplicity in design and daily life can lead to greater appreciation and clarity.",
    content: `
  # Finding Beauty in Simplicity
  
  There's a profound beauty in simplicity that often goes unnoticed in our complex world. When we strip away the unnecessary, we're left with the essence—pure, functional, and often surprisingly elegant.
  
  ## The Aesthetic of Less
  
  Simplicity in design isn't about being plain or boring. Rather, it's about achieving maximum impact with minimum elements. Think of the clean lines of modern architecture, the sparse elegance of Japanese gardens, or the intuitive interface of your favorite app.
  
  ## Simplicity in Daily Life
  
  Beyond aesthetics, simplicity can transform how we experience our daily lives:
  
  - **Clear spaces** create room for clear thinking
  - **Simple routines** reduce decision fatigue
  - **Focused activities** lead to deeper engagement and flow
  
  ## How to Cultivate Simplicity
  
  1. **Eliminate the non-essential**: Regularly assess what you can remove without diminishing value.
  2. **Focus on quality over quantity**: Choose fewer, better things that will last.
  3. **Create breathing room**: Leave empty space in your home, calendar, and mind.
  4. **Appreciate what remains**: Practice gratitude for the simple pleasures that enrich your life.
  
  As Leonardo da Vinci wisely noted, "Simplicity is the ultimate sophistication." By embracing simplicity, we don't diminish our lives—we distill them to their most meaningful essence.
      `,
    date: "2023-05-10",
  },
];

export function getArticles() {
  return articles;
}

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}
