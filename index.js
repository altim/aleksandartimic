#!/usr/bin/env node

const portrait = require('./portrait')

// ─── Data ────────────────────────────────────────────────────────────────────

const profile = {
  name: 'ALEKSANDAR TIMIĆ',
  title: 'Senior Frontend Engineer',
  company: '@ Semrush, an Adobe company',
  location: 'Belgrade, Serbia',
  contact: [
    ['Email', 'aleksandartimic@gmail.com'],
    ['Phone', '+381 60 336 4567'],
    ['Linkedin', 'linkedin.com/in/aleksandartimic'],
    ['Website', 'aleksandartimic.com'],
  ],
}

const about = [
  'Senior Frontend Engineer with 15+ years of experience. I build web applications, lead frontend teams, and help developers grow. My work spans frontend architecture and complete products built from the ground up.',
  "Alongside my company roles, I've worked on over 150 freelance projects, including work for LG and BlackBerry, and collaborated with McKinsey and BCG during my time at Symphony.",
  'My recent focus is on AI-powered tools and workflows: retrieval-augmented generation (RAG), agent skills and plugins that help teams find information and automate repetitive tasks.',
]

const experience = [
  {
    company: 'Semrush, an Adobe company',
    role: 'Senior Frontend Developer',
    date: '2025 – present',
    job: 'Engineering AI-search analytics that turn prompt-level company and competitor mentions into visibility-gap analysis and actionable brand intelligence. Designing agentic development workflows with OpenAI Codex and Claude Code: custom skills, MCP integrations, context-aware tooling and reusable automation.',
    stack: 'TypeScript, React, Astro, MobX, SCSS Modules, Intergalactic, react-i18next, Crowdin, Valibot, Jest, Playwright, Claude Code, Codex',
  },
  {
    company: 'Symphony.is',
    role: 'Software Engineer, Senior Frontend',
    date: '2022 – 2025',
    job: 'Led and mentored three engineers across two projects (onboarding, pairing, code review, technical guidance, career development). Engineered customer-facing solutions for Humane, solved interaction-heavy frontend problems, and built software for the Swedish wood industry, including service worker and charting functionality.',
    stack: 'TypeScript, React, Next.js, Shopify, Hydrogen, Liquid, GraphQL, gRPC, Vercel, Three.js, TanStack Query, React Hook Form, React Virtual, React Spring, Radix UI, Panda CSS, Material UI, Sass, Storybook, Jest, React Testing Library, Zod, Yup, Docker, Azure DevOps',
  },
  {
    company: 'Celsius',
    role: 'Senior Frontend Developer',
    date: '2021 – 2022',
    job: 'Built core experiences for the Celsius crypto lending and borrowing application. Strengthened UI quality through reusable Storybook components and close Figma collaboration, and advanced controlled experimentation with feature flags and A/B testing.',
    stack: 'TypeScript, React, TanStack Query, Node.js, Material UI, Emotion, styled-components, Storybook, Jest, React Testing Library, LaunchDarkly, Optimizely, Docker, Lerna, jscodeshift',
  },
  {
    company: 'SimScale GmbH',
    role: 'Senior Frontend Developer',
    date: '2015 – 2021',
    job: "Helped evolve the frontend of SimScale's cloud computer-aided engineering platform across six years, including sustained migration away from legacy technologies, with full-stack delivery to ship and sustain a complex global engineering product.",
    stack: 'React, Backbone.js, JavaScript, Sass, PHP, MySQL, Docker, Vagrant, Jenkins, Git, Bash, Grunt, Gulp',
  },
  {
    company: 'Deploy Inc.',
    role: 'Senior Frontend Developer',
    date: '2014 – 2015',
    job: 'Built an advertising platform and HTML5 games, integrating Amazon CloudFront, Google Analytics and Google DFP into production advertising workflows.',
    stack: 'JavaScript, jQuery, Phaser, Sass, Handlebars, Grunt, Jenkins, Amazon CloudFront, Google Analytics, Google DFP',
  },
  {
    company: 'Qode Interactive',
    role: 'Frontend Developer',
    date: '2012 – 2014',
    job: "Built the frontend for Serbia's National Lottery and a related charity campaign, including two reusable JavaScript parallax engines.",
    stack: 'HTML5, CSS3, Sass, jQuery, Git',
  },
  {
    company: 'WhiteCitySoft',
    role: 'WordPress Developer',
    date: '2010 – 2012',
    job: 'Developed custom WordPress themes and plugins for international clients including Reebok and Mercy Drink.',
    stack: 'WordPress, PHP, MySQL, JavaScript, jQuery, HTML, CSS preprocessors',
  },
  {
    company: 'Altimcode',
    role: 'Independent practice',
    date: '2007 – present',
    job: 'Independent web development practice focused on websites, WordPress themes and plugins, with more than 150 projects delivered, including work for LG and BlackBerry. Led performance and quality optimization, reaching 100/100 Google Lighthouse scores in Performance, Accessibility, Best Practices and SEO.',
    stack: 'React, JavaScript, PHP, MySQL, WordPress, WooCommerce, Sass, Google Lighthouse, Photoshop, Illustrator',
  },
]

