export const navLinks = [
  { label: "Home", href: "home" },
  { label: "Country Profile", href: "country-profile" },
  { label: "Islamophobia in France", href: "islamophobia" },
  { label: "Political Figures", href: "political" },
  { label: "Legal Restrictions", href: "legal" },
  { label: "Economic Restrictions", href: "economic" },
  { label: "Surveillance", href: "surveillance" },
  { label: "Media & Culture", href: "media" },
  { label: "Counter-Movements", href: "counter" },
  { label: "References", href: "references" },
];

export const teamMembers = [
  { name: "Aaliyah Mensah", role: "Lead Researcher" },
  { name: "Tariq El-Amin", role: "Policy Analyst" },
  { name: "Sophie Tremblay", role: "Media & Culture" },
  { name: "Yusuf Okonkwo", role: "Legal & Economic Analysis" },
];

// Country Profile
export const countryProfile = {
  country: "France",
  thesis: `France presents a paradox: a republic that enshrines liberté, égalité, fraternité as its founding ideals, yet has systematically constructed its Muslim minority — the largest in Western Europe — as a fundamental threat to its secular order. This project argues that Islamophobia in France is not incidental or episodic, but structurally embedded in the state's interpretation of laïcité (secularism), reproducing racial and religious hierarchy under the guise of republican universalism.`,
  stats: [
    { label: "Total Population", value: "68 million" },
    { label: "Estimated Muslim Population", value: "5–6 million" },
    { label: "% Muslim", value: "~8–9%" },
    { label: "Largest Muslim pop. in W. Europe", value: "#1" },
  ],
  history: [
    {
      title: "Colonial Roots (1830–1962)",
      content: `France colonized Algeria in 1830, ruling it for 132 years. The colonial system created a two-tiered legal structure: European settlers held full citizenship, while Muslim Algerians were classified as 'subjects,' not citizens, denied equal rights under the Code de l'indigénat. This hierarchical logic — Muslim identity as incompatible with full civic belonging — was never fully dismantled after decolonization. Scholars like Nacira Guénif-Souilamas argue that contemporary French Islamophobia is a direct extension of this colonial archive (Guénif-Souilamas, 2006).`,
    },
    {
      title: "Post-War Migration & the 'Trente Glorieuses' (1945–1973)",
      content: `Following World War II, France actively recruited North African laborers — primarily Algerians and Moroccans — to rebuild its economy during the 'Thirty Glorious Years' of economic growth. These workers, concentrated in segregated housing estates (cités) on the urban periphery, were never envisioned as permanent residents. When economic recession struck in 1973, immigration was halted, yet millions remained. The state's failure to integrate these communities created stratified suburbs — the banlieues — that became spaces of structural exclusion and racialized poverty.`,
    },
    {
      title: "The Headscarf Affairs (1989–2010)",
      content: `France's 'Affaire du foulard' began in 1989 when three girls were expelled from a school in Creil for wearing headscarves. This triggered a national crisis that lasted decades. In 2004, Law 2004-228 banned 'conspicuous religious symbols' in public schools — a law disproportionately targeting Muslim girls. In 2010, Law 2010-1192 banned full-face coverings (niqab/burqa) in all public spaces, becoming the first such ban in Europe. These legislative events crystalized the state's position: Muslim religious expression, particularly female modesty dress, was cast as incompatible with French republican identity.`,
    },
    {
      title: "Post-2015 Security Turn",
      content: `The January 2015 Charlie Hebdo attacks and November 2015 Paris attacks resulted in 147 deaths and fundamentally reshaped the political landscape. France declared a state of emergency that lasted two years (2015–2017), granting police extraordinary powers of search, seizure, and house arrest. A 2017 counter-terrorism law permanently incorporated many emergency provisions into ordinary law. The 2021 'separatism law' (Law Against Separatism) further extended state powers to monitor, close, and dissolve Muslim associations, mosques, and schools deemed to threaten republican values.`,
    },
  ],
  religiousDiversity: `France is constitutionally secular (laïque), with the state officially not recording religion. Estimates suggest: Christians ~41%, No religion ~40%, Muslims ~8–9%, other ~10%. French Muslims are highly diverse: Algerian-origin ~43%, Moroccan-origin ~27%, Sub-Saharan African ~11%, Turkish-origin ~11%, converts and others ~8% (Pew Research Center, 2017). This diversity is systematically erased in political and media discourse, which constructs 'the Muslim' as a monolithic, foreign, and potentially dangerous Other.`,
};

