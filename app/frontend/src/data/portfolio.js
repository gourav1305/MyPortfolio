export const profile = {
  name: "Gourav Shrivas",
  role: "Frontend Developer & UX Designer",
  location: "Bhilai, Chhattisgarh — IN",
  tagline: "I build fast, accessible web apps that people love to use.",
  bio: [
    "I'm a frontend developer and UX designer based out of Bhilai. I spend my days turning fuzzy product ideas into shipped interfaces — React on one side of the screen, Figma on the other.",
    "What drives me is the boring stuff most people skip: performance budgets, keyboard traps, empty states, the third loading skeleton nobody notices. That's where good products are made.",
    "Off the keyboard, I'm usually chasing a decent filter coffee, redesigning apps I don't own, or ruining my sleep schedule for a side project."
  ],
  email: "gouravshrivas1008@gmail.com",
  socials: {
    github: "https://github.com/gourav1305",
    linkedin: "https://www.linkedin.com/in/gourav-shrivas-549866333?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    twitter: "https://x.com/GouravS87540772",
    dribbble: "https://dribbble.com/gouravshrivas"
  }
};

export const skills = {
  frontend: ["React", "JavaScript", "TypeScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Framer Motion"],
  design:   ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Design Systems", "Prototyping"],
  tools:    ["Git", "VS Code", "Chrome DevTools", "Vercel", "Postman", "Notion"],
  craft:    ["Accessibility (WCAG)", "Responsive Design", "Interaction Design", "Usability Testing", "Wireframing"]
};

export const marqueeTags = [
  "React", "TypeScript", "Next.js", "Tailwind", "Figma",
  "Framer Motion", "Design Systems", "Accessibility",
  "UX Research", "Prototyping", "Node.js", "Motion Design"
];

export const projects = [
  {
    id: "01",
    name: "Northwind Analytics",
    year: "2024",
    problem: "A fintech dashboard buckled under 50k rows of live data — analysts were watching spinners longer than charts.",
    role: "Frontend lead — architecture, performance work, chart layer, component library.",
    stack: ["React", "TypeScript", "TanStack Query", "Recharts", "Tailwind"],
    outcome: "Cut initial render from 4.2s to 900ms, virtualized the table, and shipped a design system reused across 3 internal tools.",
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1Mjh8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwdWklMjB1eCUyMGRlc2lnbiUyMG1vY2t1cCUyMGRhcmt8ZW58MHx8fHwxNzgzMTc1NTMzfDA&ixlib=rb-4.1.0&q=85",
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    id: "02",
    name: "Kaia — Habit Tracker",
    year: "2024",
    problem: "Habit apps punish you for missing a day. Kaia rewards showing up, even messily.",
    role: "Solo — product design + full frontend build.",
    stack: ["Next.js", "Framer Motion", "Zustand", "Tailwind"],
    outcome: "3.2k signups in the first month via a single Product Hunt launch. Featured in two design newsletters.",
    image: "https://images.unsplash.com/photo-1697292866728-e3ebeb396e6b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1Mjh8MHwxfHNlYXJjaHwzfHxtaW5pbWFsaXN0JTIwdWklMjB1eCUyMGRlc2lnbiUyMG1vY2t1cCUyMGRhcmt8ZW58MHx8fHwxNzgzMTc1NTMzfDA&ixlib=rb-4.1.0&q=85",
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    id: "03",
    name: "Studio Meraki — Rebrand",
    year: "2023",
    problem: "A boutique architecture studio had strong work but a website that read like a 2014 WordPress theme.",
    role: "Brand direction, UX writing, full frontend rebuild.",
    stack: ["React", "GSAP", "CSS Grid", "Sanity CMS"],
    outcome: "Inbound lead volume doubled in the quarter after launch. Featured on Awwwards Sites of the Day.",
    image: "https://images.unsplash.com/photo-1614020661498-fef5b2293108?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1Mjh8MHwxfHNlYXJjaHw0fHxtaW5pbWFsaXN0JTIwdWklMjB1eCUyMGRlc2lnbiUyMG1vY2t1cCUyMGRhcmt8ZW58MHx8fHwxNzgzMTc1NTMzfDA&ixlib=rb-4.1.0&q=85",
    demoUrl: "#",
    codeUrl: "#"
  }
];

export const experience = [
  {
    role: "Frontend Developer",
    company: "Freelance / Studio work",
    period: "2023 — Present",
    location: "Remote, India",
    points: [
      "Shipped 12+ marketing sites and small products for early-stage startups across India and SEA.",
      "Cut average LCP from 3.4s to 1.1s on a client SaaS by owning the frontend performance budget end-to-end.",
      "Built a shared React + Tailwind component library re-used across three client engagements."
    ]
  },
  {
    role: "Web Designer Intern",
    company: "IIT Bhilai",
    period: "2024 — 2025",
    location: "Bhilai, India",
    points: [
      "Redesigned the checkout flow for an e-commerce client; conversion up ~18% after A/B testing.",
      "Ran usability interviews and translated findings into interactive Figma prototypes.",
      "Owned the design QA pass on release day for two client launches."
    ]
  }
];

export const education = [
  {
    degree: "M.C.A, Computer Application",
    school: "Rungta College Bhilai, Chhattisgarh",
    period: "Present"
  },
  {
    degree: "B.C.A, Computer Application",
    school: "Govt. E. Raghvendra Rao PG Science College Bilaspur, Chhattisgarh",
    period: "2022 — 2025"
  }
];