const skills = [
  ['React ecosystem', 'React, TypeScript, JavaScript, Next.js, Astro, Remix, TanStack Query/Router/Table, React Hook Form, Zod, Valibot'],
  ['AI engineering', 'Claude Code, Codex, Cursor, Vercel AI SDK, MCP servers, custom skills and plugins, RAG, agentic workflows, embeddings, Ollama, n8n'],
  ['Leadership', 'Team leadership, mentoring, onboarding, pairing, code reviews, application architecture, frontend performance'],
  ['Backend & databases', 'Node.js, PHP, Python, PostgreSQL, pgvector, MySQL, SQLite, Prisma, GraphQL, gRPC, WebSockets, OAuth 2.0, JWT'],
  ['Styling & state', 'Sass, Panda CSS, styled-components, Emotion, CSS Modules, MobX, Redux, Zustand, Jotai'],
  ['Testing', 'Jest, React Testing Library, Playwright, Cypress, Percy.io'],
  ['CI/CD & DevOps', 'Git, GitHub Actions, Vercel, Docker, Jenkins, Azure DevOps, Linux, Bash, Vite, Webpack'],
  ['Design systems', 'Storybook, Figma, Mantine, Material UI, Chakra UI, Radix UI, Intergalactic'],
  ['Creative', 'Three.js, React Three Fiber, WebGL, GLSL shaders, GSAP, React Spring, Motion, Recharts, Chart.js'],
  ['Other', 'Shopify, Hydrogen, Web3 (Ethers, Wagmi, WalletConnect), Sanity, Contentful, WordPress, i18next, LaunchDarkly, Optimizely'],
]

const projects = [
  ['gottaSay', 'AI-powered feedback platform. Designed, built, and launched everything from the interface and backend to payments and deployment.'],
]

const education = [
  ['Master of Science, Mathematics and Informatics', 'University of Belgrade, Faculty of Mathematics'],
  ['Electrical Technician for Computers', '"Nikola Tesla" Electrotechnical High School'],
]

const languages = [
  ['Serbian', 'native'],
  ['English', 'full professional proficiency'],
]

const interests = 'Music, Games, Movies'

