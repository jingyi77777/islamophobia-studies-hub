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
  { name: "Jin Huang", role: "Group 1" },
  { name: "Noah Seo", role: "Group 1" },
  { name: "Steven Peng", role: "Group 1" },
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
      title: "Colonial Roots & the Logic of 'Governing Through Difference' (1830–1962)",
      content: `France colonized Algeria in 1830, ruling it for 132 years. The colonial system created a two-tiered legal structure: European settlers held full citizenship, while Muslim Algerians were classified as 'subjects,' not citizens. Our course lecture on "Governing Through Difference" defines racism precisely as "a defense and governing of racial privilege... governing the space, time and bodies of" minorities. This logic — Muslim identity as incompatible with full civic belonging — was never fully dismantled after decolonization. As Cainkar (2006) documents in her analysis of Arab racialization, "domestic institutional processes emerging from... global political interests can have long-term impacts on the social position of ethnic communities" (Cainkar, 2006, p. 246). The French colonial archive is the foundational racial project from which contemporary Islamophobia descends.`,
    },
    {
      title: "Post-War Migration & the Making of the Banlieues (1945–1973)",
      content: `Following World War II, France actively recruited North African laborers to rebuild its economy. These workers, concentrated in segregated housing estates (cités) on the urban periphery, were never envisioned as permanent residents. The course lecture distinguishes between de jure and de facto segregation: while there were no formal Jim Crow laws in France, what emerged was precisely what the course describes as "de facto segregation — unwritten segregation through customs, housing patterns, finance, culture and traditions" and "control through policing, prisons and violence." The banlieues became spaces of structural exclusion and racialized poverty that persist to this day, and are directly analogous to the conditions that course material identifies as producing collective resistance and state repression.`,
    },
    {
      title: "The Headscarf Affairs & the Weaponization of Laïcité (1989–2010)",
      content: `France's 'Affaire du foulard' began in 1989 when three girls were expelled from a school in Creil for wearing headscarves. In 2004, Law 2004-228 banned 'conspicuous religious symbols' in public schools. In 2010, Law 2010-1192 banned full-face coverings in all public spaces. These laws exemplify what the CAIR-CA Bullying Report (2015) identifies as the core mechanism of Islamophobia in educational settings: the school environment as a "microcosm of society, reflecting the narrow and negative representations of Muslims in the wider world." Just as Muslim students in American schools are told to remove religious symbols or face exclusion, French Muslim girls faced expulsion — with the state itself acting as the institutional discriminator that the Ali (2012) article describes as stripping away citizenship-as-rights.`,
    },
    {
      title: "Post-2015 Security Turn & the Permanent State of Emergency",
      content: `The January and November 2015 Paris attacks resulted in France declaring a state of emergency lasting two years. A 2017 counter-terrorism law permanently incorporated emergency provisions. The 2021 'Separatism Law' further extended state powers over Muslim associations. Farish Noor (2006) in our course reading on the "War on Terror" argues precisely this dynamic: that after 9/11, governments used security discourse to justify maximalist state power against Muslim communities. France followed this same logic — what Noor calls the "war on terror" becoming "universally applicable" as a tool of domestic governance. The UN Special Rapporteur's warning (A/71/384, 2016) that French measures risk "normalizing emergency governance" mirrors Noor's central critique.`,
    },
  ],
  religiousDiversity: `France is constitutionally secular (laïque), with the state officially not recording religion. Estimates suggest: Christians ~41%, No religion ~40%, Muslims ~8–9%, other ~10%. French Muslims are highly diverse: Algerian-origin ~43%, Moroccan-origin ~27%, Sub-Saharan African ~11%, Turkish-origin ~11%, converts and others ~8% (Pew Research Center, 2017). This diversity is systematically erased in political and media discourse, which — as Said (1978) argued about Orientalist representations — constructs 'the Muslim' as a monolithic, foreign, and potentially dangerous Other. Said wrote that Orientalism operates through "a set of constraints upon and limitations of thought," and this exactly describes how French public discourse forecloses recognition of Muslim diversity.`,
};

