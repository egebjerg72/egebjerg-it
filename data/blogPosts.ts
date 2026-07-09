
export interface BlogPost {
  slug: string
  title: string
  author: string
  date: string        // ISO: YYYY-MM-DD
  readingTime: string
  excerpt: string
  content: string     // HTML string
}

export const blogPosts = [
  {
    slug: 'hands-on-with-ai', // ← keep your existing slug
    title: 'Hands on with AI', // ← keep your existing title
    excerpt:
      'There is — rightly — an intense focus on AI at the moment. Here is what I have learned by getting hands on.',
    author: 'Niels Henrik Egebjerg',
    date: '2026-07-09', // ← keep your existing date
    readingTime: '5 min read',
    content: `
<p>There is — rightly — an intense focus on AI at the moment. Conferences. Whitepapers. LinkedIn posts from people "transforming businesses with agentic AI", building AI into every process you can think of, performing deep analysis in seconds etc. And it will for sure change the way we work and keep evolving for the coming years.</p>

<p>It is clear that tasks that used to take weeks can, in some cases, now be solved in hours or even minutes. It is also clear that AI can provide strong advising and analytics on the side if used the right way, adding skills you don't have in the organization, and that you might not have planned to hire.</p>

<p>This makes it critical for companies, organizations, and leaders to understand what AI means for the way we work and what possibilities it brings for the future. And that is not easy. It can be quite overwhelming to read the daily feeds listing possibilities and new features. And we need to govern how AI tools are adopted by people and used in daily work and processes, how automations are set up etc.</p>

<h2>Hands on</h2>

<p>In my experience as a leader, you need to try it out yourself. You need to know what works. You need to understand how to make prompts to your AI assistant that work. You need to understand that AI agents have instructions, skills and knowledge. And then to challenge and improve them. In order to understand why agents act as they do and be able to elaborate on ideas for how to use them and improve them, and which new agents to introduce. This is what changes the daily work and delivers new possibilities, speed, automations etc.</p>

<p>My hands-on experience started with ChatGPT in my spare time – but quickly went to Copilot in my daily work. The first prompts were impressive – but many routines went back to how I used to do things. Until I forced myself to try again, improve prompting, not accepting that I did not succeed. At one point it tipped over from being something I should learn, to something that actually provided value in my daily work.</p>

<p>That point was a game changer for me – making it possible to do more work and add more quality and dimensions to it.</p>

<h2>What is egebjerg.it?</h2>

<p>I set up this spare-time project to build a personal website. I wanted to see how far I could get with simple help from my AI assistant.</p>

<p>egebjerg.it was created in a single evening. Not because I am a developer. But because I sat down with AI tools, asked the right questions and followed instructions step by step.</p>

<p>No agency. No developers. No budget.</p>

<p>In my case, a Microsoft 365 Copilot licence combined with OpenAI's GPT model and Anthropic's Claude. I described the idea in a simple prompt and was guided towards a setup based on two specialised agents — along with concrete implementation instructions.</p>

<p><strong>An advisory agent:</strong> A panel consisting of a chairman, a personal advisor, a branding expert, and a critical challenger. (AI tends to be overly positive — introducing a critical perspective has a noticeable impact on quality.)</p>

<p><strong>A development agent:</strong> A senior full-stack developer with clear instructions on the chosen platform (GitHub, Cloudflare Pages, and domain setup).</p>

<h2>What did I learn?</h2>

<p>The conclusion is clear: AI agents are not magic.</p>

<p>They are tools — with clear strengths and limitations.</p>

<p>Once you understand them from the inside, the buzz disappears. What remains is something far more valuable: the ability to solve real problems.</p>

<p>Like any other technology, success is not about hype — it is about implementation. AI can deliver speed and efficiency, and help with skills you don't have. Like me creating a website and making it publicly available. But it is also clear that AI has its limitations and that it should be used as a tool to augment human capabilities, not replace them.</p>

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
    `.trim(),
  },
]