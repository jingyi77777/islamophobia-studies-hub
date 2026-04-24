export const navLinks = [
  { label: "Home", href: "home" },
  { label: "Country Profile", href: "country-profile" },
  { label: "Theoretical Framework", href: "theoretical-framework" },
  { label: "Legal & Policy", href: "legal-policy" },
  { label: "Society & Culture", href: "society-culture" },
  { label: "Countermeasures", href: "countermeasures" },
  { label: "References", href: "references" },
];

export const countryProfileData = {
  title: "Country Profile: The United States",
  stats: [
    { label: "Total Population", value: "331 million", icon: "Users" },
    { label: "Muslim Population", value: "~3.85 million", icon: "Globe" },
    { label: "% of Population", value: "~1.1%", icon: "PieChart" },
    { label: "Mosques", value: "~2,769", icon: "Building" },
  ],
  sections: [
    {
      title: "Historical Background",
      content: "Islam has been present in America since the era of the Atlantic slave trade, with an estimated 15–30% of enslaved Africans being Muslim. The 20th century saw significant immigration from the Middle East, South Asia, and Africa. The Muslim community in the U.S. is one of the most ethnically diverse in the world, including African Americans, Arab Americans, South Asians, and converts from various backgrounds."
    },
    {
      title: "Religious Diversity",
      content: "While Christianity remains the dominant religion (~65%), the United States is home to a rich tapestry of faiths. Islam is the third-largest religion after Christianity and Judaism. Muslim Americans contribute significantly to American society in fields including medicine, law, technology, academia, and public service."
    },
    {
      title: "Social Diversity & Challenges",
      content: "Muslim Americans are among the most racially diverse religious groups in the country: 25% Black, 24% white, 18% Asian, 18% Arab, and 15% other ethnicities. Despite this diversity, Muslim communities face significant challenges including discrimination, surveillance, and negative media portrayals, particularly intensified after the events of September 11, 2001."
    },
  ],
};

export const theoreticalFramework = [
  {
    title: "Defining Islamophobia",
    author: "Runnymede Trust (1997)",
    content: "Islamophobia is defined as 'an unfounded hostility towards Islam, and therefore fear or dislike of all or most Muslims.' It manifests through exclusion from mainstream political and social affairs, discrimination in employment and social services, prejudice in media and everyday conversation, and violence against Muslim individuals and property. The term gained prominence with the Runnymede Trust's landmark report, which identified eight components of closed views about Islam.",
    keyPoints: [
      "Unfounded hostility and irrational fear of Islam",
      "Exclusion from political and social participation",
      "Discrimination in employment and public services",
      "Prejudice in media and cultural discourse",
    ],
  },
  {
    title: "Orientalism",
    author: "Edward Said (1978)",
    content: "Edward Said's groundbreaking work 'Orientalism' argued that Western scholarship, literature, and media have constructed a distorted image of the 'Orient' — portraying Eastern societies, particularly Muslim-majority ones, as backward, irrational, exotic, and inherently inferior. This constructed binary between the 'rational West' and the 'irrational East' served to justify colonial domination and continues to shape contemporary perceptions of Muslims and Islam in the West.",
    keyPoints: [
      "Western construction of the 'Orient' as the Other",
      "Binary opposition: rational West vs. irrational East",
      "Legitimization of colonial and imperial power",
      "Persistent influence on media and political discourse",
    ],
  },
  {
    title: "Racial Formation Theory",
    author: "Omi & Winant (1986)",
    content: "Michael Omi and Howard Winant's racial formation theory explains how race is socially constructed through political, economic, and social forces. Applied to Islamophobia, this framework helps explain how Muslims have been racialized — treated as a racial category regardless of their actual ethnic, national, or racial backgrounds. After 9/11, Muslims were collectively racialized as 'suspicious' or 'dangerous,' leading to profiling and surveillance based on perceived religious or ethnic markers.",
    keyPoints: [
      "Race as a social and political construction",
      "Muslims racialized as a monolithic, threatening group",
      "State-driven racial projects (e.g., surveillance programs)",
      "Intersection of religion, race, and national origin",
    ],
  },
  {
    title: "Good Muslim / Bad Muslim",
    author: "Mahmood Mamdani (2004)",
    content: "In 'Good Muslim, Bad Muslim,' Mahmood Mamdani critiques the post-9/11 political discourse that divides Muslims into two categories: the 'good Muslim' who is secular, moderate, and loyal to Western values, and the 'bad Muslim' who is devout, traditional, and potentially dangerous. This binary framework forces Muslims to constantly prove their loyalty and places the burden of condemning terrorism on all Muslims collectively, regardless of their actual beliefs or actions.",
    keyPoints: [
      "Binary categorization imposed on Muslim communities",
      "Pressure to prove loyalty and condemn extremism",
      "Erasure of diverse Muslim identities and viewpoints",
      "Political instrumentalization of the Muslim identity",
    ],
  },
];