// Islamophobia Framework
export const islamophobiaFramework = {
  centralArgument: `French Islamophobia operates through what sociologist Abdellali Hajjat and Marwan Mohammed call the "Islamophobic chain": a self-reinforcing circuit linking political rhetoric, legal prohibition, media spectacle, and everyday discrimination. The state weaponizes laïcité — a principle originally designed to protect individual freedom from religious authority — and transforms it into a tool of exclusion that targets Muslims specifically while leaving other religious expressions largely undisturbed. This selective secularism is not incidental but constitutive of how French national identity is being reconstructed in the 21st century (Hajjat & Mohammed, 2013).`,
  manifestations: [
    {
      title: "Structural vs. Episodic Islamophobia",
      content: `Following the Runnymede Trust's framework (1997), Islamophobia in France must be understood as structural — embedded in laws, institutions, and social norms — rather than merely episodic hate crimes by individual perpetrators. The CCIF (Collectif Contre l'Islamophobie en France) documented over 1,000 anti-Muslim acts annually before its forced dissolution in 2020, and the CNCDH (National Consultative Commission on Human Rights) consistently reports that Muslims are the most targeted religious group in France (CNCDH, 2021).`,
    },
    {
      title: "Racialization of Religion",
      content: `Drawing on Omi and Winant's racial formation theory (1986), Muslim identity in France has been racialized — meaning it functions as a racial category, not merely a religious one. Being Muslim in France is frequently read through physical appearance: North African or Sub-Saharan African phenotype, name, dress. This means that even secular French citizens of Algerian descent experience Islamophobia as racial discrimination. The French state's official color-blindness — its refusal to collect racial or ethnic data — paradoxically perpetuates racial inequality by making it invisible and unaddressable.`,
    },
    {
      title: "Gender & Intersectionality",
      content: `French feminist scholar Christine Delphy (2006) identified what she called 'colonial feminism': the deployment of feminist language to justify restrictions on Muslim women. The headscarf bans were justified as liberating Muslim women from patriarchal oppression — yet Muslim women themselves were not centered in these debates. Applying Kimberlé Crenshaw's intersectionality framework (1991), Muslim women in France face overlapping systems of gender discrimination, racial discrimination, religious discrimination, and class disadvantage that cannot be understood in isolation from one another.`,
    },
  ],
};

// Political Figures
export const politicalFigures = [
  {
    name: "Marine Le Pen",
    party: "Rassemblement National (RN) — National Rally",
    role: "Presidential Candidate (2012, 2017, 2022), Member of European Parliament",
    imageQuery: "Marine Le Pen politician",
    rhetoric: [
      `"Islamist fundamentalism must be annihilated. France must ban the Islamic veil in all public places." (Campaign speech, 2021)`,
      `Compared Muslims praying in streets to Nazi occupation: "For those who like to talk about World War II, to talk about occupation, we could talk, for once, about, for those who don't like to talk about it, the occupation of our territory... No armoured vehicles, no soldiers, but it is an occupation and it weighs on people." (2010 speech, later convicted of incitement to discrimination, conviction overturned by European Court of Human Rights)`,
      `Proposed banning the 'Muslim veil' in all public spaces and 'dual nationality' with Muslim-majority countries as a security threat.`,
    ],
    electoralImpact: `Le Pen won 33.9% of the vote in the 2017 presidential runoff and 41.5% in 2022 — the highest ever for the far-right in French history. Her mainstreaming of anti-Muslim rhetoric normalized positions previously confined to the political fringe. Polls consistently show anti-Muslim sentiment as a strong predictor of RN vote share (Perrineau, 2022).`,
    source: "Hajjat & Mohammed, Islamophobie, 2013; ECRI Report on France, 2022",
  },
  {
    name: "Éric Zemmour",
    party: "Reconquête! (Reconquest!)",
    role: "Presidential Candidate (2022), Former Journalist",
    rhetoric: [
      `"Islam is not compatible with France." — Repeated claim across multiple media appearances.`,
      `"The French Muslims have to choose: Islam or France." — CNews broadcast, 2019 (convicted of incitement to religious hatred, fined €10,000).`,
      `Called for banning Arabic first names for French citizens and ending Muslim immigration entirely.`,
      `His book 'Le Suicide Français' (2014) sold 500,000 copies and became a manifesto of 'great replacement' theory — the far-right conspiracy claiming Western populations are being demographically replaced by Muslims and Africans.`,
    ],
    electoralImpact: `Received 7.1% of the first-round vote in 2022. More significantly, Zemmour shifted the Overton window: policy positions once considered extreme became debatable in mainstream discourse. His campaign forced other right-wing candidates, including Valérie Pécresse, to adopt harder anti-Muslim stances.`,
    source: "Geisser, La Nouvelle Islamophobie, 2003; Shields, The Extreme Right in France, 2007",
  },
  {
    name: "Nicolas Sarkozy",
    party: "Les Républicains (UMP)",
    role: "President of France (2007–2012)",
    rhetoric: [
      `As Interior Minister in 2005, described youth in the banlieues (predominantly North African and Black) as 'racaille' (scum/rabble) and promised to 'clean them out with a Kärcher [pressure hose].' His remarks preceded the 2005 riots.`,
      `Launched the 'debate on national identity' in 2009, widely interpreted as targeting Islam and immigrant communities.`,
      `Declared: "In France, we don't want the burqa." — Addressing both chambers of Parliament, 2009, paving the way for the 2010 ban.`,
    ],
    electoralImpact: `Sarkozy pioneered the strategy of 'droitisation' — shifting right to capture far-right voters — that subsequent politicians emulated. His tenure normalized anti-banlieue, anti-Muslim rhetoric in mainstream center-right politics.`,
    source: "Fassin & Fassin, De la question sociale à la question raciale, 2006",
  },
  {
    name: "Manuel Valls",
    party: "Parti Socialiste (PS) — Socialist Party",
    role: "Prime Minister (2014–2016)",
    rhetoric: [
      `"There is a territorial, social, ethnic apartheid in France." — Speech to National Assembly, 2015 (acknowledging segregation, yet his policies worsened conditions).`,
      `Stated that the burkini ban was "compatible with the values of the Republic" and declined to overturn local bans.`,
      `Called for dissolving Muslim organizations with insufficient proof of links to 'radicalization,' contributing to the atmosphere that led to the 2021 separatism law.`,
    ],
    electoralImpact: `Demonstrates that Islamophobia is not exclusively a right-wing phenomenon in France. Even center-left politicians competed to appear 'tough' on Islam, reflecting broader societal consensus around laïcité as justification for restricting Muslim expression.`,
    source: "Beaman, Citizen Outsider, 2017",
  },
];