// Islamophobia Framework
export const islamophobiaFramework = {
  centralArgument: `French Islamophobia operates through what our course identifies as racism "properly understood" — operating simultaneously at the individual, institutional, and structural levels. As the course lecture states, racism involves "individual attitudes and behavior," "institutional practices and procedures," and "structural policies and patterns." France's anti-Muslim discrimination functions at all three levels: individual prejudice in schools and workplaces, institutional discrimination through laws targeting hijab and face-covering, and structural exclusion through the banlieue system and FSPRT database. This multi-level analysis, combined with Omi and Winant's racial formation theory and Said's Orientalism, reveals that French Islamophobia is not a collection of isolated incidents but a coherent system of racialized governance.`,
  manifestations: [
    {
      title: "Structural vs. Episodic: The Racial Formation Framework",
      content: `Applying Omi and Winant's racial formation theory (1986) — a key course text analyzed by Cainkar (2006) — to France reveals that Muslims have been racialized through interconnected "racial projects" in media, law, politics, and culture. Cainkar notes that "the structural exclusion of Arab Americans from a wide range of social institutions has evolved from a plethora of racial projects" (Cainkar, 2006, p. 246). In France, the same process is visible: from colonial-era representations of Muslim Algerians as subjects rather than citizens, to post-2015 surveillance databases categorizing entire communities as threats. The CCIF documented over 1,000 anti-Muslim acts annually — evidence of what the course defines as racism working at the structural level, not merely the individual one.`,
    },
    {
      title: "Said's Orientalism and the Construction of the French Muslim 'Other'",
      content: `Edward Said's Orientalism (1978), one of our core course readings, argues that Western scholarship and media constructed the "Orient" as irrational, backward, and inferior — a construction that legitimized colonial domination. Said writes that Orientalism is "a Western style for dominating, restructuring, and having authority over the Orient" (Said, 1978, p. 3). In France, this Orientalist logic directly shapes public discourse about Islam: Muslim women are portrayed as oppressed victims requiring liberation (justifying headscarf bans), while Muslim men are framed as threats to republican values. Said's observation that the Orient is constructed "for the West" explains why Muslim voices are almost entirely absent from French debates about Islam — exactly as they are absent from the media coverage documented in Cainkar's research.`,
    },
    {
      title: "Intersectionality: Muslim Women and the Double Burden",
      content: `Muslim women in France face what our course material on "Governing Through Difference" identifies as overlapping systems of racial, religious, and gendered oppression. The CAIR-CA Bullying Report (2015) documents that 29% of hijab-wearing students experience offensive touching — and French law institutionalizes this violation at the state level by banning religious dress. The ISPU Equal Treatment Report (2018) demonstrates that Muslim-perceived individuals receive differential treatment across legal and media systems. Applying this intersectional lens to France: Muslim women face the burkini ban (restricting public beach access), the headscarf ban (restricting educational access), and employment discrimination — a convergence of structures that denies them citizenship-as-rights in precisely the way that Ali (2012) describes for American Muslims.`,
    },
  ],
};

// Political Figures
export const politicalFigures = [
  {
    name: "Marine Le Pen",
    party: "Rassemblement National (RN) — National Rally",
    role: "Presidential Candidate (2012, 2017, 2022), Member of European Parliament",
    rhetoric: [
      `"Islamist fundamentalism must be annihilated. France must ban the Islamic veil in all public places." (Campaign speech, 2021)`,
      `Compared Muslims praying in streets to Nazi occupation: "No armoured vehicles, no soldiers, but it is an occupation and it weighs on people." (2010 speech — later conviction for incitement, overturned by ECHR)`,
      `Proposed banning the 'Muslim veil' in all public spaces and treating 'dual nationality' with Muslim-majority countries as a security threat.`,
    ],
    electoralImpact: `Le Pen won 33.9% of the vote in the 2017 presidential runoff and 41.5% in 2022. Her rhetoric exemplifies what Ali (2012) identifies as the third phase of Islamophobia: "institutional" anti-Muslim discourse that focuses on cultural incompatibility rather than merely security. This is precisely what Noor (2006) describes as governments using fear of Islam to mobilize votes — what Noor calls "fear-mongering" as a "lucrative" political strategy. The CAIR-CA report's observation that political discourse contributes to Muslim students' sense that "your existence is always interrogated, investigated and questioned" applies with full force to the environment Le Pen has helped create.`,
    source: "Hajjat & Mohammed, Islamophobie, 2013; ECRI Report on France, 2022; Ali (2012); Noor (2006)",
  },
  {
    name: "Éric Zemmour",
    party: "Reconquête! (Reconquest!)",
    role: "Presidential Candidate (2022), Former Journalist",
    rhetoric: [
      `"Islam is not compatible with France." — Repeated claim across multiple media appearances.`,
      `"The French Muslims have to choose: Islam or France." — CNews broadcast, 2019 (convicted of incitement to religious hatred, fined €10,000).`,
      `Called for banning Arabic first names for French citizens and ending Muslim immigration entirely.`,
      `His book 'Le Suicide Français' (2014) sold 500,000 copies and became a manifesto of 'great replacement' theory.`,
    ],
    electoralImpact: `Received 7.1% of the first-round vote in 2022. Zemmour's rhetoric directly echoes what Said (1978) identifies as the Orientalist move of constructing Muslim civilization as inherently inferior and incompatible with Western values. Said's analysis of how Orientalist writers portrayed the "Oriental" as "inveterate liars... 'lethargic and suspicious'" (Said, 1978, p. 39) maps exactly onto Zemmour's construction of Muslims as fundamentally alien to France. The Runnymede Trust's (1997) definition of Islamophobia — "Islam seen as separate and other, not having any aims or values in common with other cultures" — perfectly captures Zemmour's core argument.`,
    source: "Said (1978); Runnymede Trust (1997); Geisser, La Nouvelle Islamophobie, 2003",
  },
  {
    name: "Nicolas Sarkozy",
    party: "Les Républicains (UMP)",
    role: "President of France (2007–2012)",
    rhetoric: [
      `As Interior Minister in 2005, described banlieue youth (predominantly North African) as 'racaille' (scum) and promised to 'clean them out with a Kärcher.'`,
      `Launched the 'debate on national identity' in 2009, widely interpreted as targeting Islam and immigrant communities.`,
      `Declared: "In France, we don't want the burqa." — Addressing both chambers of Parliament, 2009.`,
    ],
    electoralImpact: `Sarkozy's description of banlieue youth as 'scum' prefigures the 2005 riots — a dynamic our course material directly parallels with the Ferguson situation: "riots and rebellions are the voice of the voiceless." The course lecture on racism notes that control operates through "policing, prisons and violence" — exactly Sarkozy's program. His rhetoric about the banlieues as spaces requiring 'cleaning' treats Muslim and North African residents as what the course identifies as bodies to be governed and controlled rather than citizens with rights.`,
    source: "Fassin & Fassin, De la question sociale à la question raciale, 2006; Course lecture materials",
  },
  {
    name: "Manuel Valls",
    party: "Parti Socialiste (PS) — Socialist Party",
    role: "Prime Minister (2014–2016)",
    rhetoric: [
      `"There is a territorial, social, ethnic apartheid in France." — Speech to National Assembly, 2015 (acknowledging segregation, while his policies worsened it).`,
      `Supported burkini bans and declined to overturn local prohibitions.`,
      `Called for dissolving Muslim organizations, contributing to the atmosphere that produced the 2021 separatism law.`,
    ],
    electoralImpact: `Valls demonstrates that Islamophobia in France transcends party lines — a key analytical point. Ali (2012) makes the same observation about American politicians of both parties using anti-Muslim rhetoric. The course lecture on racism defines it as operating through "structural policies and patterns" that persist regardless of which party governs. France's bipartisan consensus on restricting Muslim religious expression — from left to right — demonstrates that French Islamophobia is not the product of individual bad actors but a structural feature of how the republic has chosen to manage its Muslim minority.`,
    source: "Beaman, Citizen Outsider, 2017; Ali (2012); Course lecture on racism",
  },
];

