/**
 * Single configuration file for the Monograph site.
 *
 * Everything site-wide is driven from this file: identity, CV, socials,
 * navigation, metadata, and form settings. Edit values here; every page and
 * component derives from it. There is no other config source.
 */

export type Fact = {
  label: string;
  value: string;
  href?: string;
};

export type Experience = {
  period: string;
  title: string;
  href?: string;
  position?: string;
  description?: string;
};

export type Education = {
  period: string;
  title: string;
  href?: string;
  institution?: string;
  description?: string;
};

export type Project = {
  title: string;
  href?: string;
  description?: string;
};

export type Publication = {
  title: string;
  href?: string;
  venue?: string;
  year?: string;
};

export type SkillGroup = {
  group: string;
  items: string[];
};

export type Social = {
  label: string;
  href: string;
};

const brand = "ahmed's blog";
const name = "Ahmed Alshenoudy";

export const siteConfig = {
  /* ------------------------------------------------------------- identity --- */

  /** Website name — wordmark, page titles, and site-wide metadata. */
  brand,
  /** Author name — home hero, About page, and contact page. */
  name,
  /** Short line directly under the name in the home hero and the About page header. */
  role: "AI Researcher & Developer",
  /** Intro paragraph in the home hero and the About page header. */
  about: "Hi! I'm Ahmed, this is my personal blog where I share some of the things I am learning and working on. I currently work @RISC Software GmbH as a Researcher and Developer focusing on AI in radiology. I am also doing my PhD at Johannes Kepler University Linz at the institue of Computational Perception.",
  /** Terminal-style label rendered as `❯ tagline` by the Prompt component. */
  tagline: "whoami",
  /** Contact email shared by the hero, the About page, and the contact page. */
  email: "ahmed.alshenoudy@gmail.com",
  /** Optional resume link. Leave empty to hide the Resume pill. */
  resumeUrl: "",

  /* ------------------------------------------------------------------- CV --- */

  /**
   * Label→value rows. An optional `href` turns the value into an inline link.
   * Leave the array empty to hide the whole facts block.
   */
  facts: [] as Fact[],

  /**
   * Experience entries, rendered in the home hero and on the About page.
   * Each entry may optionally include an `href` to link the title. Leave the
   * array empty to hide the block entirely.
   */
  experience: [
    {
      period: "2023 — Now",
      title: "Researcher & Developer",
      href: "",
      position: "RISC Software GmbH",
      description:
        "Own the design-system platform every product team builds on: tokens, primitives, docs, and the migration path off the legacy kit.",
    },
    {
      period: "2021 — 2023",
      title: "Researcher & Developer",
      href: "",
      position: "RISC Software GmbH",
      description:
        "Part-time employment at the Medical Informatics Unit, mainly working on medical preprocessing pipelines and my Master's thesis project.",
    },
    {
      period: "2017 — 2019",
      title: "Field Engineer",
      href: "",
      position: "Schlumberger",
      description:
        "Worked on surface well-testing and data acqusition systems for oil and gas exploration and production. Managing teams in challenging on-shore and off-shore environments deliveriing under tight deadlines and high safety standards.",
    }
  ] as Experience[],

  /**
   * Education entries. Same shape as experience; leave empty to hide the
   * section entirely.
   */
  education: [
    {
      period: "2021 — 2023",
      title: "M.Sc. in Artificial Intelligence",
      institution: "Johannes Kepler University Linz",
      description:
        "Specialization in distributed systems and human-computer interaction. Thesis on incremental static site generation.",
    },
    {
      period: "2011 — 2016",
      title: "B.Sc. in Mechatronics Engineering",
      institution: "German University in Cairo",
      description:
        "Honours project on resilient UI component systems. Graduated with first-class honours.",
    },
  ] as Education[],

  /**
   * Side projects, open-source tools, or notable builds. Optional href turns
   * the title into a link.
   */
  projects: [
    {
      title: "monograph-terminal",
      href: "https://github.com/alshenoudy/monograph-terminal",
      description:
        "A text-first Astro theme for long-form writing, with MDX components, search, and a floating TOC.",
    },
    {
      title: "prompt-kit",
      description:
        "A minimal React hook collection for building terminal-like command palettes and inline prompts.",
    },
  ] as Project[],

  /**
   * Papers, articles, talks, or other published work. Optional venue/year.
   */
  publications: [
    {
      title: "Semi-supervised brain tumor segmentation using diffusion models",
      href: "https://doi.org/10.1007/978-3-031-34111-3_27",
      venue: "Artificial Intelligence Applications and Innovations (AIAI)",
      year: "2023",
    },
    {
      title: "Towards segmenting cerebral arteries from structural MRI",
      href: "https://doi.org/10.1007/978-3-031-66955-2_2",
      venue: "Medical Imaging Understanding and Analysis (MIUA)",
      year: "2024",
    },
    {
      title: "Leveraging synthetic data for whole-body segmentation in x-ray images",
      href: "https://doi.org/10.1007/978-3-031-98688-8_11",
      venue: "Medical Imaging Understanding and Analysis (MIUA)",
      year: "2025",
    },
  ] as Publication[],

  /**
   * Grouped skills. Each group renders as a row of non-clickable pills that
   * wrap automatically on narrow screens.
   */
  skills: [
    {
      group: "Languages",
      items: ["Arabic :: native", "English :: fluent", "German :: intermediate"],
    },
    {
      group: "Technical",
      items: ["Medical Imaging", "Computer Vision", "Machine Learning", "Deep Learning", "Data Pipelines", "Anomaly Detection", 
              "Semantic Segmentation", "Generative Models", "DICOM"],
    }
  ] as SkillGroup[],

  /**
   * Flat list of interests, rendered as a single group of chips.
   */
  interests: [
    "Software Engineering",
    "Product Development",
    "Medical Imaging",
    "Agentic AI",
    "Computer Vision",
    "System Design",
    "Large Language Models",
  ],

  /* --------------------------------------------------------- site metadata --- */

  /** Default page title and RSS feed name. */
  title: brand,
  description:
    "A text-first Astro theme for essays, notes, and long-form writing, with a command-palette search and a light/dark reading mode.",
  /** Canonical domain. Must be set before building for production. */
  siteUrl: "https://monograph.xocoweb.workers.dev",
  /** Fills the SEO and JSON-LD author fields. */
  authorName: "Ahmed Alshenoudy",
  language: "en",
  dateLocale: "en-US",
  locale: "en_US",
  socialImage: "/og-image.png",

  /* --------------------------------------------------------------- socials --- */

  /**
   * Social links rendered as contact pills in the hero and as icon buttons in
   * the footer. Labels with an `href` starting with `http` are treated as
   * external links.
   */
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ahmed-alshenoudy/" },
    { label: "GitHub", href: "https://github.com/alshenoudy" },
    { label: "Google Scholar", href: "https://scholar.google.com/citations?user=GisGMpkAAAAJ&hl" },
    { label: "RSS", href: "/rss.xml" },
  ] as Social[],

  /* ----------------------------------------------------------------- forms --- */

  /**
   * Both forms below ship enabled with an empty `action`, which makes them fully
   * interactive demos that submit nowhere: a small script confirms the submit
   * and clears the fields. Paste your provider's endpoint into `action` to send
   * real submissions, or set `enabled: false` to disable the controls outright.
   */
  newsletter: {
    enabled: false,
    action: "",
    method: "post",
    emailFieldName: "email",
    title: "Get new posts by email",
    description: "One email when something new goes up. No spam, unsubscribe anytime.",
  },
  contact: {
    enabled: true,
    action: "",
    method: "post",
    responseTime: "Replies usually go out within two business days.",
  },
};

/** Header navigation. Add or remove entries freely; the header renders them in order. */
export const navigation = [
  { label: "About", href: "/about/" },
  { label: "Archive", href: "/archive/" },
  { label: "Categories", href: "/categories/" },
];

/** Secondary navigation rendered in the footer. */
export const footerNavigation = [
  { label: "Contact", href: "/contact/" },
  { label: "RSS", href: "/rss.xml" },
];