// Legal Restrictions
export const legalRestrictions = [
  {
    title: "Law 2004-228: Ban on Religious Symbols in Public Schools",
    year: "2004",
    type: "Direct Restriction",
    description: `Enacted on March 15, 2004, this law prohibits students in public primary and secondary schools from wearing 'conspicuous religious symbols.' While nominally neutral, its legislative history and implementation make clear it targets the Islamic hijab. The law was preceded by the Stasi Commission report, which received testimony almost exclusively about the headscarf. In practice, Sikh turbans, large Christian crosses, and Jewish kippot are also banned, but enforcement disproportionately affects Muslim girls.`,
    impact: `Hundreds of Muslim girls were expelled or forced to choose between their faith and their education. A 2005 study by the Inspectorate General found that 47 students were formally excluded in the first year alone. UNICEF and the UN Committee on the Rights of the Child expressed concern that the law violates children's rights to education and religious freedom. The law triggered migration of Muslim girls to private or Islamic schools, contributing to the very 'separatism' the state claimed to prevent (Bowen, 2007).`,
    legalChallenge: `Challenged before the European Court of Human Rights in Dogru v. France (2008) and Kervanci v. France (2008). The ECHR upheld the law, finding France's margin of appreciation in protecting secularism was within acceptable limits — a ruling widely criticized by human rights scholars.`,
    sources: "Bowen, Why the French Don't Like Headscarves, 2007; UN CRC Report, 2004",
  },
  {
    title: "Law 2010-1192: Prohibition of Face-Covering in Public Spaces",
    year: "2010",
    type: "Direct Restriction",
    description: `Enacted on October 11, 2010, Law 2010-1192 prohibits the concealment of one's face in all public spaces, effectively banning the niqab (face veil) and burqa. France was the first country in the world to implement such a comprehensive ban. Violations are punishable by a €150 fine and/or mandatory 'citizenship classes.' Persons who 'force' another to cover their face face up to €30,000 in fines and one year imprisonment — a provision framed as protecting women but applied almost exclusively to Muslim families.`,
    impact: `The law affects an estimated 2,000 women in France. Rights organizations documented that it has led to social isolation, job loss, and increased vulnerability for those who refused to remove the veil. Amnesty International called it a "grave violation of human rights." The Sociology of Islam journal documented a dramatic increase in anti-Muslim attacks immediately following the law's passage (Allen, 2010).`,
    legalChallenge: `In S.A.S. v. France (2014), the ECHR upheld the ban, controversially accepting France's argument that 'living together' (vivre ensemble) was a legitimate goal — a concept unprecedented in European human rights law and criticized as culturally majoritarian.`,
    sources: "Amnesty International Report, 2012; ECHR S.A.S. v. France, Application No. 43835/11",
  },
  {
    title: "Law 2021-1109: Against Separatism ('Loi Séparatisme')",
    year: "2021",
    type: "Broad Structural Restriction",
    description: `The Law of August 24, 2021 — officially titled 'Law reinforcing the principles of the Republic' but universally known as the anti-separatism law — grants the state sweeping powers to dissolve associations, mosques, schools, and NGOs deemed to threaten 'republican values.' It requires all foreign funding of religious associations above €10,000 to be disclosed and approved. It expands the definition of hate speech and imposes obligations on home-schooling families.`,
    impact: `Within its first year, the government dissolved over 20 Muslim associations and ordered inspections of hundreds of mosques. The CCIF (Collectif Contre l'Islamophobie en France), France's leading Muslim civil rights organization, was dissolved by government decree in October 2020 — before the law even passed — in a move widely condemned as politically motivated. Critics including the Conseil d'État noted that many provisions gave authorities virtually unlimited discretion to target associations based on vague criteria.`,
    legalChallenge: `Challenged by civil liberties groups before the Constitutional Council (Conseil Constitutionnel), which struck down some provisions but upheld the core framework in July 2021.`,
    sources: "Human Rights Watch Report on France, 2021; Open Society Foundations Brief, 2021",
  },
  {
    title: "State of Emergency & Counter-Terrorism Laws (2015–2017 and beyond)",
    year: "2015–Present",
    type: "Security/Surveillance Framework",
    description: `Following the November 2015 Paris attacks, France declared a state of emergency under the 1955 law, granting police powers to conduct searches without warrants, place individuals under house arrest, and close places of worship. The state of emergency was extended six times over two years. In 2017, Law 2017-1510 permanently incorporated emergency powers into ordinary law, allowing administrative (non-judicial) detention and bans on associations without criminal conviction.`,
    impact: `Human Rights Watch documented 4,000+ raids, 400+ house arrests, and the closure of mosques — with the vast majority affecting Muslim individuals and institutions, predominantly of North African origin. Fewer than 5% of raids led to terrorism-related charges. The UN Special Rapporteur on Counter-Terrorism stated that French counter-terrorism measures disproportionately impacted Muslim communities and risked normalizing emergency governance (UN Report A/71/384, 2016).`,
    legalChallenge: `Amnesty International and the International Federation for Human Rights (FIDH) filed multiple complaints. The Constitutional Council found some provisions unconstitutional but upheld the broader framework.`,
    sources: "Human Rights Watch, 'France: State of Emergency Normalizes Abusive Powers,' 2017; UN Special Rapporteur Report A/71/384",
  },
  {
    title: "Immigration & Asylum Restrictions Targeting Muslim-Majority States",
    year: "2023–Present",
    type: "Immigration Restriction",
    description: `The 2023 immigration law (Loi Darmanin) tightened conditions for family reunification, introduced point-based immigration, and restricted access to social benefits for recent migrants — disproportionately affecting those from Muslim-majority countries (Algeria, Morocco, Tunisia, Mali, Senegal). It introduced 'conditional residency' linked to 'republican values,' giving administrative authorities discretion to revoke residency permits.`,
    impact: `Rights organizations note that the law's criteria are sufficiently vague to enable discriminatory application. The Défenseur des Droits (Rights Ombudsman) expressed concern that 'republican values' clauses could be used to target religious expression. The law passed with far-right support, marking a historic convergence of center-right and extreme-right on immigration policy.`,
    legalChallenge: `The Constitutional Council struck down 35 of 86 challenged provisions but upheld the core framework in January 2024.`,
    sources: "Défenseur des Droits Annual Report, 2023; GISTI (Groupe d'Information et de Soutien des Immigrés) Brief, 2024",
  },
];