// Legal Restrictions
export const legalRestrictions = [
  {
    title: "Law 2004-228: Ban on Religious Symbols in Public Schools",
    year: "2004",
    type: "Direct Restriction",
    description: `Enacted on March 15, 2004, this law prohibits students in public primary and secondary schools from wearing 'conspicuous religious symbols.' While nominally neutral, its legislative history and implementation make clear it targets the Islamic hijab. The Stasi Commission that recommended the law received testimony almost exclusively about the headscarf. The law exemplifies what Ali (2012) identifies as the moment when Islamophobia strips away "citizenship-as-rights" — the right of Muslim students to freely practice their religion while accessing public education.`,
    impact: `Hundreds of Muslim girls were expelled or forced to choose between their faith and their education. The CAIR-CA Bullying Report (2015) documents that in school settings, Muslim students — especially hijab-wearing girls — face systematic marginalization. In France, this marginalization is state-sanctioned. UNICEF and the UN Committee on the Rights of the Child expressed concern that the law violates children's rights. The law forced what our course material on the Arab American experience identifies as a choice between religious identity and civic belonging — the same impossible position that the course shows creates lasting psychological and academic harm.`,
    legalChallenge: `Challenged before the ECHR in Dogru v. France (2008) and Kervanci v. France (2008). The Court upheld the law. Ali (2012) notes this same dynamic in the U.S.: courts have often ratified anti-Muslim discrimination under the guise of legitimate state interests, despite the profound harm done to Muslim citizens' substantive citizenship.`,
    sources: "Bowen (2007); UN CRC Report (2004); Ali (2012); CAIR-CA Bullying Report (2015)",
  },
  {
    title: "Law 2010-1192: Prohibition of Face-Covering in Public Spaces",
    year: "2010",
    type: "Direct Restriction",
    description: `Enacted October 11, 2010, this law prohibits the concealment of one's face in all public spaces — effectively banning the niqab and burqa. France was the first country in the world to implement such a comprehensive ban. The Runnymede Trust's (1997) definition of Islamophobia includes "hostility towards Islam used to justify discriminatory practices towards Muslims and exclusion of Muslims from mainstream society" — a definition this law fulfills precisely.`,
    impact: `Amnesty International called it "a grave violation of human rights." The law affects an estimated 2,000 women in France, leading to social isolation and increased vulnerability. It exemplifies what our course material on the "War on Terror" and Islamophobia identifies as the deployment of feminist language to restrict Muslim women's freedom — Noor (2006) notes how Muslim women are simultaneously constructed as victims to be saved and threats to be controlled.`,
    legalChallenge: `In S.A.S. v. France (2014), the ECHR controversially upheld the ban, accepting France's 'living together' argument. Ali (2012) notes that legal institutions, even when they formally protect rights, can ratify Islamophobic discrimination — a pattern visible here in both the French courts and the ECHR.`,
    sources: "Amnesty International (2012); ECHR S.A.S. v. France (2014); Runnymede Trust (1997); Noor (2006)",
  },
  {
    title: "Law 2021-1109: Against Separatism ('Loi Séparatisme')",
    year: "2021",
    type: "Broad Structural Restriction",
    description: `The 2021 'Anti-Separatism Law' grants sweeping powers to dissolve associations, mosques, schools, and NGOs deemed to threaten 'republican values.' It requires disclosure and approval of foreign religious funding. This law exemplifies what Ali (2012) identifies as the third phase of Islamophobia — no longer requiring a security justification, but explicitly targeting Muslim identity and practice as culturally incompatible with national values. Yaser Ali's framework of "citizenship-as-political-activity" is directly undermined when Muslim civil society organizations can be dissolved by decree.`,
    impact: `Within its first year, over 20 Muslim associations were dissolved. The CCIF — France's leading Muslim civil rights organization — was dissolved before the law even passed. This parallels what the ISPU Equal Treatment Report (2018) documents: Muslim-led organizations face a fundamentally different relationship with state power than comparable non-Muslim groups. The dissolution of the CCIF mirrors the suppression of civil rights organizations that the course materials on Black civil rights history document as a recurring feature of structural racism.`,
    legalChallenge: `The Constitutional Council struck down some provisions but upheld the core framework. Human Rights Watch (2021) condemned the law as rights-restricting. This demonstrates Ali's point that formal legal processes cannot fully protect against Islamophobia when the legislature and executive are committed to restricting Muslim civic life.`,
    sources: "Human Rights Watch (2021); Open Society Foundations Brief (2021); Ali (2012); ISPU (2018)",
  },
  {
    title: "State of Emergency & Counter-Terrorism Laws (2015–2017 and beyond)",
    year: "2015–Present",
    type: "Security/Surveillance Framework",
    description: `Following the November 2015 Paris attacks, France declared a state of emergency granting police powers to conduct searches without warrants, place individuals under house arrest, and close places of worship. In 2017, Law 2017-1510 permanently incorporated emergency powers. Noor (2006) predicted exactly this dynamic: that the "war on terror" would be used by governments to "justify the maximisation of power of the state" against Muslim communities, even when no terrorism connection exists.`,
    impact: `Human Rights Watch documented 4,400+ raids, 400+ house arrests, closure of mosques — the vast majority affecting Muslim individuals and institutions, fewer than 5% leading to terrorism charges. Noor (2006) notes that the "war on terror" discourse operates "regardless of the fact that members of them did not plan or perpetrate" attacks — collective punishment that mirrors what our course material documents about the treatment of Japanese Americans after Pearl Harbor. The Cainkar (2004) reading documents the same dynamic with NSEERS in the U.S.: mass surveillance targeting a religious minority with no terrorism results.`,
    legalChallenge: `Amnesty International and FIDH filed multiple complaints. The UN Special Rapporteur stated French measures "disproportionately impacted Muslim communities" (A/71/384, 2016) — exactly the finding of the ISPU Equal Treatment Report regarding U.S. counter-terrorism policy.`,
    sources: "Human Rights Watch (2017); UN Special Rapporteur A/71/384 (2016); Noor (2006); Cainkar (2004); ISPU (2018)",
  },
  {
    title: "The Anti-Sharia Parallel: France's 'Republican Values' Clauses",
    year: "2010–Present",
    type: "Ideological Restriction",
    description: `France's various laws invoking 'republican values' as a basis for restricting Muslim practice parallel the American anti-Sharia legislation analyzed in Ali (2012). Ali demonstrates that Oklahoma's 'Save Our State Amendment' was "not based on a credible threat to American society, but rather part of a well-orchestrated campaign of fear mongering." France's 'republican values' clauses function identically: they invoke a civilizational threat that does not exist in order to restrict Muslim civic and religious life. Shariah, as Ali explains, is primarily "a moral code by which [Muslims] regulate all daily activities" — not a political threat. France's 'republican values' construct an equivalent phantom threat.`,
    impact: `The effect in both countries is what Ali calls stripping away "citizenship-as-rights" from Muslim communities. French Muslims, like American Muslims, find that formal legal citizenship does not guarantee substantive citizenship — the ability to participate fully in public life without having their religion treated as incompatible with national belonging.`,
    legalChallenge: `French courts have occasionally struck down overreach, just as American courts struck down the Oklahoma Amendment. But as Ali documents, the political damage — the normalization of anti-Muslim rhetoric — persists regardless of legal outcomes.`,
    sources: "Ali (2012); Runnymede Trust (1997); Abu-Zayd (2010)",
  },
];