export const legalPolicies = [
  {
    title: "Executive Order 13769 — 'Muslim Ban'",
    year: "2017",
    description: "Signed by President Trump on January 27, 2017, this executive order banned nationals from seven predominantly Muslim countries (Iran, Iraq, Libya, Somalia, Sudan, Syria, and Yemen) from entering the United States for 90 days and suspended refugee admissions for 120 days. Syrian refugees were banned indefinitely.",
    impact: "Separated families, stranded travelers at airports, created widespread fear in Muslim communities, and sparked international condemnation. The order went through multiple revisions after legal challenges.",
    status: "Revoked by President Biden in January 2021",
  },
  {
    title: "Anti-Sharia Legislation",
    year: "2010–Present",
    description: "Since 2010, over 200 anti-Sharia bills have been introduced in state legislatures across the United States. These laws aim to ban the consideration of Islamic religious law in state courts, despite the fact that the U.S. Constitution already prohibits the establishment of any religious law.",
    impact: "These laws are largely symbolic but send a powerful message of exclusion. They fuel the narrative that Islam is fundamentally incompatible with American values and create a hostile environment for Muslim Americans.",
    status: "14 states have enacted some form of anti-foreign law legislation",
  },
  {
    title: "Headscarf & Religious Dress Bans",
    year: "2004–Present (France & Europe)",
    description: "France's 2004 law banned conspicuous religious symbols in public schools, disproportionately affecting Muslim girls who wear the hijab. In 2010, France banned full-face coverings (niqab/burqa) in public spaces. Similar legislation has been enacted or proposed in Belgium, Austria, Denmark, the Netherlands, and Switzerland.",
    impact: "These bans restrict Muslim women's freedom of religious expression, limit their access to education and public spaces, and reinforce the narrative that Muslim women are oppressed and need 'saving.' They disproportionately impact women and intersect with gender-based discrimination.",
    status: "Active in multiple European countries",
  },
  {
    title: "NSEERS & Surveillance Programs",
    year: "2002–2011",
    description: "The National Security Entry-Exit Registration System (NSEERS) required male non-citizens from 25 countries (24 of which were Muslim-majority) to register with immigration authorities, be fingerprinted, and photographed. Additionally, the NYPD's Demographics Unit conducted widespread surveillance of Muslim communities in New York and New Jersey.",
    impact: "Over 83,000 individuals were registered under NSEERS, with nearly 14,000 placed in deportation proceedings — none of whom were linked to terrorism. The surveillance programs created an atmosphere of fear and distrust within Muslim communities.",
    status: "NSEERS officially dismantled in 2016",
  },
];