// Economic Restrictions
export const economicRestrictions = [
  {
    title: "Employment Discrimination & the 'ethnic penalty'",
    content: `Multiple studies have documented systematic discrimination against people with North African Muslim-sounding names in French labor markets. The landmark 2016 study by ISM-CORUM tested 4,536 applications across 48 French cities, finding that applicants with Senegalese names received 32% fewer callbacks than identical candidates with French names, and applicants with Moroccan names received 26% fewer callbacks. A 2019 Sciences Po study by Adida, Laitin, and Valfort documented what they called the 'Muslim penalty' — finding that identical candidates were 2.5 times less likely to be called for interview when their application signaled Muslim religious practice. This discrimination extends across sectors: a 2021 INSEE study found that 25% of Muslims reported being discriminated against in employment, compared to 6% of the general population.`,
    sources: "Adida, Laitin & Valfort, Why Muslim Integration Fails in Christian-Heritage Societies, 2016; INSEE, 2021",
  },
  {
    title: "Housing Discrimination & Spatial Segregation",
    content: `French Muslims are spatially concentrated in the banlieues — peripheral housing estates originally built for immigrant workers in the 1950s–70s. A 2012 Défenseur des Droits study found that 32% of housing seekers with North African names were discriminated against in the rental market. The banlieues suffer from chronic underinvestment: worse schools, fewer public services, higher unemployment (25–30% in some areas, compared to 7% nationally), and poor transport connectivity. The ANRU (National Urban Renewal Agency) has managed multiple regeneration programs, but critics argue these focus on physical renovation rather than structural inequality. Sociologist Didier Lapeyronnie argues that the banlieues have become 'ghettoes' — not through self-segregation but through state-managed exclusion (Lapeyronnie, 2008).`,
    sources: "Lapeyronnie, Ghetto Urbain, 2008; Défenseur des Droits Report, 2012",
  },
  {
    title: "Access to Finance & Business Loans",
    content: `Muslim entrepreneurs in France face compounding disadvantages: discrimination in loan applications due to racialized profiles, geographic disadvantage (banks are less active in banlieue areas), and the structural absence of Islamic finance products. France's strict interpretation of laïcité has historically blocked the development of Islamic banking, which prohibits interest (riba). While the Autorité des Marchés Financiers (AMF) issued guidelines for sukuk (Islamic bonds) in 2012 and 2014, retail Islamic finance products remain virtually absent. A 2018 report by the Institut Montaigne found that Muslim-majority neighborhoods receive significantly lower rates of small business lending from major French banks.`,
    sources: "Institut Montaigne, L'Islam en France, 2018; Beaugé & Garçon, L'Islamisme en France, 2019",
  },
  {
    title: "Travel, Profiling & the Broader Economic Toll",
    content: `French Muslims — particularly men of North African appearance — report systematic profiling at border controls, airports, and SNCF train stations. The Defender of Rights documented a fivefold higher rate of identity checks for young men perceived as Black or North African compared to the general population. Beyond formal legal barriers, the cumulative economic toll of discrimination — in hiring, housing, credit, and daily mobility — constitutes what economists call a 'Muslim tax': the additional cost imposed on Muslim-identified individuals for participating in the French economy. A 2020 study by the OECD estimated that if immigrant-background workers faced no discrimination, French GDP could increase by up to 2.5%.`,
    sources: "Défenseur des Droits, Enquête sur l'accès aux droits, 2017; OECD, Settling In 2018",
  },
];

