export const config = {
  appName: "LaunchKit",
  logoLocation: "/images/TransparentLogo.png",

  heroPage: {
    header: "Next.Js Boilerplate for Effortless Design and Development",
    subheader:
      "Supercharge your workflow and ship products at a much faster rate using our all-in-one boilerplate. No need to spend weeks designing and developing an app from scratch.",
    navbarItems: ["Features", "How it works", "Testimonials", "Pricing", "FAQ"],
    tertiaryCTA: "Launch your idea before anyone else.",
    buttonPrimaryCTA: "Start Building",
    buttonSecondaryCTA: "Learn more...",
  },
  featuresPage: {
    header: "What do you get?",
    subheader: [
      "Everything you need to validate any ideas you have within minutes.",
    ],

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
  howItWorksPage: {
    header: "It's simple, really",
    subheader: [
      "❌ Stop spending weeks, only to validate a failed idea",
      "✅ Get an idea, validate your idea within 1 day, iterate until you find success.",
    ],
    phaseHeaders: [
      "Initial Idea",
      "Market Research",
      "Design and Development",
      "Launch Date",
    ],
    mainPhaseSubHeader: "Weeks worth of work, already done for you.",
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
      "Using the LaunchKit boilerplate, you can launch a landing page for any idea as soon as you get them!",
    ],
    testimonials: [
      {
        type: "quote",
        imageSrc: "/images/TestimonialPicture.png",
        rating: 5,
        quote:
          "It literally gives you everything you need to build a landing page. The comments make it really easy to set everything up even if you've never worked with MongoDB or Stripe. Literally saved me a week or 2 of work. ",
        name: "Karim Mevlevi",
        userTwitter: "https://twitter.com/karim_mev",
      },
    ],
  },

  pricingPage: {
    header: "Secure your own template for success",
    subheader: ["Completely free and open-source"],
    primaryProduct: {
      discountedPrice: "",
      originalPrice: "",
    },
    // Add products as you need, just copy paste the "primaryProduct" above and rename: "secondary" etc

    pricingProductNames: {
      primary: "Get Free Access",
      primarySubtext: "Completely free and open-source",
    },
    pricingLineItems: [
      "Easily customisable with DaisyUI",
      "Complete stripe integration",
      "Database set-up using MongodB ",
      "Default 'User' and 'Lead' schema",
      "User Authentication (Next-Auth + Prisma)",
      "User tracking and analytics",
      "Full Responsiveness",
      "Mailing integration (Mailgun)",
      "Affiliate program (coming soon)",
      "Privacy Policy template",
      "Terms of Service template",
    ],
    // The following 2 are for the features available (see pricingLineItems above) in each of your products/services
    primaryFeaturesInclude: [
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
    secondaryFeaturesInclude: [],
    primaryPricingDealText: "",
    secondaryPricingDealText: "",
    primaryPricingCTA: "View repository",
    secondaryPricingCTA: "",
  },
  timelinePage: {
    header: "Our Roadmap",
    subheaderArray: [
      "Need something we're not currently working on? Contribute yourself: https://github.com/strmzi-git/nextjslaunchkit",
    ],
    timelineItems: [
      "Database set-up with default schema (User & Leads)",
      "User Authentication",
      "Stripe integrations",
      "Mailing integrations (mailgun)",
      "Google analytics and tracking",
    ],
    timelineComplete: [true, true, true, false, false],
  },
  faqPage: {
    subHeader: "Still got questions? Feel free to DM me",
    // Your tag on twitter, linkedIn, wherever you want to be contacted from (for example: @strmzi.ai)
    contactTag: "",
    // A link to your page
    linkToContact: "",
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
  emailSignUpForm: {
    header: "Get notified when we release new features",
    persuasiveText:
      "Say goodbye to spending weeks building a landing page. Instead, LaunchKit does it for you! Production ready next.js boilerplate with everything you need to get leads, sell your product/service and track analytics",
  },
  footerPage: {
    subtitle: "The Template for Effortless Design and Development",
  },
};