// Economic Restrictions
export const economicRestrictions = [
  {
    title: "Employment Discrimination & the 'Muslim Penalty'",
    content: `Multiple studies document systematic discrimination against people with North African Muslim-sounding names in French labor markets. A 2016 ISM-CORUM study found applicants with Moroccan names received 26% fewer callbacks than identical candidates with French names. This 'Muslim penalty' in employment directly parallels what Cainkar (2006) documents for Arab Americans: "discrimination in housing, jobs, and more" (Cainkar, 2006, p. 245). The ISPU Equal Treatment Report (2018) demonstrates that Muslim-perceived individuals receive differential treatment across institutions — in France, this extends across virtually every sector of the labor market. The course lecture on racism notes that racial discrimination historically includes being "last hired, first fired" — a pattern French research consistently documents for Muslim and North African workers.`,
    sources: "ISM-CORUM testing study (2016); Adida, Laitin & Valfort (2016); Cainkar (2006); ISPU (2018); Course lecture on racism",
  },
  {
    title: "Housing Discrimination & the Banlieue as Structural Segregation",
    content: `French Muslims are spatially concentrated in the banlieues — peripheral housing estates originally built for immigrant workers in the 1950s–70s. A 2012 Défenseur des Droits study found 32% of housing seekers with North African names were discriminated against in the rental market. The course distinguishes between de jure and de facto segregation: France's banlieue system is the latter — what the course lecture calls "unwritten segregation through customs, housing patterns, finance." The banlieues suffer 25–30% youth unemployment. This spatial exclusion directly mirrors what the course shows regarding the Great Migration and Black urban segregation in America: communities relegated to peripheral spaces, denied investment, and then criminalized for the poverty that results.`,
    sources: "Lapeyronnie (2008); Défenseur des Droits Report (2012); Course lecture on de facto segregation",
  },
  {
    title: "Access to Finance & the Absence of Islamic Banking",
    content: `France's strict interpretation of laïcité has historically blocked Islamic finance products. Muslim entrepreneurs face discrimination in loan applications and geographic disadvantage in under-served banlieue areas. An Institut Montaigne report (2018) found Muslim-majority neighborhoods receive significantly lower rates of small business lending. This economic exclusion represents what Ali (2012) identifies as another dimension of second-class citizenship: formal legal equality masking substantive economic inequality. The Cainkar reading on the Arab American experience notes that economic success can mask deeper structural exclusions — French Muslim communities face the same paradox.`,
    sources: "Institut Montaigne (2018); Ali (2012); Cainkar (2006)",
  },
  {
    title: "Racial Profiling, Travel & the 'Muslim Tax'",
    content: `The Défenseur des Droits documented a fivefold higher rate of identity checks for young men perceived as Black or North African. The cumulative economic cost of discrimination — in hiring, housing, credit, and mobility — constitutes what economists call a 'Muslim tax.' The ISPU Equal Treatment Report (2018) documents that Muslim-perceived individuals face more severe legal treatment for equivalent conduct, which has economic consequences: longer imprisonment, harder re-entry into employment. The course lecture on racism describes this as "governing the space, time and bodies" of targeted communities — French identity check practices are a literal example of the state governing the bodies of Muslim and North African citizens in their daily movement.`,
    sources: "Défenseur des Droits (2017); ISPU (2018); OECD (2018); Course lecture on racism",
  },
];