// Surveillance
export const surveillanceData = [
  {
    title: "DGSI & Mosque Surveillance",
    content: `The Direction Générale de la Sécurité Intérieure (DGSI), France's domestic intelligence agency, operates a dedicated program monitoring Muslim religious institutions. Leaked internal documents reported by Le Monde in 2018 revealed that the DGSI maintains files on imams, mosque committees, and Islamic schools, using 'radicalization indicators' that critics argue are so broad as to encompass ordinary religious practice. The government dissolved 22 mosques between 2017 and 2022, often under administrative procedures that bypass judicial review, meaning mosque communities had little legal recourse.`,
    sources: "Le Monde Investigation, 2018; Open Society Justice Initiative Brief, 2022",
  },
  {
    title: "FSPRT: The Radicalization Watch List",
    content: `The Fichier des Signalements pour la Prévention de la Radicalisation à Caractère Terroriste (FSPRT) is a government database of individuals flagged for potential 'radicalization.' As of 2021, the database contained approximately 18,000 individuals. Civil liberties organizations have raised serious concerns: the criteria for inclusion are vague (attending a mosque frequently, wearing a beard, changing diet to halal), individuals are not informed they are on the list, and removal is extremely difficult. The list is shared with employers, including for security clearances, effectively creating employment barriers.`,
    sources: "CNCDH Report, 2021; Amnesty International France, 2019",
  },
  {
    title: "PREVENT-Style Programs & School Reporting",
    content: `Following the 2015 attacks, the French education system implemented mandatory 'deradicalization' protocols requiring teachers to report signs of 'radicalization' in students. Reports documenting questioning of Charlie Hebdo coverage, expressing pro-Palestinian views, or simply being more observant (praying, fasting) resulted in student referrals. A 2016 report by the Observatoire de la Laïcité documented cases of Muslim children as young as eight being referred to security services. Critics including the UN Special Rapporteur on Freedom of Religion or Belief warned that such programs conflate religious observance with security risk.`,
    sources: "Observatoire de la Laïcité, Annual Report 2016; UN Special Rapporteur Report A/HRC/34/50",
  },
  {
    title: "Emergency Powers & Home Searches",
    content: `During the 2015–2017 state of emergency, French authorities conducted over 4,400 searches without judicial warrant under administrative authority. A Amnesty International analysis found that only 11 of these searches led to terrorism charges. The vast majority targeted Muslim households and community spaces. The experience of a no-warning, dawn raid — a practice borrowed from colonial policing in Algeria — had profound psychological and social effects on Muslim communities beyond those directly targeted. Post-emergency, Law 2017-1510 made warrantless administrative searches for 'radicalization prevention' a permanent power of the state.`,
    sources: "Amnesty International, 'Upturned Lives,' 2016; Human Rights Watch Report on France, 2017",
  },
];

