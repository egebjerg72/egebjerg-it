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
      'Jeg stiller op til Energi Fyns repræsentantskab og deler her min motivation og mine perspektiver på infrastruktur, grøn omstilling, teknologi og andelseje.',
    date: '2026-09-04',
    author: 'Niels Henrik Egebjerg',
    readingTimeDa: '8 min læsning',
    contentDa: `
<p class="blog-intro"><strong>Jeg stiller op til Energi Fyns repræsentantskab.</strong></p>

<p>Der er valg til repræsentantskabet i Energi Fyn, og jeg er kandidat.</p>

<p>Har du en elmåler fra Vores Elnet, er du andelshaver og dermed medejer af Energi Fyn, også selv om du eventuelt køber el hos et konkurrerende selskab. Mere end 220.000 fynske andelshavere ejer i fællesskab selskabet og vælger hvert fjerde år medlemmerne af repræsentantskabet.</p>

<p>Energi Fyn er ikke bare det selskab, der sender en regning eller sørger for, at der er strøm i stikkontakten. Det er en betydelig fynsk virksomhed, en vigtig del af vores infrastruktur og et selskab, som vi som andelshavere ejer i fællesskab.</p>

<p>Repræsentantskabet er Energi Fyns øverste myndighed og er blandt andet med til at sætte retningen for selskabets udvikling, godkende årsrapport og vedtægter og vælge medlemmer til bestyrelsen.</p>

<p>Derfor ønsker jeg at engagere mig, fordi jeg gerne vil være med til at tage ansvar for den udvikling.</p>

<h2>Energi Fyn er mere end el</h2>

<p>Når man siger Energi Fyn, tænker de fleste nok først på elektricitet. Men koncernen beskæftiger sig i dag med meget mere end det. Energi Fyn ejer gennem Vores Elnet en stor del af den fynske elinfrastruktur og har samtidig andre aktiviteter inden for el, naturgas, fibernet, ladeløsninger, varmepumper og energirådgivning.</p>

<p>De forskellige områder har meget forskellig karakter. På nogle områder forvalter Energi Fyn kritisk infrastruktur på vegne af os alle. På andre områder konkurrerer selskabet på almindelige markedsvilkår.</p>

<p>Det er væsentligt at forstå, når vi skal diskutere, hvor Energi Fyn skal investere og udvikle sig i fremtiden.</p>

<h2>Energi og infrastruktur</h2>

<p>Energisystemet kendetegnes ved, at det selskab man køber sin strøm eller gas af, ikke nødvendigvis er det selskab, der ejer infrastrukturen.</p>

<h3>El</h3>

<p>På elområdet kan det lidt forenklet beskrives sådan:</p>

<ul>
  <li><strong>Energinet:</strong> Energinet ejer og driver det overordnede transmissionsnet, der transporterer elektricitet rundt i Danmark og forbinder Danmark med vores nabolande.</li>
  <li><strong>Vores Elnet:</strong> Vores Elnet er en del af Energi Fyn-koncernen og ejer, driver og udvikler elnettet på størstedelen af Fyn. Det er blandt andet kabler, transformerstationer og den øvrige lokale infrastruktur, der skal bringe elektriciteten det sidste stykke frem til virksomheder og husstande.</li>
  <li><strong>Energi Fyn Handel:</strong> Energi Fyn Handel sælger elektricitet til kunderne i konkurrence med en lang række andre elselskaber.</li>
</ul>

<p>Vores Elnet er reguleret infrastruktur og et naturligt monopol. Det giver af gode grunde ikke mening at grave flere konkurrerende elkabler ned ved siden af hinanden til den enkelte virksomhed eller husstand. Elsalg er derimod en kommerciel aktivitet, hvor kunderne frit kan vælge leverandør.</p>

<h3>Naturgas</h3>

<p>På naturgasområdet er Energi Fyn leverandør, men ejer ikke gasnettet. Energi Fyn sælger naturgas til private og virksomheder i konkurrence med andre leverandører. Distributionen gennem gasnettet varetages af det statsejede Evida, mens Energinet har ansvaret for det overordnede transmissionssystem.</p>

<p>Naturgas er derfor for Energi Fyn grundlæggende en kommerciel forretning og har en anden karakter end ejerskabet af det fynske elnet.</p>

<h3>Fiber</h3>

<p>Energi Fyn har gennem mange år investeret i fibernet og tilbyder i dag bredbåndsløsninger til både private og virksomheder.</p>

<p>Digital infrastruktur har stor betydning for både virksomheder og borgere. Og ligesom elnettet er det for mange også en del af den kritiske infrastruktur. Samtidig er fiber et område præget af konkurrence og hastig teknologisk udvikling.</p>

<p>Det gør det efter min mening vigtigt løbende at vurdere både nye investeringer og den værdi, vi får ud af de investeringer, der allerede er foretaget.</p>

<h2>Hvorfor stiller jeg op?</h2>

<p>Repræsentantskabet skal ikke drive Energi Fyn i det daglige. Det er ledelsens opgave.</p>

<p>Men repræsentantskabet er selskabets øverste myndighed og har derfor en vigtig rolle i forhold til de overordnede rammer og den langsigtede retning.</p>

<p>Her vil jeg gerne bidrage med mine erfaringer inden for ledelse, strategi, digitalisering, teknologi og cybersikkerhed. Jeg tror samtidig på værdien af sund fornuft, ordentlighed og engagement, når der skal træffes beslutninger.</p>

<p>Energi Fyn skal udvikle sig og udnytte nye muligheder. Men det skal ske med blik for, at selskabet i sidste ende er ejet af os andelshavere og skal skabe langsigtet værdi for Fyn.</p>

<h2>Mit fokus</h2>

<h3 class="blog-focus-heading">1. Robust og sikker kritisk infrastruktur</h3>

<p>Vi tænker sjældent over elnettet, når det fungerer. Vi tænder lyset, oplader bilen, starter produktionsanlægget eller computeren og forventer naturligt, at strømmen er der. Men elektricitet er fundamentet under en meget stor del af vores moderne samfund.</p>

<p>I en tid med geopolitiske spændinger, cyberangreb og risiko for sabotage mod kritisk infrastruktur mener jeg derfor, at både cybersikkerhed, fysisk sikkerhed og beredskab skal have meget høj prioritet. Der stilles allerede omfattende lovgivningsmæssige krav på området, blandt andet gennem direktiver som NIS2. Men sikkerhed er ikke noget, man bliver færdig med.</p>

<p>Trusselsbilledet ændrer sig hele tiden. Derfor skal sikkerhed tænkes ind i teknologi, investeringer, leverandørsamarbejder og beredskab fra starten. Jeg mener samtidig, at vi skal værne om den langsigtede kontrol med den kritiske infrastruktur, som andelshaverne gennem Energi Fyn ejer.</p>

<h3 class="blog-focus-heading">2. Et elnet, der kan bære den grønne omstilling</h3>

<p>Den grønne omstilling handler ikke kun om at opstille flere vindmøller og solceller.</p>

<p>Flere elbiler, varmepumper og en generel elektrificering af samfundet betyder, at vi både kommer til at producere og forbruge elektricitet på nye måder.</p>

<p>Det stiller store krav til elnettet.</p>

<p>Fremtidens elnet skal kunne håndtere større belastning, mere decentral energiproduktion og et langt mere dynamisk energisystem.</p>

<p>Det kræver investeringer.</p>

<p>Men investeringerne skal foretages ansvarligt og med et langsigtet perspektiv. Vi skal udvikle infrastrukturen i takt med behovet og samtidig bruge teknologi, data og intelligent styring til at få mest muligt ud af den kapacitet, vi allerede har.</p>

<p>Den grønne omstilling skal være ambitiøs, men den skal også være økonomisk ansvarlig.</p>

<h3 class="blog-focus-heading">3. Digitalisering, data og kunstig intelligens</h3>

<p>Teknologi kommer til at spille en stadig større rolle i energisektoren. Data, automatisering og kunstig intelligens giver nye muligheder for eksempelvis at udnytte infrastrukturen bedre, optimere driften og skabe bedre digitale løsninger for kunder og andelshavere.</p>

<p>Men digitalisering må aldrig blive et mål i sig selv. Ny teknologi skal bruges, når den løser et reelt problem eller skaber en reel værdi. Investeringer i teknologi skal derfor kunne forsvares forretningsmæssigt, og brugen af data og kunstig intelligens skal ske ansvarligt og med respekt for sikkerhed og privatliv.</p>

<h3 class="blog-focus-heading">4. Fiber som langsigtet digital infrastruktur</h3>

<p>Adgangen til hurtige og stabile digitale forbindelser er blevet en grundlæggende del af infrastrukturen for både virksomheder og private. Energi Fyn har allerede investeret betydeligt i fiberinfrastruktur på Fyn.</p>

<h3 class="blog-focus-heading">5. Naturgas og et energisystem i forandring</h3>

<p>Naturgas har i mange år været en vigtig del af det danske energisystem.</p>

<p>Men energisystemet er under forandring. Elektrificering, varmepumper, fjernvarme, biogas og andre teknologier vil ændre energimarkedet over de kommende år.</p>

<p>Energi Fyn ejer ikke gasnettet, men konkurrerer som gasleverandør på det frie marked.</p>

<p>Derfor mener jeg også, at vi løbende skal forholde os strategisk til, hvilken rolle naturgas og andre energiprodukter skal spille i Energi Fyns fremtidige forretning.</p>

<p>Det handler ikke om at forsøge at forudsige energisystemet 20 år frem. Det handler om at sikre, at andelshavernes selskab investerer dér, hvor der både er et langsigtet behov og en sund forretning.</p>

<h2>Derfor stiller jeg op</h2>

<p>Jeg ønsker, at Energi Fyn også i fremtiden skal være et moderne, veldrevet og økonomisk ansvarligt energiselskab med stærke fynske rødder.</p>

<ul>
  <li>Et selskab, der investerer langsigtet i den nødvendige infrastruktur.</li>
  <li>Et selskab, der tager sikkerhed alvorligt.</li>
  <li>Et selskab, der bidrager aktivt til den grønne omstilling.</li>
  <li>Et selskab, der udnytter mulighederne i ny teknologi uden at løbe efter enhver ny trend.</li>
  <li>Et selskab, som er fynboernes foretrukne leverandør, fordi det giver os det bedste produkt.</li>
</ul>

<p class="blog-closing">Det vil jeg gerne være med til at arbejde for i Energi Fyns repræsentantskab.</p>
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