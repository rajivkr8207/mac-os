'use client'
import Terminal from 'react-console-emulator';
import MacWindow from '../../MacWindow/MacWindow';
import './cli.scss'
const commands = {
    about: {
      description: "About me",
      usage: "about",
      fn: () =>
        "I am Rajiv, a self-taught Full-Stack Web Developer focused on building production-level web applications using React, Next.js, Node.js, and modern backend architectures.",
    },
  
    skills: {
      description: "List technical skills",
      usage: "skills",
      fn: () => `
  Frontend:
  - React.js
  - Next.js
  - Tailwind CSS
  - SCSS
  
  Backend:
  - Node.js
  - Express.js
  - REST APIs
  
  Databases:
  - PostgreSQL
  - MongoDB
  
  Tools:
  - Git
  - Docker
  - Linux
  - Figma
  `,
    },
  
    projects: {
      description: "View my projects",
      usage: "projects",
      fn: () => `
  1. E-Commerce Backend API
     - Express.js + MongoDB
     - Auth, products, orders
  
  2. macOS-style Portfolio OS
     - Next.js
     - Window system, Notes, Terminal UI
  `,
    },
  
    experience: {
      description: "Display work experience",
      usage: "experience",
      fn: () => `
  Frontend Web Developer (Intern) @ InterWeU
  Dec 2025 - Present
  
  - Built responsive UI components using React & Tailwind CSS
  - Worked with Next.js for routing and performance optimization
  - Integrated frontend with backend APIs
  - Improved UI consistency and user experience
  `,
    },
  
    education: {
      description: "Display education & learning path",
      usage: "education",
      fn: () => `
  Self-Taught Path:
  - Full-Stack Web Development
  
  Online Learning:
  - Data Structures & Algorithms
  - System Design
  - REST API Architecture
  `,
    },
  
    contact: {
      description: "Get contact information",
      usage: "contact",
      fn: () => `
  Name: Rajiv
  Location: India / Remote
  Role: Full-Stack Developer
  Status: Open to Opportunities
  `,
    },
  
    github: {
      description: "Open GitHub profile",
      usage: "github",
      fn: () => {
        window.open("https://github.com/rajivkr8207", "_blank");
        return "Opening GitHub profile...";
      },
    },
  
    social: {
      description: "View social links",
      usage: "social",
      fn: () => `
  GitHub: github.com/rajivkr8207
  Portfolio: macOS-style Web Portfolio
  LinkedIn: Coming Soon
  `,
    },
  
    echo: {
      description: "Echo a passed string",
      usage: "echo <string>",
      fn: (...args: string[]) => args.join(' ')
    },
  };
  
  const welcomeMessage = `
  ╔════════════════════════════════════════╗
  ║        Welcome to Rajiv CLI OS         ║
  ╚════════════════════════════════════════╝
  
  Hello 👋
  This is an interactive terminal-based portfolio.
  
  Type 'help' to list all commands, or try:
    • about       - Know who I am
    • skills      - View my tech stack
    • projects    - Explore my projects
    • experience  - Work experience
    • education   - Learning journey
    • contact     - Get in touch
  
  System Status: Stable
  Mode: Building & Learning
  Ready 🚀
  `;
  
  

const Cli = ({ windowName }: { windowName: string }) => {
    return (
        <MacWindow windowName={windowName}>
            <div className='cli-window'>
                <Terminal
                    commands={commands}
                    welcomeMessage={welcomeMessage}
                    promptLabel={'rajiv_kumar@candy:~$'}
                    promptLabelStyle={{ color: '#25ff0d' }}
                />
            </div>
        </MacWindow>
    )
}

export default Cli