// Media & Culture
export const mediaData = {
  overview: `French media's treatment of Islam and Muslims has been extensively documented as systematically biased. A 2013 study by the Conseil Supérieur de l'Audiovisuel (CSA) found that 79% of references to Muslims in prime-time news were in contexts of terrorism, violence, or social conflict. The 'Muslim question' (la question musulmane) has become a permanent fixture of French political and media discourse, structuring debates on education, security, national identity, and social cohesion in ways that consistently position Muslims as a problem to be managed.`,
  examples: [
    {
      title: "Charlie Hebdo & the Limits of Satirical Freedom",
      content: `Charlie Hebdo's repeated publication of caricatures of the Prophet Muhammad raises complex questions about the intersection of free speech, satirical tradition, and anti-Muslim racism. While French law protects satirical expression and the magazine has lampooned all religions, critics including scholars Éric Fassin and Nacira Guénif-Souilamas argue that the specific targeting of Islam — the religion of the most marginalized community in France — functions differently than satire directed at the powerful. The magazine's 2015 post-attack 'survivor's issue' cover was widely praised as resistance to terrorism but simultaneously criticized by Muslim scholars as contributing to the dehumanization of Muslim populations. This tension illustrates the difficulty of applying universal free speech frameworks in societies with unequal power relations.`,
      source: "Fassin, Policing the Truth, 2015",
    },
    {
      title: "Mainstream News Coverage: CSA Studies",
      content: `The Conseil Supérieur de l'Audiovisuel (CSA), France's broadcasting regulator, conducted audits in 2013 and 2018 finding that Muslims are dramatically underrepresented as expert voices in news media (less than 2% of expert commentary on France 2, France 3, and TF1) while dramatically overrepresented in contexts of terrorism and social conflict. The 2018 audit found that CNews (France's equivalent of Fox News) devoted 30% more airtime to 'Islam and security' than other channels, with almost all commentary from non-Muslim voices.`,
      source: "CSA Audit Reports, 2013, 2018",
    },
    {
      title: "Cinema: From Beur Cinema to Contemporary Erasure",
      content: `The 1980s and 1990s saw the emergence of 'beur cinema' (films by and about second-generation North African immigrants in France), with films like La Haine (1995) and Le Thé au harem d'Archimède (1985) challenging mainstream representations. By the 2000s, however, mainstream French cinema largely reverted to stereotypical portrayals: Muslim characters as terrorists (L'Assaut, 2011), oppressed women (Inch'Allah Dimanche, 2001), or comic figures (Qu'est-ce qu'on a fait au Bon Dieu?, 2014 — France's highest-grossing domestic film of that year, whose treatment of Muslim characters remains contested). Acclaimed exceptions include Divines (2016) and Portrait of a Lady on Fire, but these remain marginal to mainstream production.`,
      source: "Tarr, Reframing Difference, 2005; Barlet, Africine, 2016",
    },
    {
      title: "The 'Burkini' Affair (2016) & Media Spectacle",
      content: `In summer 2016, over 30 French coastal municipalities banned the 'burkini' — a full-body swimsuit worn by some Muslim women. A viral photograph of armed police forcing a Muslim woman to remove clothing on a Nice beach circulated internationally. French prime-time media ran weeks of debate featuring almost exclusively non-Muslim voices deciding whether Muslim women's clothing choices were acceptable. This media spectacle exemplified what sociologist Nacira Guénif-Souilamas calls the 'surveillant gaze': the subjection of Muslim female bodies to intense, uninvited public scrutiny in the name of liberation. The burkini ban was ultimately struck down by France's highest administrative court (Conseil d'État) as unlawful, but the media debate it generated reinforced the sense that Muslim bodies require constant management.`,
      source: "Guénif-Souilamas, 2006; Conseil d'État Ruling No. 402742, 2016",
    },
  ],
  positiveExamples: [
    {
      title: "Ladj Ly's Les Misérables (2019)",
      content: `Director Ladj Ly's Academy Award-nominated film Les Misérables presents a nuanced, human portrait of life in the banlieue of Montfermeil — documenting police brutality, systemic neglect, and community resilience without reducing its characters to religious or cultural stereotypes. The film was France's submission to the Academy Awards and sparked national debate about police violence and suburban inequality, demonstrating the power of cinema to complicate dominant narratives.`,
    },
    {
      title: "Media Diversity Initiatives",
      content: `Organizations like Collectif Rokhaya Diallo and Les Indivisibles work to document and challenge racial and religious stereotypes in French media. Journalist and activist Rokhaya Diallo has been a prominent voice challenging Islamophobia in mainstream media. While these voices remain marginal, they represent important counter-currents within the media landscape.`,
    },
  ],
};

