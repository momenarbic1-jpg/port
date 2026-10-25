export interface SiteConfig {
  name: string;
  role: string;
  headline: string;
  headlineHighlight: string;
  intro: string;
  statistics: {
    label: string;
    value: string;
    description: string;
  }[];
  about: {
    sectionNumber: string;
    heading: string;
    paragraphs: string[];
    features: {
      title: string;
      description: string;
    }[];
  };
  navigation: {
    name: string;
    href: string;
  }[];
  contact: {
    email: string;
    github: string;
    linkedin: string;
    phone: string;
    whatsapp: string;
    location: string;
    cvUrl: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Momen",
  role: "AI Builder & Software Developer",
  headline: "Turning Ideas Into",
  headlineHighlight: "Intelligent Solutions",
  intro:
    "I’m Momen, an AI builder and software developer creating modern digital experiences, intelligent workflows, and practical software solutions using advanced AI tools and technologies.",
  statistics: [
    {
      label: "AI Tools & Models",
      value: "15+",
      description: "Integrated in workflows",
    },
    {
      label: "Projects & Builds",
      value: "12+",
      description: "Systems, platforms & apps",
    },
    {
      label: "Core Focus Areas",
      value: "4",
      description: "AI, Web, POS, Automation",
    },
    {
      label: "Continuous Learning",
      value: "Daily",
      description: "Experimenting with new tech",
    },
  ],
  about: {
    sectionNumber: "01",
    heading: "Building at the Intersection of AI and Software",
    paragraphs: [
      "I am an AI-focused builder passionate about software development, practical business automation, and high-performance digital products.",
      "My approach centers on leveraging modern AI assistants, cutting-edge development environments, and modular architectures to transform complex ideas into intuitive, reliable web applications.",
      "Whether developing responsive management systems, custom storefronts, or automated workflows, I prioritize clean code, thoughtful interface design, and seamless user experiences.",
    ],
    features: [
      {
        title: "Problem Solver",
        description:
          "Analyzing real operational bottlenecks and engineering targeted, scalable software remedies.",
      },
      {
        title: "Fast Learner",
        description:
          "Rapidly testing and mastering emerging AI models, development frameworks, and tooling.",
      },
      {
        title: "Creative Thinker",
        description:
          "Synthesizing technical precision with aesthetic refinement to deliver polished software.",
      },
    ],
  },
  navigation: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "AI Expertise", href: "#ai-expertise" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ],
  contact: {
    email: "momenarbic1@gmail.com",
    github: "https://github.com/momenarbic1-jpg",
    linkedin: "https://www.linkedin.com/in/moamen-ahmed-70a4ab25a",
    phone: "+20 155 626 9794",
    whatsapp: "https://wa.me/201556269794",
    location: "Egypt (Remote Worldwide)",
    cvUrl: "#contact",
  },
};