export const societyCultureData = {
  mediaRepresentation: {
    title: "Media Representation",
    content: "Research consistently shows that media coverage of Muslims and Islam is overwhelmingly negative. A study by Media Tenor found that over 75% of media coverage of Islam between 2001 and 2012 was negative. Muslims are frequently portrayed as terrorists, extremists, or oppressed victims. Positive stories about Muslim contributions to society are rare and underreported.",
    examples: [
      "Hollywood films consistently cast Muslims as villains or terrorists (e.g., 'Homeland,' 'American Sniper')",
      "News coverage disproportionately links Islam with violence and terrorism",
      "Muslim voices are rarely included in mainstream media discussions about Islam",
      "Social media amplifies anti-Muslim rhetoric through algorithmic echo chambers",
    ],
  },
  bullying: {
    title: "School Bullying & Youth Experiences",
    content: "Muslim youth in the United States face disproportionate rates of bullying in schools. According to a 2017 CAIR report, 42% of Muslim students reported being bullied because of their faith — more than double the national average. Girls who wear the hijab are particularly targeted. The effects include anxiety, depression, lower academic performance, and social isolation.",
    stats: [
      { label: "Muslim students bullied", value: 42 },
      { label: "National average (bullied)", value: 20 },
      { label: "Bullied for appearance", value: 33 },
      { label: "Bullied by teachers/staff", value: 17 },
    ],
  },
  intersectionality: {
    title: "Muslim Women & Intersectionality",
    content: "Muslim women face a unique intersection of religious discrimination, racial prejudice, and gender-based discrimination. Women who wear visible religious symbols like the hijab are more likely to be targets of hate crimes and discrimination. They navigate the dual pressure of Islamophobia from broader society and gendered expectations within their communities. Scholars like Kimberlé Crenshaw emphasize that these overlapping systems of oppression cannot be understood in isolation.",
    experiences: [
      "Higher rates of workplace discrimination and hiring bias",
      "Verbal and physical harassment in public spaces",
      "Being stereotyped as oppressed or submissive",
      "Navigating identity between cultural and religious expectations",
      "Underrepresentation in media, politics, and leadership roles",
    ],
  },
  hateCrimes: {
    title: "Hate Crime Statistics",
    data: [
      { year: "2015", incidents: 257 },
      { year: "2016", incidents: 307 },
      { year: "2017", incidents: 273 },
      { year: "2018", incidents: 188 },
      { year: "2019", incidents: 176 },
      { year: "2020", incidents: 110 },
      { year: "2021", incidents: 233 },
      { year: "2022", incidents: 158 },
    ],
  },
};

export const countermeasures = [
  {
    title: "Council on American-Islamic Relations (CAIR)",
    type: "NGO / Advocacy",
    description: "CAIR is the largest Muslim civil rights and advocacy organization in the United States. Founded in 1994, it works to protect civil liberties, enhance the understanding of Islam, promote justice, and empower American Muslims.",
    initiatives: [
      "Free legal services for victims of discrimination",
      "Annual civil rights reports documenting anti-Muslim incidents",
      "Media monitoring and rapid response to biased coverage",
      "Community education and empowerment programs",
    ],
  },
  {
    title: "Teaching Tolerance / Learning for Justice",
    type: "Education",
    description: "A project of the Southern Poverty Law Center, Learning for Justice provides free educational resources to teachers and schools to promote social justice and reduce prejudice. Their curriculum includes specific modules on combating Islamophobia and religious intolerance in the classroom.",
    initiatives: [
      "Free K-12 anti-bias curriculum and lesson plans",
      "Teacher training and professional development workshops",
      "Documentary films on social justice issues",
      "Student-led social justice projects and campaigns",
    ],
  },
  {
    title: "Interfaith Dialogue Programs",
    type: "Community",
    description: "Interfaith initiatives bring together people of different faiths to build understanding and cooperation. Organizations like the Interfaith Youth Core (IFYC) and Shoulder-to-Shoulder Campaign organize events, dialogues, and collaborative projects that break down stereotypes and build bridges between Muslim and non-Muslim communities.",
    initiatives: [
      "Interfaith potlucks, open mosque events, and cultural exchanges",
      "Joint community service projects across faith communities",
      "Educational workshops on religious literacy",
      "Advocacy for policies that protect religious freedom for all",
    ],
  },
  {
    title: "Islamic Networks Group (ING)",
    type: "Education / Outreach",
    description: "ING is a non-profit organization that provides educational presentations about Islam and Muslims to schools, colleges, law enforcement agencies, and community organizations. Their goal is to counter misinformation and promote mutual understanding.",
    initiatives: [
      "Speaker panels featuring diverse Muslim voices",
      "Cultural competency training for professionals",
      "Youth empowerment and leadership programs",
      "Online resources and educational toolkits",
    ],
  },
];

