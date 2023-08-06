#!/usr/bin/env node

Reset = "\x1b[0m"
Bright = "\x1b[1m"
Dim = "\x1b[2m"
Underscore = "\x1b[4m"
Blink = "\x1b[5m"
Reverse = "\x1b[7m"
Hidden = "\x1b[8m"

FgBlack = "\x1b[30m"
FgRed = "\x1b[31m"
FgGreen = "\x1b[32m"
FgYellow = "\x1b[33m"
FgBlue = "\x1b[34m"
FgMagenta = "\x1b[35m"
FgCyan = "\x1b[36m"
FgWhite = "\x1b[37m"

BgBlack = "\x1b[40m"
BgRed = "\x1b[41m"
BgGreen = "\x1b[42m"
BgYellow = "\x1b[43m"
BgBlue = "\x1b[44m"
BgMagenta = "\x1b[45m"
BgCyan = "\x1b[46m"
BgWhite = "\x1b[47m"

Title = `\n${Reset}${Underscore}${Bright}${FgWhite}`
Subtitle = `${Reset}${Bright}${FgMagenta}`
Text = `${Reset}${FgMagenta}`
Key = `${Reset}${FgWhite}`
Value = `${Reset}${FgMagenta}`

// Clear screen
process.stdout.write("\u001b[2J\u001b[0;0H");

console.log(`${Title}ALEKSANDAR TIMIC`)
console.log(`${Subtitle}Senior Frontend Developer @ MELD`)

console.log(`${Title}CONTACT`)
console.log(`${Key}Email: ${Value}aleksandartimic@gmail.com`)
console.log(`${Key}Business email: ${Value}aleksandar.timic@celsius.network`)
console.log(`${Key}Phone: ${Value}+381603364567`)
console.log(`${Key}Linkedin: ${Value}https://www.linkedin.com/in/aleksandar-timic-a8a77627/`)

console.log(`${Title}EDUCATION`)
console.log(`${Subtitle}1. Master of Mathematics and Informatics`)
console.log(`${Subtitle}Mathematical Faculty, Belgrade`)
console.log(`\n`)
console.log(`${Subtitle}2. Electrical Technician for Computers. Profession profile: Informatics`)
console.log(`${Subtitle}"Nikola Tesla", Electrotechnical high school`)

console.log(`${Title}LANGUAGES`)
console.log(`${Text}English - level: high` )
console.log(`${Text}Serbian - level: native`)



console.log(`${Title}EXPERIENCE`)

console.log(`${Subtitle}MELD`)
console.log(`${Subtitle}Senior Frontend developer`)
console.log(`${Key}Date: ${Value}December 2022 - present`)
console.log(`${Key}Job: ${Value}Developing the Meld web application. MELD is a full-suite non-custodial DeFi banking protocol that allows users to securely lend and borrow crypto and fiat currencies and earn yield—all while maintaining custody of crypto assets.`)
console.log(`${Key}Stack: ${Value}Typescript, React, React Query, Zustand, Ethers, MeshJS, Wagmi, Web3Auth, Styled components (Emotion), CSS Modules, Material UI, Formik, ChartJS, Storybook, Metamask, WalletConnect, Git`)
console.log(`\n`)

console.log(`${Subtitle}Symphony.is`)
console.log(`${Subtitle}Software Engineer`)
console.log(`${Key}Date: ${Value}June 2022 - December 2022`)
console.log(`${Key}Job: ${Value}Development of the various software solutions for the Swedish wood industry.`)
console.log(`${Key}Stack: ${Value}Typescript, React, React Query, SASS, Styled components (Emotion), CSS Modules, Material UI, Storybook, ChartJS, Docker, Azure DevOps`)
console.log(`\n`)


console.log(`${Subtitle}Celsius Network Europe`)
console.log(`${Subtitle}Senior Front-end Developer`)
console.log(`${Key}Date: ${Value}June 2021 - Jun 2022`)
console.log(`${Key}Job: ${Value}Developing Celsius crypto lending web app`)
console.log(`${Key}Stack: ${Value}Typescript, React, React Query, Redux (Easy-peasy), Styled components (Emotion), Material UI, Lerna, Storybook, Jest, Github`)
console.log(`\n`)

console.log(`${Subtitle}SimScale GmbH`)
console.log(`${Subtitle}Senior Front-end Developer`)
console.log(`${Key}Date: ${Value}June 2015 - June 2021`)
console.log(`${Key}Job: ${Value}Developing SimScale platform for simulation in the cloud`)
console.log(`${Key}Stack: ${Value}React, Backbone, Vanilla JS, jQuery, Underscore, Handlebars, SASS, Python, PHP, MySQL, Jenkins, Grunt, Gulp, Docker, Cypress, Persy.io, Twitter Bootstrap, Gitlab, BASH shell scripting`)
console.log(`\n`)