// Surveillance
export const surveillanceData = [
  {
    title: "DGSI & Mosque Surveillance: Governing Muslim Religious Space",
    content: `The Direction Générale de la Sécurité Intérieure (DGSI) maintains files on imams, mosque committees, and Islamic schools. Le Monde (2018) reported the DGSI uses 'radicalization indicators' so broad as to encompass ordinary religious practice. The government dissolved 22 mosques between 2017 and 2022 under administrative procedures that bypass judicial review. This surveillance of religious spaces directly parallels what Cainkar (2004) documents about the FBI's post-9/11 initiative to tie surveillance goals to the number of mosques in field areas: a program that treats Muslim religious practice itself as inherently suspicious. Abu-Zayd (2010) argues that "counterproductive discourse" treating Islam as a security threat deepens rather than resolves social conflict.`,
    sources: "Le Monde Investigation (2018); Open Society Justice Initiative (2022); Cainkar (2004); Abu-Zayd (2010)",
  },
  {
    title: "FSPRT: The Radicalization Watch List & Manufactured Suspicion",
    content: `The FSPRT database contains approximately 18,000 individuals flagged for potential 'radicalization.' Criteria include attending a mosque frequently, wearing a beard, or changing diet to halal. Individuals are not informed they are listed, and removal is extremely difficult. This list shares characteristics with what Cainkar (2004) documents about NSEERS: both programs target Muslim identity markers rather than actual evidence of wrongdoing, both operate without meaningful due process, and both result in employment and social consequences for thousands of people never charged with any offense. The ISPU Equal Treatment Report (2018) documents that Muslim-perceived individuals face surveillance at rates disproportionate to their actual threat — a pattern the FSPRT exemplifies.`,
    sources: "CNCDH Report (2021); Amnesty International France (2019); Cainkar (2004); ISPU (2018)",
  },
  {
    title: "School Reporting & the 'Prevent'-Style Approach",
    content: `Following the 2015 attacks, France implemented mandatory 'deradicalization' protocols requiring teachers to report signs of 'radicalization' in students. Students expressing pro-Palestinian views, fasting during Ramadan, or attending mosque more frequently were referred to security services. The CAIR-CA Bullying Report (2015) extensively documents how anti-Muslim bias in schools — even when coming from teachers and administrators — causes lasting harm: students "feel marginalized, disempowered, and begin to internalize negative stereotypes." France's school reporting system institutionalizes this dynamic at the state level: teachers become surveillance agents, and Muslim students are placed under permanent suspicion for ordinary religious practice.`,
    sources: "Observatoire de la Laïcité (2016); UN Special Rapporteur A/HRC/34/50 (2017); CAIR-CA Bullying Report (2015)",
  },
  {
    title: "Emergency Powers & Home Searches: Collective Punishment",
    content: `During the 2015–2017 state of emergency, French authorities conducted 4,400+ warrantless searches. Amnesty International found only 11 led to terrorism charges. The vast majority targeted Muslim households and community spaces. Noor (2006) describes this exact pattern in Pakistan, Malaysia, and Indonesia after 9/11: states using counter-terrorism powers not to address genuine threats, but to "marginalize and demonise... Islamist opposition movements within their own borders." In France, the 'threat' is not even opposition movements — it is ordinary Muslim community life. The mass arrests, dragnet searches, and collective punishment documented by Cainkar (2004) in the post-9/11 U.S. find their French equivalent here.`,
    sources: "Amnesty International (2016); Human Rights Watch (2017); Noor (2006); Cainkar (2004)",
  },
];