const references = [
  {
    author: 'Pepe Blasco Núñez de Cela',
    position: 'CTO, DeFi protocol',
    quote: 'His extensive knowledge in React, TypeScript and other frontend technologies distinguishes him as a true leader in frontend development. He effortlessly applies these skills to transform intricate designs into functional and engaging digital experiences. What sets Aleksandar apart is his intrinsic research ability. He actively keeps abreast of new developments and techniques, translating insights into actionable strategies for the team.',
  },
  {
    author: 'Miloš Radović',
    position: 'Head of Marketing Strategy & Development at Swisscom',
    quote: 'I have been impressed by his professional attitude and his problem solving skills. He is truly thinking "out of the box". He has always shown initiative, quick thinking and determination in getting things done. I would recommend him as an exceptional frontend engineer and project manager, or to anyone who is looking for a reliable hand to take charge in projects and not just to get the job done, but done extraordinarily well.',
  },
  {
    author: 'Gordan Topalović',
    position: 'CEO at WhiteCitySoft',
    quote: 'Aleksandar is one of the rare developers who are capable to produce quality work with such precision and dedication. Very demanding when it comes to details and skilled in multi-level environments, never refused challenge when he is confident he will succeed. Truly valuable member of our team.',
  },
  {
    author: 'Timothy McMillan',
    position: 'Owner at McMillan Freelance',
    quote: 'Alex produces highly functional, clean code and can deliver even the most complex tasks in a timely manner.',
  },
]

// ─── Terminal ────────────────────────────────────────────────────────────────

const isTTY = Boolean(process.stdout.isTTY)
const useColor = !process.env.NO_COLOR && (isTTY || Boolean(process.env.FORCE_COLOR))
const trueColor = /truecolor|24bit/i.test(process.env.COLORTERM || '')

// Readable line length: follow the terminal, but never wider than 100 columns
const columns = Math.max(process.stdout.columns || Number(process.env.COLUMNS) || 80, 20)
const width = Math.min(columns, 100)
const margin = width >= 60 ? 2 : 0
const inner = width - margin * 2
const pad = ' '.repeat(margin)

const style = code => text => (useColor ? `\x1b[${code}m${text}\x1b[0m` : text)
const bold = style('1')
const dim = style('2')
const italic = style('3')
// Vivid blues matching the portrait; 256-color fallback otherwise
const blue = trueColor ? '38;2;20;140;255' : '38;5;33'
const lightBlue = trueColor ? '38;2;70;180;255' : '38;5;39'
const accent = style(`1;${blue}`)
const soft = style(lightBlue)
const heading = style('1')

