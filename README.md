# Project: NextJsLaunchKit

The purpose of this repository is to establish a growing template for constructing feature-rich landing pages tailored towards SaaS apps. The am is to create a collaborative environment where developers can continuously contribute to an expanding library of UI components, functionalities, and versatile tech stack integrations. This project serves as a living framework, designed to simplify and expedite the development process. It offers a customizable foundation equipped with a suite of essential features like Stripe integration, email system setup, database schemas, authentication processes, affiliate programs, and comprehensive tracking and analytics tools. Additionally, it provides ready-to-use templates for legal documents such as terms of service and privacy policies. As a growing platform, it's geared to not only meet current digital demands but also to adapt and incorporate new features and technologies over time, ensuring users have a cutting-edge toolset for creating high-performing, adaptable landing pages.

## Tech stack

Version 1 will be using the following: Typescript, Next.js, Tailwindcss, MongoDB, Prisma and Next-Auth.

In order to cater towards a larger audience and simplify landing page development for as many people as possible, future versions are intended to be built upon different tech stacks.

## Features

We are working towards implementing the following features:

- [ ] Abundance of easily customisable UI components
- [ ] Mobile responsiveness
- [ ] Stripe integration + webhooks
- [ ] Database configuration and schema set-up
- [ ] Mailing integration
- [ ] Google analytics and user tracking
- [ ] User authentication (email + password and social auth)
- [ ] Search engine optimization
- [ ] Affiliate program
- [ ] Privacy Policy and Terms of Service templates
- [ ] Protected routes

As you can see it will include everything you need to run up a successful and professional landing page.

The best part?

You can do it within a few hours instead of having to implement every feature and integrate a bunch of services which could take you weeks.

## Prerequisites

There aren't any major prerequisites other than knowledge of the tech stack is generally recommended (see above).

However, if you are unfamiliar with, or new to the tech stack, _no worries_. There are comments within each component that explain how everything works.

## Installation and Setup

1. Clone the repo → `git clone https://github.com/strmzi-git/NextJsLaunchKit.git`
2. Navigate to the project directory → `cd [project-name]`
3. Install required dependencies → `npm install`
4. Start the development server → `npm run dev`

## Usage and customization

From styling to functionality, each component is easily customizable. All you need to do is have a look which props the component accepts and pass them in.

#### Component prop naming convention (subject additions and change)

- Styles → TailwindCSS classes for styling the parent container of the prop
- Functionality → On-click functionality for buttons (only)

## Component File Structure

- Reusable components are available under 'reusables'
  - Example: buttons, input fields and carousels
- Each section of the main page is divided into folders in which you will find the page.tsx file as well as section-specific components.
  - Example: FAQ → page.tsx, FaqQuestion.tsx

## Contributions are encouraged

From implementing entirely new features or integrating third-party services to clarifying a piece of documentation, you're more than welcome to contribute 😀. (That's kind of the point of this project)

We are open to the following contributions:

- Bug fixes
- New features
- Documentation updates
- UI/UX improvements
- Performance enhancements

### How to Contribute

1. **Fork the Repository:** Click the 'Fork' button at the top right of this page.
2. **Clone Your Fork:** `git clone https://github.com/strmzi-git/NextJsLaunchKit.git`
3. **Create a Branch:** `git checkout -b feature/[your-feature-name]`
4. **Make Changes:** Implement your changes and commit them: `git commit -m '[meaningful commit message]'`
5. **Push to Your Fork:** `git push origin feature/[your-feature-name]`
6. **Create a Pull Request:** Go back to your fork on GitHub and open a pull request.

### Guidelines

Please ensure your code is well-documented.
At the moment we have not set specific coding standards to follow just yet, however this is subject to change in the near future.

## Getting Help and Support

For bug reports and feature requests, please open an issue on GitHub.

For quick questions and updates, follow and reach out to me on Twitter: [@strmziai](https://twitter.com/strmziai).

For more in-depth discussions, add me on discord: @strmzi.

Formal documentation for immediate support does not yet exist however it will be worked on in the future.