// Counter-Movements
export const counterMovements = [
  {
    title: "CCIF — Collectif Contre l'Islamophobie en France",
    status: "Dissolved by Government Decree, 2020",
    type: "Civil Rights / Legal",
    description: `Founded in 2003, the CCIF was France's most prominent Muslim civil rights organization. It documented anti-Muslim discrimination, provided free legal assistance to victims, published annual reports on Islamophobia, and engaged in public advocacy. It was dissolved by the Macron government in October 2020 using emergency powers, accused of 'Islamist separatism' without criminal charges being filed. The dissolution was widely condemned by human rights organizations including Amnesty International, Human Rights Watch, and the UN Special Rapporteur on Freedom of Religion or Belief. The CCIF's former leadership re-established similar work from Belgium.`,
    methods: [
      "Free legal representation for discrimination victims",
      "Annual Islamophobia Report (documenting 900–1,200 cases/year)",
      "Parliamentary advocacy and public campaigns",
      "Media monitoring and rapid response",
    ],
    successCases: [
      "Secured compensation for hundreds of discrimination victims in employment and housing",
      "Successfully challenged illegal mosque closures in administrative courts",
      "Its reports formed key evidence base for EU and UN assessments of French Islamophobia",
    ],
    sources: "CCIF Annual Reports 2015–2020; Amnesty International Statement on CCIF Dissolution, 2020",
  },
  {
    title: "SOS Racisme",
    status: "Active",
    type: "Anti-Racism / Civil Society",
    description: `Founded in 1984, SOS Racisme is France's oldest and largest anti-racism organization. While not exclusively focused on Islamophobia, it has increasingly incorporated anti-Muslim discrimination into its mandate. Its 'Touche pas à mon pote' (Hands off my mate) campaign of the 1980s created a template for solidarity-based anti-racism advocacy. The organization provides legal assistance, conducts testing studies (sending matched applications to document discrimination), and campaigns for strong anti-discrimination enforcement.`,
    methods: [
      "Legal assistance and discrimination testing",
      "Public demonstrations and solidarity campaigns",
      "Engagement with European anti-racism networks",
      "Youth mobilization and civic education",
    ],
    successCases: [
      "Instrumental in securing France's first major anti-discrimination legislation (2001)",
      "Testing studies cited in landmark employment discrimination rulings",
    ],
    sources: "SOS Racisme Annual Reports; Tevanian & Tissot, Les Mots Sont des Politiques, 2010",
  },
  {
    title: "Lallab — Muslim Feminist Magazine & Association",
    status: "Active",
    type: "Feminist / Cultural",
    description: `Founded in 2016, Lallab is a feminist, anti-racist association and digital magazine created by and for Muslim women in France. It emerged directly in response to the absence of Muslim women's voices in mainstream debates about the headscarf, burkini, and laïcité. Lallab amplifies Muslim women's stories, challenges both Islamophobia and patriarchal norms within Muslim communities, and develops original analysis of intersectional discrimination.`,
    methods: [
      "Digital magazine and social media content centering Muslim women's voices",
      "Workshops and community organizing in banlieues",
      "Media training for Muslim women",
      "Coalition-building with secular feminist organizations",
    ],
    successCases: [
      "Secured significant media coverage during the 2016 burkini debate, successfully inserting Muslim women's own perspectives",
      "Built cross-community feminist coalition opposing the 2021 separatism law",
    ],
    sources: "Lallab.org; Keaton, Muslim Girls and the Other France, 2006",
  },
  {
    title: "Islamophobia Studies Center (Paris/UC Berkeley)",
    status: "Active",
    type: "Academic",
    description: `The Islamophobia Studies Center (ISC), affiliated with UC Berkeley and with French academic partners, produces the Islamophobia Studies Journal and organizes international conferences and research networks. ISC scholars including Hatem Bazian, Erik Love, and their French counterparts provide rigorous academic documentation of Islamophobic structures globally, with France as a key case study. Their work provides the intellectual infrastructure that civil society organizations and human rights bodies draw upon.`,
    methods: [
      "Publishing Islamophobia Studies Journal (peer-reviewed)",
      "Annual Islamophobia Conference",
      "Research collaborations with Muslim community organizations",
      "Policy briefs submitted to EU, UN, and national human rights bodies",
    ],
    successCases: [
      "Research cited in UN Human Rights Council reports on France",
      "Contributed analytical framework used by EU Fundamental Rights Agency",
    ],
    sources: "Islamophobia Studies Journal; Bazian, Islamophobia, 2015",
  },
];

