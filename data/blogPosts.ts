// src/data/blogPosts.ts

export type BlogLanguage = 'en' | 'da'

export interface BlogPost {
  slug: string
  title?: string
  titleDa: string
  excerpt?: string
  excerptDa: string
  date: string
  author: string
  readingTime?: string
  readingTimeDa: string
  content?: string
  contentDa: string
}

export function hasEnglishVersion(
  post: BlogPost,
): post is BlogPost & Required<Pick<BlogPost, 'title' | 'excerpt' | 'readingTime' | 'content'>> {
  return Boolean(post.title && post.excerpt && post.readingTime && post.content)
}

export function getBlogPostsForLanguage(language: BlogLanguage) {
  const posts = language === 'da' ? blogPosts : blogPosts.filter(hasEnglishVersion)
  return [...posts].sort((a, b) => b.date.localeCompare(a.date))
}

export function getBlogPostHref(post: BlogPost, language: BlogLanguage) {
  return language === 'da' ? `/da/blog/${post.slug}` : `/blog/${post.slug}`
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'kandidat-til-repraesentantskabet-i-energi-fyn',
    titleDa: 'Kandidat til repræsentantskabet i Energi Fyn',
    excerptDa:
      'Der er valg til repræsentantskabet i Energi Fyn, og jeg er kandidat. Her deler jeg min motivation og mit syn på Energi Fyns rolle.',
    date: '2026-09-04',
    author: 'Niels Henrik Egebjerg',
    readingTimeDa: '2 min læsning',
    contentDa: `
<p class="blog-intro"><strong>Der er valg til repræsentantskabet i Energi Fyn, og jeg er kandidat.</strong></p>

<p>Hvis du er bosat eller har sommerhus på Fyn, og har en elmåler fra Vores Elnet (Energi Fyns datterselskab), så er du en af de ca. 220.000 andelshavere, som ejer Energi Fyn, med mulighed for at stemme til repræsentantskabsvalget i perioden fra 12. oktober til 2. november 2026. Og jeg håber, du vil benytte muligheden for at gøre din stemme gældende.</p>

<p>Her vil jeg dele, hvordan jeg ser Energi Fyns rolle og min motivation for at stille op til repræsentantskabsvalget.</p>

<h2>Elforsyningen på Fyn</h2>

<ul>
  <li>
    <strong>Energinet:</strong> Ansvaret for den overordnede forsyningssikkerhed i Danmark ligger hos Klima-, Energi- og Forsyningsministeriet, som via det statsejede selskab Energinet ejer og driver det landsdækkende højspændingsnet (transmissionsnettet).
  </li>
  <li>
    <strong>Vores Elnet:</strong> Det netselskab, der ejer den lokale del af elnettet på størstedelen af Fyn. De sørger for, at strømmen kommer fra det overordnede transmissionsnet og helt frem til virksomheder, husstande, ladestandere og produktionsanlæg. Vores Elnet har et naturligt monopol, da det eksempelvis ikke giver mening at grave flere konkurrerende kabler ned ved siden af hinanden og ind i husene.
  </li>
  <li>
    <strong>Energi Fyn Handel:</strong> Selskabet som i konkurrence med andre elselskaber (for eksempel Norlys, OK, EWII, Andel og Nettopower) sælger den strøm, som leveres via nettet til slutbrugeren.
  </li>
</ul>

<p>Flere opdateringer på vej.</p>
    `,
  },
  {
    slug: 'you-dont-need-to-understand-everything-about-ai',
    title: 'You don\'t need to understand everything about AI',
    titleDa: 'Du behøver ikke forstå alt om AI',
    excerpt:
      'The gap between leaders who observe AI and leaders who engage with it is widening fast. This is my perspective on why it matters, and what I did about it.',
    excerptDa:
      'Kløften mellem ledere, der observerer AI, og ledere der engagerer sig i det, vokser hurtigt. Her er mit perspektiv på hvorfor det betyder noget, og hvad jeg gjorde ved det.',
    date: '2026-07-09',
    author: 'Niels Henrik Egebjerg',
    readingTime: '6 min read',
    readingTimeDa: '6 min læsning',
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
    contentDa: `
<p class="blog-intro"><strong>Du behøver ikke forstå alt om AI. Men du bør forstå nok til at stille de rigtige spørgsmål.</strong></p>

<p>Kløften mellem ledere der observerer AI og ledere der engagerer sig i det, vokser hurtigt. Her er mit perspektiv på, hvorfor det betyder noget, og hvad jeg gjorde ved det.</p>

<h2>Støjen er reel. Muligheden er det også.</h2>

<p>Der er med rette et intenst fokus på AI i øjeblikket. Konferencer, whitepapers og LinkedIn-opslag fra folk, der <em>"transformerer virksomheder med agentbaseret AI"</em>, bygger AI ind i alle processer, man kan forestille sig, og udfører dyb analyse på sekunder. Og det vil helt sikkert ændre den måde, vi arbejder på, og fortsætte med at udvikle sig i de kommende år.</p>

<p>Det er tydeligt, at opgaver der tidligere tog uger, i nogle tilfælde nu kan løses på timer eller endda minutter. Det er også tydeligt, at AI kan levere stærk rådgivning og analyse, hvis det bruges på den rigtige måde, og tilføje kompetencer, som organisationen ikke har, og måske ikke havde planlagt at tilføre.</p>

<p>Det gør det afgørende for virksomheder, organisationer og ledere at forstå, hvad AI betyder for den måde, vi arbejder på, og hvilke muligheder det bringer for fremtiden. Det er ikke let. Det kan være ganske overvældende at følge de daglige opdateringer med nye muligheder og funktioner. Vi skal også styre, hvordan AI-værktøjer tages i brug af medarbejderne, hvordan de bruges i dagligt arbejde og processer, og hvordan automatiseringer konfigureres med klare rammer og sikkerheden på plads.</p>

<h2>Hands on</h2>

<p>Min erfaring som leder er at du prøve det selv. Du skal vide, hvad der virker. Du skal forstå, hvordan du formulerer prompts til din AI-assistent eller Agent, der rent faktisk leverer resultater. Du skal forstå, at AI-agenter har instruktioner, færdigheder og viden. Og du skal lære at udfordre og forbedre dem. Forstå, hvorfor agenter handler, som de gør, og være i stand til at komme med idéer til, hvordan man bruger dem, forbedrer dem, og hvilke nye agenter man bør introducere. Det er det, der ændrer det daglige arbejde og leverer nye muligheder, hastighed og automatiseringer.</p>

<p>Min hands-on erfaring startede med ChatGPT i min fritid, men rykkede hurtigt over til Copilot i mit daglige arbejde. De første prompts var imponerende, men mange rutiner gled tilbage til, som jeg plejede at arbejde. Indtil jeg tvang mig selv til at prøve igen, forbedre mine prompts og holde op med at acceptere fejl som resultatet. Efter et stykke tid tippede det fra at være noget, jeg <em>burde</em> lære, til noget der faktisk gav værdi i mit daglige arbejde.</p>

<p>Det punkt var en gamechanger for mig. Det gjorde det muligt at udføre mere arbejde og tilføje mere kvalitet og nye dimensioner til det. AI-værktøjer gik fra at være baggrundsstøj til at blive en reel konkurrencemæssig fordel.</p>

<h2>Hvad er egebjerg.it?</h2>

<p>Jeg satte dette fritidsprojekt op for at bygge en personlig hjemmeside. Jeg ville se, hvor langt jeg kunne komme, fra bunden, med hjælp fra min AI-assistent.</p>

<p>egebjerg.it blev skabt på en enkelt aften. Ikke fordi jeg er udvikler. Men fordi jeg satte mig ned med et AI-værktøj, stillede de rigtige spørgsmål og fulgte instruktionerne trin for trin.</p>

<p><strong>Intet bureau. Ingen udviklere. Intet budget.</strong></p>

<p>I mit tilfælde en Microsoft 365 Copilot-licens kombineret med OpenAIs GPT-model og Anthropics Claude. Jeg beskrev idéen i en simpel prompt og blev guidet mod en opsætning baseret på to specialiserede agenter med konkrete implementeringsinstruktioner. Ud fra disse instruktioner konfigurerede jeg to Copilot-agenter:</p>

<ul>
  <li>
    <strong>En rådgivende agent:</strong> Et panel bestående af en formand, en personlig rådgiver, en brandingekspert og en kritisk udfordrer.
    <em>(AI har en tendens til at være overdrevent positiv. At introducere et kritisk perspektiv har en mærkbar effekt på kvaliteten. Det er en vigtig læring.)</em>
  </li>
  <li>
    <strong>En udviklingsagent:</strong> En senior full-stack-udvikler med klare instruktioner om den valgte platform (GitHub, Cloudflare Pages og domæneopsætning).
  </li>
</ul>

<figure class="blog-hero-image">
  <img
    src="/images/blog-ai-leadership.jpg"
    alt="AI-lederskab og digital transformation — Niels Henrik Egebjerg"
    width="811"
    height="762"
    loading="lazy"
    decoding="async"
  />
</figure>

<h2>Hvad lærte jeg?</h2>

<p>Du kan opnå anstændige resultater indenfor områder du ikke er ekspert i. Men resultaterne er fortsat afhængige af den information du leverer.</p>

<p>Når du prompter, så fortæl AI-assistenten dit <strong>mål</strong>, <strong>konteksten</strong>, de <strong>kilder</strong> der skal bruges, og de <strong>forventninger</strong> du har til resultatet. Det bringer dig langt.</p>

<p>Det er også tydeligt, at dine egne faglige kompetencer påvirker kvaliteten af resultatet. Jeg kunne være rimeligt tilfreds med den første version af egebjerg.it. Men når min marketingkollega ser på frontend-layoutet, når en tekstforfatter gennemgår teksterne, eller når en dygtig udvikler gennemgår koden, vil det blive udfordret på måder, jeg ikke selv er i stand til. Og de ville vide, hvordan de skulle guide AI-assistenten langt mere præcist, og gøre resultatet markant bedre på deres respektive områder.</p>

<p>Med denne forståelse er AI bag ekstremt kraftfulde værktøjer. Og jeg vil fortsætte med at udfordre og udvikle løsningen på tværs af forskellige områder.</p>

<h2>Hvorfor betyder dette noget som CIO?</h2>

<p>Selv organisationer der er avancerede i brugen af AI-agenter forstår ikke altid fuldt ud, hvordan man maksimerer deres effekt.</p>

<p>Problemet er ikke mangel på investering. Det er mangel på nærhed til teknologien.</p>

<p>For mange ledere observerer AI udefra. De læser om det. Godkender budgetter til det. Men engagerer sig sjældent direkte i det.</p>

<p>Der er behov for ledere som engagerer sig direkte i teknologien, ikke kun strategisk. At vide hvilke spørgsmål man skal stille, kende potentielle risici , og kunne prioritere de rette investeringer, det er hvad der adskiller ledere der former AI's rolle i deres organisation fra dem, der formes af den.</p>

<p>Mit punkt er enkelt: <strong>Du behøver ikke forstå alt. Men du bør forstå nok til at stille de rigtige spørgsmål.</strong></p>

<p class="blog-closing">
  <em>Hvornår brugte du sidst selv dit AI-værktøj i stedet for at delegere det?</em><br/>
  <em>Jeg anbefaler stærkt den hands-on tilgang!</em>
</p>
    `,
  },
]