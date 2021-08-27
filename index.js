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
console.log(`${Subtitle}Senior Frontend Developer @ Celsius Network Europe`)

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
console.log(`${Subtitle}Celsius Network Europe`)
console.log(`${Subtitle}Senior Front-end Developer`)
console.log(`${Key}Date: ${Value}June 2021 - up to present`)
console.log(`${Key}Job: ${Value}Developing Celsius Crypto Lending Web App`)
console.log(`${Key}Stack: ${Value}React, React Query, Redux (Easy-peasy), Styled components (Emotion), Material UI, Lerna, Storybook, Jest, Github`)
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
console.log(`${Subtitle}Gordan Topalovic, WhiteCitySoft, CEO`)
console.log(`${Text}"Aleksandar is one of the rare developers who are capable to produce quality work with such precision and dedication.
Very demanding when it comes to details and skilled in multi-level environments, never refused challenge when he is confident he will succeed.
Truly valuable member of our team."` )
console.log(`\n`)

console.log(`${Subtitle}Aleksandar Nenov, WhiteCitySoft, Cloud (AWS) Web Operations Consultant`)
console.log(`${Text}"I've had the privilege to work with Aleksandar Timic, I can say it was a pleasure to collaborate with him, very professional and talented Web Developer.` )
console.log(`\n`)

console.log(`${Subtitle}Milos Radovic, Namics AG, Senior Consultant`)
console.log(`${Text}"I known Aleksandar for several years now as a client and colleague. I have been impressed by his professional attitude and his problem solving skills. He is truly thinking "out of the box". Aleksandar has fantastic programming skills and he is technology savvy. He has always shown initiative, quick thinking and determination in getting things done. I would recommend him as a exceptional frontend engineer and project manager or to anyone who is looking for a reliable hand to take charge in projects and not just to get the job done, but done extraordinarily well."` )
console.log(`\n`)

console.log(`${Subtitle}Timothy McMillan, McMillan Freelance, Owner`)
console.log(`${Text}"I've worked with Alex to produce exceptional projects for clients. Alex produces highly functional, clean code and can deliver even the most complex tasks in a timely manner.` )
console.log(`\n`)



console.log(`\n\n`)