// References (APA format)
export const references = [
  {
    author: "Adida, C. L., Laitin, D. D., & Valfort, M.-A.",
    year: "2016",
    title: "Why Muslim Integration Fails in Christian-Heritage Societies",
    source: "Harvard University Press",
    type: "Book",
  },
  {
    author: "Allen, C.",
    year: "2010",
    title: "Islamophobia",
    source: "Routledge",
    type: "Book",
  },
  {
    author: "Amnesty International",
    year: "2016",
    title: "Upturned Lives: The Disproportionate Impact of France's State of Emergency",
    source: "Amnesty International Publications",
    type: "Report",
  },
  {
    author: "Bazian, H.",
    year: "2015",
    title: "Islamophobia, 'Clash of Civilizations', and Forging a Post–Cold War New World Order",
    source: "Religions, 6(2), 652–682. https://doi.org/10.3390/rel6020652",
    type: "Journal Article",
  },
  {
    author: "Beaman, J.",
    year: "2017",
    title: "Citizen Outsider: Children of North African Immigrants in France",
    source: "University of California Press",
    type: "Book",
  },
  {
    author: "Bowen, J. R.",
    year: "2007",
    title: "Why the French Don't Like Headscarves: Islam, the State, and Public Space",
    source: "Princeton University Press",
    type: "Book",
  },
  {
    author: "CCIF (Collectif Contre l'Islamophobie en France)",
    year: "2019",
    title: "Annual Report on Islamophobia in France 2019",
    source: "CCIF",
    type: "Report",
  },
  {
    author: "CNCDH (Commission Nationale Consultative des Droits de l'Homme)",
    year: "2021",
    title: "Annual Report on Racism, Antisemitism and Xenophobia",
    source: "La Documentation Française",
    type: "Government Report",
  },
  {
    author: "Crenshaw, K.",
    year: "1991",
    title: "Mapping the Margins: Intersectionality, Identity Politics, and Violence against Women of Color",
    source: "Stanford Law Review, 43(6), 1241–1299",
    type: "Journal Article",
  },
  {
    author: "Défenseur des Droits",
    year: "2017",
    title: "Enquête sur l'accès aux droits: Relations police-population et contrôles d'identité",
    source: "Défenseur des Droits Publications",
    type: "Government Report",
  },
  {
    author: "Delphy, C.",
    year: "2006",
    title: "Antisexisme ou antiracisme? Un faux dilemme",
    source: "Nouvelles Questions Féministes, 25(1), 59–83",
    type: "Journal Article",
  },
  {
    author: "ECRI (European Commission against Racism and Intolerance)",
    year: "2022",
    title: "ECRI Report on France (Sixth Monitoring Cycle)",
    source: "Council of Europe",
    type: "Report",
  },
  {
    author: "European Court of Human Rights",
    year: "2014",
    title: "S.A.S. v. France, Application No. 43835/11",
    source: "Grand Chamber Judgment",
    type: "Legal Document",
  },
  {
    author: "Fassin, D., & Fassin, E. (Eds.)",
    year: "2006",
    title: "De la question sociale à la question raciale? Représenter la société française",
    source: "La Découverte",
    type: "Book",
  },
  {
    author: "Geisser, V.",
    year: "2003",
    title: "La Nouvelle Islamophobie",
    source: "La Découverte",
    type: "Book",
  },
  {
    author: "Guénif-Souilamas, N.",
    year: "2006",
    title: "The Other French Exception: Virtuous Racism and the War of the Sexes in Postcolonial France",
    source: "French Politics, Culture & Society, 24(3), 23–41",
    type: "Journal Article",
  },
  {
    author: "Hajjat, A., & Mohammed, M.",
    year: "2013",
    title: "Islamophobie: Comment les élites françaises fabriquent le 'problème musulman'",
    source: "La Découverte",
    type: "Book",
  },
  {
    author: "Human Rights Watch",
    year: "2021",
    title: "France: Rights at Risk — New Anti-Separatism Law",
    source: "Human Rights Watch",
    type: "Report",
  },
  {
    author: "Lapeyronnie, D.",
    year: "2008",
    title: "Ghetto Urbain: Ségrégation, violence, pauvreté en France aujourd'hui",
    source: "Robert Laffont",
    type: "Book",
  },
  {
    author: "Omi, M., & Winant, H.",
    year: "1986",
    title: "Racial Formation in the United States: From the 1960s to the 1980s",
    source: "Routledge",
    type: "Book",
  },
  {
    author: "Pew Research Center",
    year: "2017",
    title: "Europe's Growing Muslim Population",
    source: "Pew Research Center",
    type: "Survey Report",
  },
  {
    author: "Runnymede Trust",
    year: "1997",
    title: "Islamophobia: A Challenge for Us All",
    source: "Runnymede Trust",
    type: "Report",
  },
  {
    author: "Said, E. W.",
    year: "1978",
    title: "Orientalism",
    source: "Vintage Books",
    type: "Book",
  },
  {
    author: "United Nations Special Rapporteur on Counter-Terrorism",
    year: "2016",
    title: "Report on France's State of Emergency and Counter-Terrorism Measures (A/71/384)",
    source: "United Nations Human Rights Council",
    type: "UN Document",
  },
  {
    author: "United Nations Special Rapporteur on Freedom of Religion or Belief",
    year: "2017",
    title: "Report on Situation of Muslims (A/HRC/34/50)",
    source: "United Nations Human Rights Council",
    type: "UN Document",
  },
];

// Charts data
export const employmentDiscrimData = [
  { group: "French Name", callback: 100 },
  { group: "Moroccan Name", callback: 74 },
  { group: "Senegalese Name", callback: 68 },
  { group: "Algerian Name", callback: 71 },
];

export const islamophobiaIncidentsData = [
  { year: "2013", incidents: 226 },
  { year: "2014", incidents: 241 },
  { year: "2015", incidents: 429 },
  { year: "2016", incidents: 185 },
  { year: "2017", incidents: 251 },
  { year: "2018", incidents: 496 },
  { year: "2019", incidents: 789 },
  { year: "2020", incidents: 235 },
];

export const mediaRepresentationData = [
  { category: "Terrorism/Violence", percentage: 79 },
  { category: "Social Conflict", percentage: 11 },
  { category: "Religious Practice", percentage: 5 },
  { category: "Positive Contributions", percentage: 3 },
  { category: "Other", percentage: 2 },
];