// Media & Culture
export const mediaData = {
  overview: `French media's treatment of Islam and Muslims has been documented as systematically biased. A 2013 CSA study found 79% of references to Muslims in prime-time news were in contexts of terrorism, violence, or social conflict. Said's Orientalism (1978) provides the analytical framework: media constructs the Muslim as "the Other" defined by opposition to Western values. Said writes that Orientalism operates through representations that are "not simply false" but "instrumentally useful" — they serve power by legitimizing restrictions on Muslim life. The CSA data confirms that French media reproduces exactly the Orientalist representational logic Said documented in 19th-century European scholarship.`,
  examples: [
    {
      title: "Charlie Hebdo & the Limits of Universal Free Speech",
      content: `Charlie Hebdo's repeated publication of caricatures of the Prophet Muhammad raises questions Said's Orientalism helps illuminate. Said argued that Orientalist representations, however false, serve real political functions. The caricatures function in a media environment where, as the CSA documents, Muslims are already overwhelmingly represented in negative contexts — adding satirical dehumanization to systematic negative framing. Our course's analysis of racist imagery (from Birth of a Nation to anti-Arab stereotypes in Hollywood) shows how cultural production can simultaneously claim artistic freedom while serving as what Said calls a "racial project" that legitimizes exclusion. The difficulty is not freedom of speech itself, but the asymmetry between who bears the social cost of these representations.`,
      source: "Said (1978); CSA Audit Reports (2013); Course lecture on media and racial representation",
    },
    {
      title: "CSA Studies & Systematic Negative Coverage",
      content: `The Conseil Supérieur de l'Audiovisuel (CSA) conducted audits in 2013 and 2018 finding that Muslims are underrepresented as expert voices (less than 2% of expert commentary) while dramatically overrepresented in terrorism and social conflict contexts. This pattern directly confirms Said's argument in *Covering Islam* (1981) — our course reading — that Western media systematically portrays Islam through a lens of threat and irrationality. Said writes that media coverage of Islam is "aggressively one-sided" and functions as what Noor (2006) calls the "domestic counterpart" of geopolitical interests. The CSA data gives French empirical confirmation of Said's theoretical framework.`,
      source: "CSA Audit Reports (2013, 2018); Said, Covering Islam (1981); Noor (2006)",
    },
    {
      title: "Cinema: Beur Cinema vs. Contemporary Stereotyping",
      content: `The 1980s and 1990s saw 'beur cinema' challenging mainstream representations of North African immigrants. By the 2000s, mainstream French cinema reverted to stereotypical portrayals. The CAIR-CA Bullying Report (2015) documents how media stereotypes directly affect Muslim students: "constant exposure to negative stereotypes about one's identity can lead to inferiority anxiety." This psychological mechanism, identified by the CAIR report in American school contexts, operates at the national cultural level in France. Just as Hollywood's 900+ films depicting Arabs as villains (documented in Shaheen's Reel Bad Arabs, cited in Ali 2012) shaped American attitudes, French cinema contributes to the social environment that makes discrimination against Muslim children and adults seem natural.`,
      source: "CAIR-CA Bullying Report (2015); Ali (2012); Course lecture on media representation",
    },
    {
      title: "The Burkini Affair (2016): The 'Surveillant Gaze' on Muslim Women",
      content: `In summer 2016, over 30 French municipalities banned the 'burkini.' A viral photograph of armed police forcing a Muslim woman to remove clothing on a Nice beach circulated internationally. French prime-time media ran weeks of debate featuring almost exclusively non-Muslim voices deciding whether Muslim women's clothing choices were acceptable. This exemplifies the Runnymede Trust's (1997) definition of Islamophobia: "hostility towards Islam used to justify discriminatory practices towards Muslims." The burkini debate also illustrates what the CAIR-CA report identifies as the specific burden on Muslim women: they are simultaneously stereotyped as oppressed (requiring 'liberation' through bans) and as threats to social cohesion (requiring policing). The Conseil d'État ultimately struck down the bans as unlawful — but the political damage, the normalization of treating Muslim women's bodies as public problems, persisted.`,
      source: "Conseil d'État Ruling No. 402742 (2016); Runnymede Trust (1997); CAIR-CA Bullying Report (2015)",
    },
  ],
  positiveExamples: [
    {
      title: "Ladj Ly's Les Misérables (2019) — Counter-Narrative Cinema",
      content: `Director Ladj Ly's Academy Award-nominated film presents a nuanced, human portrait of life in the banlieue of Montfermeil — documenting police brutality, systemic neglect, and community resilience. The film demonstrates Abu-Zayd's (2010) call for Muslim voices to engage creatively with their situation rather than accepting dominant representations. It sparked national debate about police violence and suburban inequality, showing that counter-narrative cultural production can shift public discourse.`,
    },
    {
      title: "Lallab and Muslim Women's Media Presence",
      content: `Founded in 2016, Lallab magazine amplifies Muslim women's voices in French public discourse, directly challenging the media environment documented by the CSA. This mirrors the approach Abu-Zayd (2010) advocates: developing "a creative humanistic hermeneutics" and ensuring that Muslim voices are heard rather than allowing others to define the terms of debate. Lallab's work illustrates the positive potential when Muslim communities build their own media infrastructure.`,
    },
  ],
};

