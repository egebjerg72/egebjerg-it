
export interface BlogPost {
  slug: string
  title: string
  author: string
  date: string        // ISO: YYYY-MM-DD
  readingTime: string
  excerpt: string
  content: string     // HTML string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'everyone-is-talking-about-ai-agents',
    title: 'Everyone is talking about AI agents. I just built a website.',
    author: 'Niels Henrik Egebjerg',
    date: '2026-06-19',
    readingTime: '4 min read',
    excerpt:
      'There is — rightly — an intense focus on AI at the moment. Tasks that used to take weeks or months can, in some cases, now be solved in hours or days.',
    content: `
      <p>There is — rightly — an intense focus on AI at the moment. Conferences. Whitepapers. LinkedIn posts from people "transforming businesses with agentic AI."</p>

      <p>It sounds big. And it <em>can</em> be complex. But one thing is clear: tasks that used to take weeks or months can, in some cases, now be solved in hours or days.</p>

      <p>This makes it critical for companies, organisations, and leaders to understand what AI means for the way we work.</p>

      <p>I set out to build a small side project to make this more tangible — and less abstract.</p>

      <h2>What is egebjerg.it?</h2>

      <p>This site is my answer to the question: <em>"What happens when a CIO sits down and builds something using the same tools he recommends to others?"</em></p>

      <p>egebjerg.it was created in a single evening. Not because I am a developer. But because I sat down with the right AI tools and did it myself — step by step.</p>

      <p>No agency. No developers. No budget.</p>

      <p>In my case, a Microsoft 365 Copilot licence combined with OpenAI's GPT model and Anthropic's Claude. I described the idea in a simple prompt and was guided towards a setup based on two specialised agents — along with concrete implementation instructions.</p>

      <p><strong>An advisory agent:</strong> A panel consisting of a chairman, a personal advisor, a branding expert, and a critical challenger. (AI tends to be overly positive — introducing a critical perspective has a noticeable impact on quality.)</p>

      <p><strong>A development agent:</strong> A senior full-stack developer with clear instructions on the chosen platform (GitHub, Cloudflare Pages, and domain setup).</p>

      <h2>What did I learn?</h2>

      <p>The conclusion is clear: AI agents are not magic.</p>

      <p>They are tools — with clear strengths and clear limitations.</p>

      <p>Once you understand them from the inside, the buzz disappears. What remains is something far more valuable: the ability to solve real problems.</p>

      <p>Like any other technology, success is not about hype — it is about implementation.</p>

      <h2>Why does this matter as a CIO?</h2>

      <p>Even organisations that are advanced in their use of AI agents do not always fully understand how to maximise their impact.</p>

      <p>The issue is not a lack of investment. It is a lack of proximity to the technology.</p>

      <p>Too many leaders observe AI from the outside. They read about it. Approve budgets for it. But rarely engage with it directly.</p>

      <p>My point is simple: You do not need to understand everything. But you should understand enough to ask the right questions.</p>

      <h2>What can you expect here?</h2>

      <p>Going forward, I will share practical, hands-on experiences with AI in real-world contexts — not theory, but things I have personally tested.</p>

      <p>For CIOs, IT leaders, and executives looking for a more grounded, no-buzz perspective.</p>

      <p>Welcome to egebjerg.it.</p>

      <p><em>— Niels Henrik</em></p>
    `,
  },
]