const visibleLength = text => [...text.replace(/\x1b\[[0-9;]*m/g, '')].length

// Word wrap to `max` columns; words longer than a line (URLs) are hard-split
const wrap = (text, max) => {
  const lines = []
  let line = ''
  for (let word of text.split(/\s+/)) {
    while (word.length > max) {
      if (line) lines.push(line), (line = '')
      lines.push(word.slice(0, max))
      word = word.slice(max)
    }
    if (!line) line = word
    else if (line.length + 1 + word.length <= max) line += ' ' + word
    else lines.push(line), (line = word)
  }
  if (line) lines.push(line)
  return lines
}

const out = (text = '') => console.log(text ? pad + text : '')

// Wrapped paragraph: `prefix` on the first line, `indent` on the rest
const paragraph = (text, { indent = '', prefix = indent, paint = t => t } = {}) => {
  const lines = wrap(text, Math.max(inner - visibleLength(indent), 10))
  lines.forEach((line, i) => out((i ? indent : prefix) + paint(line)))
}

const section = title => {
  const rule = '─'.repeat(Math.max(inner - visibleLength(title) - 4, 2))
  out()
  out(`${dim('──')} ${heading(title)} ${dim(rule)}`)
  out()
}

// Left and right text on one line, or stacked when they don't fit
const spread = (left, right) => {
  const space = inner - visibleLength(left) - visibleLength(right)
  if (space >= 2) out(left + ' '.repeat(space) + right)
  else out(left), out(right)
}

// ─── Header ──────────────────────────────────────────────────────────────────

const renderHeader = () => {
  const labelWidth = Math.max(...profile.contact.map(([label]) => label.length)) + 2
  const header = [
    heading(profile.name),
    accent(profile.title),
    soft(profile.company),
    dim(profile.location),
    '',
    ...profile.contact.map(([label, value]) => dim((label + ':').padEnd(labelWidth)) + value),
  ]
  const headerWidth = Math.max(...header.map(visibleLength))
  const portraitLines = useColor ? (trueColor ? portrait.truecolor : portrait.ansi256) : []
  const portraitWidth = portraitLines.length ? visibleLength(portraitLines[0]) : 0
  const gap = '   '

  out()
  const sideWidth = portraitWidth + gap.length + headerWidth
  if (portraitLines.length && columns >= sideWidth) {
    // Wide: portrait on the left, name and contact vertically centered on the right.
    // The margin is dropped when it would push the row past the terminal edge.
    const left = columns >= sideWidth + margin ? pad : ''
    const offset = Math.floor((portraitLines.length - header.length) / 2)
    portraitLines.forEach((line, i) => console.log(left + line + gap + (header[i - offset] || '')))
  } else {
    // Narrow: portrait above (when it fits), then the header
    if (portraitLines.length && columns >= portraitWidth + margin) {
      portraitLines.forEach(line => out(line))
      out()
    }
    header.forEach(line => (visibleLength(line) > inner ? paragraph(line) : out(line)))
  }
}

// ─── Sections ────────────────────────────────────────────────────────────────

const renderAbout = () => {
  section('ABOUT')
  about.forEach((text, i) => {
    if (i) out()
    paragraph(text)
  })
}

const renderExperience = () => {
  section('EXPERIENCE')
  const rail = dim('│ ')
  experience.forEach((job, i) => {
    spread(`${accent('●')} ${bold(job.company)}`, dim(job.date))
    paragraph(job.role, { indent: rail, paint: soft })
    out(rail)
    paragraph(job.job, { indent: rail })
    out(rail)
    paragraph(job.stack, { indent: rail, paint: dim })
    if (i < experience.length - 1) out(rail)
  })
}

const renderSkills = () => {
  section('SKILLS')
  const labelWidth = Math.max(...skills.map(([label]) => label.length)) + 2
  const sideBySide = inner - labelWidth >= 40
  skills.forEach(([label, list], i) => {
    if (sideBySide) {
      const prefix = soft(label.padEnd(labelWidth))
      paragraph(list, { prefix, indent: ' '.repeat(labelWidth) })
    } else {
      if (i) out()
      out(soft(label))
      paragraph(list, { indent: '  ' })
    }
  })
}

const renderProjects = () => {
  section('PROJECTS')
  projects.forEach(([name, text]) => {
    out(bold(name))
    paragraph(text, { indent: '  ' })
  })
}

const renderEducation = () => {
  section('EDUCATION')
  education.forEach(([degree, school], i) => {
    if (i) out()
    paragraph(degree, { paint: bold })
    paragraph(school, { indent: '  ', paint: dim })
  })
}

const renderLanguages = () => {
  section('LANGUAGES')
  languages.forEach(([language, level]) => paragraph(`${language} · ${level}`, { indent: '  ', prefix: '' }))
  section('INTERESTS')
  paragraph(interests)
}

const renderReferences = () => {
  section('REFERENCES')
  const bar = soft('┃ ')
  references.forEach(({ author, position, quote }, i) => {
    if (i) out()
    paragraph(`“${quote}”`, { indent: bar, paint: italic })
    paragraph(`— ${author}`, { indent: '  ', paint: bold })
    paragraph(position, { indent: '    ', paint: dim })
  })
}

// ─── Render ──────────────────────────────────────────────────────────────────

// Clear screen only in an interactive terminal, not when piped to a file
if (isTTY) process.stdout.write('\x1b[2J\x1b[0;0H')

renderHeader()
renderAbout()
renderExperience()
renderSkills()
renderProjects()
renderEducation()
renderLanguages()
renderReferences()

out()
paragraph('Run it again anytime: npx aleksandartimic', { paint: dim })
out()
