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
console.log(`${Text}Senior Frontend Developer @ Celsius Network Europe`)

console.log(`${Title}CONTACT`)
console.log(`${Key}Email: ${Value}aleksandartimic@gmail.com`)
console.log(`${Key}Business email: ${Value}aleksandar.timic@celsius.network`)
console.log(`${Key}Phone: ${Value}+381603364567`)
console.log(`${Key}Linkedin: ${Value}https://www.linkedin.com/in/aleksandar-timic-a8a77627/`)

console.log(`${Title}EXPERIENCE`)
console.log(`${Subtitle}Celsius Network Europe`)
console.log(`${Subtitle}Senior Front-end Developer`)
console.log(`${Key}Date: ${Value}June 2021 - up to present`)
console.log(`${Key}Job: ${Value}Developing Celsius Crypto Lending Web App`)
console.log(`${Key}Stack: ${Value}React, React Query, Redux (Easy-peasy), Styled components (Emotion), Material UI, Lerna, Storybook, Github`)

console.log(`\n\n`)