// Counter-Movements
export const counterMovements = [
  {
    title: "CCIF — Collectif Contre l'Islamophobie en France",
    status: "Dissolved by Government Decree, 2020",
    type: "Civil Rights / Legal",
    description: `Founded in 2003, the CCIF was France's most prominent Muslim civil rights organization — directly analogous to CAIR in the United States. It documented anti-Muslim discrimination, provided free legal assistance to victims, published annual reports on Islamophobia, and engaged in public advocacy. Its dissolution by government decree in October 2020 — before its successor law even passed — exemplifies precisely what Ali (2012) identifies as the stripping away of "citizenship-as-political-activity": the state's removal of Muslim communities' most effective tool for civic participation. Ali's framework predicts exactly this: when Muslim organizations try to exercise political voice, the state responds with suppression.`,
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
      "Documented the 'Islamophobic chain' linking political rhetoric to everyday discrimination",
    ],
    sources: "CCIF Annual Reports (2015–2020); Amnesty International Statement (2020); Ali (2012)",
  },
  {
    title: "SOS Racisme",
    status: "Active",
    type: "Anti-Racism / Civil Society",
    description: `Founded in 1984, SOS Racisme has increasingly incorporated anti-Muslim discrimination into its mandate. Its 'Touche pas à mon pote' (Hands off my mate) campaign created a template for solidarity-based anti-racism advocacy. This interracial solidarity approach mirrors what our course materials on the Black civil rights movement identify as essential: organizations like the NAACP building broad coalitions rather than fighting in isolation. The course lecture notes that "without allies, discrimination and the production of negative images flourished" — SOS Racisme attempts to be precisely the kind of ally that Muslim communities need.`,
    methods: [
      "Legal assistance and discrimination testing",
      "Public demonstrations and solidarity campaigns",
      "Engagement with European anti-racism networks",
      "Youth mobilization and civic education",
    ],
    successCases: [
      "Instrumental in securing France's first major anti-discrimination legislation (2001)",
      "Testing studies cited in landmark employment discrimination rulings",
      "Built cross-community solidarity that the CCIF could draw upon",
    ],
    sources: "SOS Racisme Annual Reports; Course lecture materials on civil rights coalition-building",
  },
  {
    title: "Lallab — Muslim Feminist Magazine & Association",
    status: "Active",
    type: "Feminist / Cultural",
    description: `Founded in 2016, Lallab is a feminist, anti-racist association and digital magazine created by and for Muslim women in France. It emerged directly in response to the absence of Muslim women's voices in mainstream debates about the headscarf and burkini. Lallab's approach exemplifies what Abu-Zayd (2010) calls the necessary work of ensuring "these voices have to be heard and the world has to listen." Abu-Zayd argues that Muslim communities must engage creatively with their situation — Lallab does precisely this, centering Muslim women's own perspectives rather than allowing non-Muslims to define what 'liberation' means for them.`,
    methods: [
      "Digital magazine and social media content centering Muslim women's voices",
      "Workshops and community organizing in banlieues",
      "Media training for Muslim women",
      "Coalition-building with secular feminist organizations",
    ],
    successCases: [
      "Secured media coverage during the 2016 burkini debate, inserting Muslim women's own perspectives",
      "Built cross-community feminist coalition opposing the 2021 separatism law",
      "Created alternative media infrastructure to counter CSA-documented negative coverage",
    ],
    sources: "Lallab.org; Abu-Zayd (2010); CAIR-CA Bullying Report (2015)",
  },
  {
    title: "Islamophobia Studies Center (ISC) & Academic Counter-Discourse",
    status: "Active",
    type: "Academic",
    description: `The Islamophobia Studies Center, affiliated with UC Berkeley, produces the Islamophobia Studies Journal and organizes international research networks. ISC scholars apply exactly the theoretical frameworks used in our course — Said's Orientalism, Omi and Winant's racial formation, the Runnymede Trust definition — to document and challenge Islamophobia globally, with France as a key case study. This academic work supports what Ali (2012) identifies as the first policy recommendation: "there needs to be an organized effort to explain" Islamophobia and counter the misinformation driving it. The ISC also works with the CCIF and similar organizations, demonstrating the kind of civil society-academic partnership that the CAIR-CA report identifies as essential.`,
    methods: [
      "Publishing Islamophobia Studies Journal (peer-reviewed)",
      "Annual Islamophobia Conference",
      "Research collaborations with Muslim community organizations",
      "Policy briefs submitted to EU, UN, and national human rights bodies",
    ],
    successCases: [
      "Research cited in UN Human Rights Council reports on France",
      "Contributed analytical framework used by EU Fundamental Rights Agency",
      "Provides the scholarly infrastructure that validates community organizations' reports",
    ],
    sources: "Islamophobia Studies Journal; Bazian (2015); Said (1978); Ali (2012)",
  },
];