console.log(`${Subtitle}Deploy Inc.`)
console.log(`${Subtitle}Senior Front-end Developer`)
console.log(`${Key}Date: ${Value}May 2014 - June 2015`)
console.log(`${Key}Job: ${Value}Developing advertising platform for serving HTML5 games alongside ads.`)
console.log(`${Key}Stack: ${Value}Vanilla JS, jQuery, HTML5, CSS3, SASS, Phaser.io, Handlebars, Grunt, Jenkins, Google Analytics, Google DFP, Amazon Cloudfront, Git`)
console.log(`\n`)

console.log(`${Subtitle}Qode Interactive`)
console.log(`${Subtitle}Front-end Developer`)
console.log(`${Key}Date: ${Value}Aug 2012 - Oct 2012`)
console.log(`${Key}Job: ${Value}Developing home site for the National Lottery of Serbia (lutrija.rs) and charity campaign website for National Lottery of Serbia (dobrota.rs)`)
console.log(`${Key}Stack: ${Value}Vanilla JS, jQuery, HTML5, CSS3, SASS, Grunt, Git`)
console.log(`\n`)

console.log(`${Subtitle}WhiteCitySoft`)
console.log(`${Subtitle}Front-end Developer`)
console.log(`${Key}Date: ${Value}Aug 2012 - Oct 2012`)
console.log(`${Key}Job: ${Value}Developing home site for the National Lottery of Serbia (lutrija.rs) and charity campaign website for National Lottery of Serbia (dobrota.rs)`)
console.log(`${Key}Stack: ${Value}Vanilla JS, jQuery, HTML5, CSS3, SASS, Grunt, Git`)
console.log(`\n`)

console.log(`${Subtitle}AltimCode`)
console.log(`${Subtitle}CEO`)
console.log(`${Key}Date: ${Value}Jan 2007 -  up to present`)
console.log(`${Key}Job: ${Value}I'm the CEO of my own agency where we develop websites for small and middle size companies.`)
console.log(`${Key}Stack: ${Value}React, Vanilla JS, jQuery, PHP, CodeIgniter, MySQL, Python, SCSS, Material UI, Twitter Bootstrap, Wordpress, WooCommerce, Photoshop, Affinity Designer, Affinity Photo, Gimp, Git`)

console.log(`${Title}FOCUSED AND WILLING TO LEARN`)
console.log(`${Text}I'm always looking to improve myself through books, online tutorials or by learning from my colleagues.` )

console.log(`${Title}RELIABLE`)
console.log(`${Text}Always on time and ready to work.` )

console.log(`${Title}INTERESTS`)
console.log(`${Text}Music, Games, Movies` )

console.log(`${Title}REFERENCES`)

console.log(`${Subtitle}Pepe Blasco Núñez de Cela, MELD, CTO`)
console.log(`${Text}"I am happy to endorse Aleksandar, a top-notch Senior Frontend Developer who reported to me for the past several months. His extensive knowledge in React, TypeScript and other frontend technologies distinguishes him as a true leader in frontend development. He effortlessly applies these skills to transform intricate designs into functional and engaging digital experiences, always keeping our strategic objectives in sight.
What sets Aleksandar apart is his intrinsic research ability. In an ever-changing tech landscape, he actively keeps abreast of new developments and techniques. He not only takes the initiative to learn and master novel topics and tools, but also translates these insights into actionable strategies for our team. His ability to simplify complex ideas has boosted our collective proficiency. Aleksandar embodies the rare combination of technical mastery, ongoing learning, and stellar teamwork. I have no doubt that he would be an incredible addition to any team or project."` )
console.log(`\n`)

console.log(`${Subtitle}Gordan Topalovic, WhiteCitySoft, CEO`)
console.log(`${Text}"Aleksandar is one of the rare developers who are capable to produce quality work with such precision and dedication.
Very demanding when it comes to details and skilled in multi-level environments, never refused challenge when he is confident he will succeed.
Truly valuable member of our team."` )
console.log(`\n`)

console.log(`${Subtitle}Milos Radovic, Head of Marketing Strategy & Development at Swisscomt`)
console.log(`${Text}"I known Aleksandar for several years now as a client and colleague. I have been impressed by his professional attitude and his problem solving skills. He is truly thinking "out of the box". Aleksandar has fantastic programming skills and he is technology savvy. He has always shown initiative, quick thinking and determination in getting things done. I would recommend him as a exceptional frontend engineer and project manager or to anyone who is looking for a reliable hand to take charge in projects and not just to get the job done, but done extraordinarily well."` )
console.log(`\n`)

console.log(`${Subtitle}Aleksandar Nenov, WhiteCitySoft, Cloud (AWS) Web Operations Consultant`)
console.log(`${Text}"I've had the privilege to work with Aleksandar Timic, I can say it was a pleasure to collaborate with him, very professional and talented Web Developer.` )
console.log(`\n`)

console.log(`${Subtitle}Timothy McMillan, McMillan Freelance, Owner`)
console.log(`${Text}"I've worked with Alex to produce exceptional projects for clients. Alex produces highly functional, clean code and can deliver even the most complex tasks in a timely manner.` )
console.log(`\n`)



console.log(`\n\n`)