export const references = [
  {
    author: "Said, Edward W.",
    year: "1978",
    title: "Orientalism",
    source: "Vintage Books",
    type: "Book",
  },
  {
    author: "Mamdani, Mahmood",
    year: "2004",
    title: "Good Muslim, Bad Muslim: America, the Cold War, and the Roots of Terror",
    source: "Pantheon Books",
    type: "Book",
  },
  {
    author: "Omi, Michael & Winant, Howard",
    year: "1986",
    title: "Racial Formation in the United States: From the 1960s to the 1980s",
    source: "Routledge",
    type: "Book",
  },
  {
    author: "Runnymede Trust",
    year: "1997",
    title: "Islamophobia: A Challenge for Us All",
    source: "Runnymede Trust Report",
    type: "Report",
  },
  {
    author: "Council on American-Islamic Relations (CAIR)",
    year: "2017",
    title: "Bullied for Being Muslim: A National CAIR Report on Islamophobia in U.S. Schools",
    source: "CAIR",
    type: "Report",
  },
  {
    author: "Council on American-Islamic Relations (CAIR)",
    year: "2022",
    title: "Still Suspect: The Impact of Structural Islamophobia",
    source: "CAIR National Research & Advocacy Department",
    type: "Report",
  },
  {
    author: "Bazian, Hatem",
    year: "2015",
    title: "Islamophobia, 'Clash of Civilizations', and Forging a Post–Cold War New World Order",
    source: "Religions, 6(2), 652–682",
    type: "Journal Article",
  },
  {
    author: "Crenshaw, Kimberlé",
    year: "1991",
    title: "Mapping the Margins: Intersectionality, Identity Politics, and Violence against Women of Color",
    source: "Stanford Law Review, 43(6), 1241–1299",
    type: "Journal Article",
  },
  {
    author: "Pew Research Center",
    year: "2017",
    title: "U.S. Muslims Concerned About Their Place in Society, but Continue to Believe in the American Dream",
    source: "Pew Research Center",
    type: "Survey Report",
  },
  {
    author: "Media Tenor International",
    year: "2012",
    title: "A New Era of Arab & Muslim Media Coverage? Findings from the Media Tenor 2001–2012",
    source: "Media Tenor",
    type: "Report",
  },
  {
    author: "FBI Uniform Crime Reports",
    year: "2022",
    title: "Hate Crime Statistics: Anti-Muslim Incidents",
    source: "Federal Bureau of Investigation",
    type: "Government Report",
  },
  {
    author: "Beydoun, Khaled A.",
    year: "2018",
    title: "American Islamophobia: Understanding the Roots and Rise of Fear",
    source: "University of California Press",
    type: "Book",
  },
];

export const teamMembers = [
  "Fatima Al-Rashid",
  "Ahmed Hassan",
  "Sarah Johnson",
  "Omar Khalid",
  "Maria Gonzalez",
];

export const populationData = [
  { country: "Indonesia", population: 231, label: "231M" },
  { country: "Pakistan", population: 213, label: "213M" },
  { country: "Bangladesh", population: 153, label: "153M" },
  { country: "Egypt", population: 90, label: "90M" },
  { country: "Turkey", population: 80, label: "80M" },
  { country: "Iran", population: 80, label: "80M" },
  { country: "USA", population: 3.85, label: "3.85M" },
  { country: "France", population: 5.7, label: "5.7M" },
  { country: "UK", population: 3.4, label: "3.4M" },
  { country: "Germany", population: 5.3, label: "5.3M" },
];