// References (APA format) — integrating course materials prominently
export const references = [
  {
    author: "Abu-Zayd, N.",
    year: "2010",
    title: "Religions: From Phobia to Understanding",
    source: "Human Architecture: Journal of the Sociology of Self-Knowledge, 8(2), 5–20 [Course reading]",
    type: "Journal Article",
  },
  {
    author: "Adida, C. L., Laitin, D. D., & Valfort, M.-A.",
    year: "2016",
    title: "Why Muslim Integration Fails in Christian-Heritage Societies",
    source: "Harvard University Press",
    type: "Book",
  },
  {
    author: "Ali, Y.",
    year: "2012",
    title: "Shariah and Citizenship — How Islamophobia Is Creating a Second-Class Citizenry in America",
    source: "California Law Review, 100, 1027–1068 [Course reading]",
    type: "Journal Article",
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
    source: "Religions, 6(2), 652–682",
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
    author: "Cainkar, L.",
    year: "2004",
    title: "Post 9/11 Domestic Policies Affecting U.S. Arabs and Muslims: A Brief Review",
    source: "Comparative Studies of South Asia, Africa and the Middle East, 24(1), 245–248 [Course reading]",
    type: "Journal Article",
  },
  {
    author: "Cainkar, L.",
    year: "2006",
    title: "The Social Construction of Difference and the Arab American Experience",
    source: "Journal of American Ethnic History, 25(2–3), 243–278 [Course reading]",
    type: "Journal Article",
  },
  {
    author: "CAIR-California",
    year: "2015",
    title: "Mislabeled: The Impact of School Bullying and Discrimination on California Muslim Students",
    source: "Council on American-Islamic Relations — California [Course reading]",
    type: "Report",
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
    author: "Course Lecture Materials",
    year: "2025",
    title: "Racism: Governing the Body, Space and Time of Targeted Communities",
    source: "Blacks and the Struggle for Human Rights [Course lecture]",
    type: "Lecture",
  },
  {
    author: "Défenseur des Droits",
    year: "2017",
    title: "Enquête sur l'accès aux droits: Relations police-population et contrôles d'identité",
    source: "Défenseur des Droits Publications",
    type: "Government Report",
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
    author: "Institut Montaigne",
    year: "2018",
    title: "L'Islam en France: faits et chiffres",
    source: "Institut Montaigne",
    type: "Report",
  },
  {
    author: "ISPU (Institute for Social Policy and Understanding)",
    year: "2018",
    title: "Equal Treatment? Measuring the Legal and Media Responses to Ideologically Motivated Violence in the United States",
    source: "ISPU [Course reading]",
    type: "Report",
  },
  {
    author: "Jamal, A.",
    year: "2009",
    title: "The Racialization of Muslim Americans",
    source: "In A. H. Sinno (Ed.), Muslims in Western Politics (pp. 200–215). Indiana University Press [Course reading]",
    type: "Book Chapter",
  },
  {
    author: "Lapeyronnie, D.",
    year: "2008",
    title: "Ghetto Urbain: Ségrégation, violence, pauvreté en France aujourd'hui",
    source: "Robert Laffont",
    type: "Book",
  },
  {
    author: "Noor, F. A.",
    year: "2006",
    title: "How Washington's 'War on Terror' Became Everyone's: Islamophobia and the Impact of September 11 on the Political Terrain of South and Southeast Asia",
    source: "Human Architecture: Journal of the Sociology of Self-Knowledge, 5(1) [Course reading]",
    type: "Journal Article",
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
    source: "Vintage Books [Core course reading]",
    type: "Book",
  },
  {
    author: "Said, E. W.",
    year: "1981",
    title: "Covering Islam: How the Media and the Experts Determine How We See the Rest of the World",
    source: "Vintage Books [Course reading]",
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