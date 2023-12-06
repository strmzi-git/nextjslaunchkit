export const config = {
  appName: "LaunchKit",
  logoLocation: "/images/TransparentLogo.png",

  heroPage: {
    navbarItems: ["Features", "How it works", "Testimonials", "Pricing", "FAQ"],
    tertiaryCTA: "Launch your idea before anyone else.",
    headerTexts: {
      primary: "Next.Js Boilerplate for Effortless Design and Development",
      secondary:
        "Supercharge your workflow and ship products at a much faster rate using our all-in-one boilerplate. No need to spend days designing and developing an app from scratch.",
    },
    headerButtonCTA: {
      primaryCTA: "Start Building",
      secondaryCTA: "Learn more...",
    },
  },
  featuresPage: {
    featuresPageHeader: {
      primary: "What do you get?",
      secondary: [
        "✅ Everything you need to validate any ideas you have within minutes.",
      ],
    },
    featureTitles: [
      "Search Engine Optimization",
      "Database integration",
      "Stripe integration",
      "User authentication",
      "Mailing integration",
      "Tracking and analytics",
    ],
    timeSaved: [
      "3 hours",
      "1 hour",
      "10 hours",
      "2 hours",
      "4 hours",
      "3 hours",
    ],
    featureSubtitles: [
      [
        "Ready-to-go meta tags, just plug in your keywords!",
        "Rank on google and become competitive",
      ],
      [
        "MongoDB for ultimate scalability",
        "Effortlessly make changes to your schema with Prisma",
      ],
      [
        "Seamlessly integrate stripe and collect payments",
        "Handle events with webhooks",
        "Ask users for their consent to send promotional content",
      ],
      [
        "Default Users and Leads schema",
        "Provide users with social sign-up opportunities",
        "Connected to Prisma and MongoDB",
      ],
      [
        "Create lasting relationships with your audience using mailgun",
        "Inform them of any updates or special offers!",
      ],
      [
        "Track and understand user behaviour using site analytics",
        "Optimize your site to maximize sign-ups",
      ],
    ],
  },
  infoPage: {
    title: "Build, validate  and iterate faster.",
    subtitle: "Learn by building",
    content1:
      "We offer an intuitively designed, full-stack template that will save you DAYS of design and development.",
    content2:
      "Stay ahead of your competition by launching the day you come up with an idea rather than being late. ",
    actionButton: "Launch Today!",
  },
  howItWorksPage: {
    header: "",
    subheader: [""],
    cardContents: [
      "Easily customisable component",
      "Complete stripe integration incl. webhooks",
      "Database set-up using MongodB ",
      "Protected Routes + Middleware",
      "Default 'User' and 'Lead' schema",
      "User Authentication (Next-Auth + Prisma)",
      "Search Engine Optimization",
      "User tracking and analytics",
      "Full Responsiveness",
      "Plently of customisable components",
      "Mailing integration (Mailgun)",
      "Affiliate program (coming soon)",
      "Privacy Policy template",
      "Terms and Conditions template",
    ],
  },
  testimonialsPage: {
    header: "Have a look at what users say",
    subheader: [
      "Using our production-ready template, you can launch a landing page for any idea as soon as you get them!",
    ],
    testimonials: [
      {
        type: "quote",
        imageSrc: "",
        rating: 5,
        quote:
          "“Buld.it has honestly been such a help. I'm new t full-stack development and building a back-end just completely overwhelmed me until I fond this template. It helps guide you and you learn about best practices as well as the overall structure of a project”",
        name: "Jonathan Birger",
      },
      {
        type: "quote",
        imageSrc: "",
        rating: 5,
        quote:
          "“I'm so happy I came across this template, i've literally 2x or 3x my workflow simply because I don't need to spend so long configuring third-party integrations. Lifesaver”",
        name: "Meryl Jones",
      },
      {
        type: "quote",
        imageSrc: "/images/TestimonialPicture.png",
        rating: 5,
        quote:
          "“I'm so happy I came across this template, i've literally 2x or 3x my workflow simply because I don't need to spend so long configuring third-party integrations. Lifesaver”",
        name: "Karim Mevlawi",
        userTwitter: "https://twitter.com/karim_mev",
      },
      {
        type: "quote",
        imageSrc: "",
        rating: 5,
        quote:
          "This template is so insanely helpful, i've been able to build 2 full-stack apps in the past week, usually it would take me 1 week for a single one. The template saves me so many headaches and reading documentation.",
        name: "Jennifer Patty",
      },
    ],
    testimonialProjects: [
      {
        type: "project",
        websiteUrl: "https://www.placeholderDomain.com",
        username: "Mark Tuckerberg",
        imageSrc: "",
        coverImage: "",
      },
      {
        type: "project",
        websiteUrl: "https://www.placeholderDomain.com",
        username: "Elon Tusk",
        imageSrc: "",
        coverImage: "",
      },
      {
        type: "project",
        websiteUrl: "https://www.placeholderDomain.com",
        username: "Elon Tusk",
        imageSrc: "",
        coverImage: "",
      },
      {
        type: "project",
        websiteUrl: "https://www.placeholderDomain.com",
        username: "Bill Tates",
        imageSrc: "",
        coverImage: "",
      },
      {
        type: "project",
        websiteUrl: "https://www.placeholderDomain.com",
        username: "Bill Tates",
        imageSrc: "",
        coverImage: "",
      },
    ],
  },

  quote: {
    quoteText: "", // You can have a quote here from one of your reviewers maybe
    quoteAuthor: "",
  },
  pricingPage: {
    primaryProduct: {
      discountedPrice: 25.99,
      originalPrice: 159.99,
    },
    seconaryProduct: {
      discountedPrice: 19.99,
      originalPrice: 129.99,
    },
    actionCall: "Secure your own template for success",
    secondaryAcionCall: [
      "👀  Take advantage of the the current price, it will never be this cheap again.",
    ],
    pricingProductNames: {
      primary: "Advanced Template",
      seconary: "Basic Template",
    },
    pricingLineItems: [
      "Easily customisable component",
      "Complete stripe integration incl. webhooks",
      "Database set-up using MongodB ",
      "Protected Routes + Middleware",
      "Default 'User' and 'Lead' schema",
      "User Authentication (Next-Auth + Prisma)",
      "Search Engine Optimization",
      "User tracking and analytics",
      "Full Responsiveness",
      "Plently of customisable components",
      "Mailing integration (Mailgun)",
      "Affiliate program (coming soon)",
      "Privacy Policy template",
      "Terms and Conditions template",
    ],
    primaryPricingItems: [
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
    ],
    secondaryPricingItems: [
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      false,
      false,
      false,
      false,
    ],
    primaryPricingDealText: "100% (Limited time only)",
    secondaryPricingDealText: "Pre-sale offer: 75% off (only 7 left) ",
    primaryPricingCTA: "Get LaunchKit (pre-order)",
    secondaryPricingCTA: "Get LaunchKit (pre-order)",
  },
  faqPage: {
    subHeader: "Still got questions? Feel free to DM me",
    contactTag: "@strmzi.ai",
    linkToContact: "https://twitter.com/strmziai",
    FaqQuestions: [
      "What tech stack does this template use?",
      "What if I don't know the technologies?",
      "How will this help me?",
      "How frequent will you provide updates?",
      "When will you launch the Advanced Template?",
      "Do you provide refunds?",
    ],
    FaqAnswers: [
      "We decided to use the following tech stack: Typescript, Next.js, Next-Auth, Prisma, MongoDB and TailwindCSS.",
      "Although there is one central config.ts file in which you replace our copy, with yours. We also encourage people to purchase the boilerplate if you're not familiar with the tech stack as we believe if will help you learn.",
      "Building a beautiful, performant and mobile responsive landing page with third-party integrations (stripe, mailgun, etc.) takes time. You don't want to waste days or weeks building a landing page for every idea you've got.",
      "We will do our best to keep providing updates and integrating whichever third-parties you require (feel free to recommend any), as well as regularly providing additional components for your use.",
      "The Advanced Template can already be pre-ordered (at 75% discount) and will arrive within 1-2 weeks on the basic tier launch. ",
      "Ofcourse! If you're unsatisfied with the boilerplate, we will give you a 100% refund if you request a refund with 14 days. DM me on Twitter @strmzi.ai for more details.",
    ],
  },
};
