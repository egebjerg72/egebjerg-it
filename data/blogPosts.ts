// src/data/blogPosts.ts

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  readingTime: string
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'you-dont-need-to-understand-everything-about-ai',   // ← keep your existing slug
    title: 'You don\'t need to understand everything about AI',
    excerpt:
      'The gap between leaders who observe AI and leaders who engage with it is widening fast. This is my perspective on why it matters, and what I did about it.',
    date: '2026-07-09',
    author: 'Niels Henrik Egebjerg',
    readingTime: '6 min read',
    content: `
<p class="blog-intro"><strong>You don't need to understand everything about AI. But you should understand enough to ask the right questions.</strong></p>

<p>That gap, between leaders who observe AI and leaders who engage with it, is widening fast. This is my perspective on why it matters, and what I did about it.</p>



<h2>The noise is real. So is the opportunity.</h2>

<p>There is rightly an intense focus on AI at the moment. Conferences, whitepapers and LinkedIn posts from people <em>"transforming businesses with agentic AI"</em>, building AI into every process you can think of, performing deep analysis in seconds. And it will for sure change the way we work and keep evolving for years to come.</p>

<p>It is clear that tasks that used to take weeks can, in some cases, now be solved in hours or even minutes. It is also clear that AI can provide strong advising and analytics, if used the right way adding skills you don't have in the organisation, and that you might not have planned to hire.</p>

<p>This makes it critical for companies, organisations, and leaders to understand what AI means for the way we work and what possibilities it brings for the future. And that is not easy. It can be quite overwhelming to read the daily feeds listing new possibilities and features. We also need to govern how AI tools are adopted by people, how they are used in daily work and processes, and how automations are set up responsibly, with clear guardrails and security in place.</p>

<h2>Hands on</h2>

<p>In my experience as a leader, you need to try it out yourself. You need to know what works. You need to understand how to make prompts to your AI assistant that actually deliver results. You need to understand that AI agents have instructions, skills, and knowledge, and then learn to challenge and improve them. To understand why agents act as they do, and to be able to elaborate on ideas for how to use them, improve them, and which new agents to introduce. This is what changes daily work and delivers new possibilities, speed, and automations.</p>

<p>My hands-on experience started with ChatGPT in my spare time, but quickly moved to Copilot in my daily work. The first prompts were impressive, but many routines drifted back to how I used to work. Until I forced myself to try again, improve my prompting, and stop accepting failure as the outcome. After a while, it tipped over from being something I <em>should</em> learn, to something that actually provided value in my daily work.</p>

<p>That point was a game changer for me, making it possible to do more work and add more quality and new dimensions to it. Turning AI tools from background noise into a genuine competitive advantage.</p>

<h2>What is egebjerg.it?</h2>

<p>I set up this spare-time project to build a personal website and deliberately used it as a method for building hands-on leadership judgment around AI. I wanted to see how far I could get, from scratch, with help from my AI assistant.</p>

<p>egebjerg.it was created in a single evening. Not because I am a developer. But because I sat down with an AI tool, asked the right questions, and followed instructions step by step.</p>

<p><strong>No agency. No developers. No budget.</strong></p>

<p>In my case, a Microsoft 365 Copilot licence combined with OpenAI's GPT model and Anthropic's Claude. I described the idea in a simple prompt and was guided towards a setup based on two specialised agents, along with concrete implementation instructions. Following those instructions, I configured two Copilot agents:</p>

<ul>
  <li>
    <strong>An advisory agent:</strong> A panel consisting of a chairman, a personal advisor, a branding expert, and a critical challenger.
    <em>(AI tends to be overly positive. Introducing a critical perspective has a noticeable impact on quality. This is a key takeaway.)</em>
  </li>
  <li>
    <strong>A development agent:</strong> A senior full-stack developer with clear instructions on the chosen platform (GitHub, Cloudflare Pages, and domain setup).
  </li>
</ul>

<figure class="blog-hero-image">
  <img
    src="/images/blog-ai-leadership.jpg"
    alt="AI Leadership and Digital Transformation — Niels Henrik Egebjerg"
    width="811"
    height="762"
    loading="lazy"
    decoding="async"
  />
</figure>

<h2>What did I learn?</h2>

<p>You can go very far in areas where you are not an expert, and with decent results. But results are directly tied to the information you provide.</p>

<p>When prompting, tell the AI assistant your <strong>goal</strong>, the <strong>context</strong>, the <strong>sources</strong> to use, and the <strong>expectations</strong> you have for the result. This will get you a long way.</p>

<p>It is also clear that your own domain skills affect the quality of the outcome. I could be reasonably happy with the first version of egebjerg.it. But when my marketing colleague looks at the front-end layout, when a copywriter reviews my writing, or when a skilled developer examines the code, it will be challenged in ways I would not think of myself. And they would know how to direct the AI assistant far more precisely, making the result significantly better in just a few minutes.</p>

<p>With this understanding, AI is behind extremely powerful tools. And I will continue to challenge and develop the solution across different areas.</p>

<h2>Why does this matter as a CIO?</h2>

<p>Even organisations that are advanced in their use of AI agents do not always fully understand how to maximise their impact.</p>

<p>The issue is not a lack of investment. It is a lack of proximity to the technology.</p>

<p>Too many leaders observe AI from the outside. They read about it. Approve budgets for it. But rarely engage with it directly.</p>

<p>Organisations that lead in AI adoption share one trait: their senior leaders engage with the technology directly, not just strategically. Knowing which questions to ask, which risks to govern, and which investments to prioritise is what separates leaders who shape AI's role in their organisation from those who are shaped by it.</p>

<p>My point is simple: <strong>You do not need to understand everything. But you should understand enough to ask the right questions.</strong></p>

<p class="blog-closing">
  <em>When did you last use your AI tool yourself, rather than delegate it? </em><br/>
  <em>I strongly recommend the hands-on approach!
  </p>

    `,
  },
]