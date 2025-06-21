# New Site Task

Saulo Vallory is upgrading its business from a contractor to an LLC. Your task is to transform his current website,
which relates all his accomplishments, into a new website for the new brand: Toki Labs.

Everything in his site, will become Toki Labs. His achievements will be reported as Toki Labs achievements.
His previous companies, will become "Companies We've Worked With" for Toki Labs.
His testimonials will be reported as Toki Labs testimonials. So on and so forth.

Blow is your _initial_ task list. Use this document as a live tracker for your work.
Add missing tasks to it before you start working on them. Mark them as "DONE" when you complete them.

This project is a static site, with a single page: [index.html](../../index.html).
You must turn this site into a new site, with a new brand name: Toki Labs.

## Initial Task List

- [x] **DONE** - Read the contents of the site https://saulo.engineer/ and extract all the information into local files.
    - Created comprehensive content extraction in [saulo-content-extraction.md](saulo-content-extraction.md)
- [x] **DONE** - Read the Toki Labs company information from [index.html](../../old-site/index.html).
    - Analyzed current Toki Labs branding and messaging
- [x] **DONE** - Analyze the writing style of Saulo in the saulo.engineer site and create a style guide for the new site.
    - Created detailed style guide in [toki-labs-style-guide.md](toki-labs-style-guide.md)
- [x] **DONE** - Plan what sections and the section items the site will have (you can only create sections and define items if the content for them is available).
    - [x] **DONE** - We must at least have the sections About "Companies We've Worked With", Open-source Contributions, Contact, and Testimonials
    - [x] **DONE** - We would like, if possible, to create a Blog section with 3 to 5 articles with interesting takes for Senior developers or management that have some link to our history
    - Created comprehensive site structure plan in [site-structure-plan.md](site-structure-plan.md)
- [x] **DONE** - Based on the amount of information, pick which theme will work best for the site from the 2 Astro templates in [themes](../../design/themes).
    - **RECOMMENDATION: Mintaka Theme** - Perfect match for content volume and business focus

## Next Phase Tasks

- [x] Set up the Mintaka theme as the base for the new Toki Labs site
- [x] **DONE** - Customize the theme branding (colors, fonts, logo) for Toki Labs
    - Replaced logo with clean "Toki Labs" branding including geometric T icon and "Software Factory" tagline

## Critical Fixes Applied (January 2025)

- [x] **DONE** - Fixed hero text structure to make sense
    - Changed from "We don't just build" to "We partner with you to discover"
    - Rotating completions: "the right solution", "what you actually need", "better alternatives", "the optimal approach"
- [x] **DONE** - Added proper header for Companies section
    - Title: "Companies We've Worked With"
    - Subtitle: "Trusted partnerships with businesses of all sizes, from startups to enterprise"
- [x] **DONE** - Removed newsletter and social network references 
    - Removed newsletter signup from footer (we don't have one)
    - Replaced with partnership-focused call-to-action
    - Kept real social links (Twitter, LinkedIn, GitHub, Portfolio)
- [x] **DONE** - Updated all site meta information from template to Toki Labs branding
    - Updated `BaseHead.astro` with Toki Labs author and keywords
    - Updated `manifest.webmanifest` with proper PWA information
    - Updated all page SEO configurations (blog, work, tags, authors, contact, privacy, terms, 404, thank-you)
    - Replaced all "Majestico Studio", "Mintaka Studio" references with "Toki Labs"
    - Updated all URLs from template domains to `https://tokilabs.io`
    - Updated Twitter handles from template accounts to `@svallory`
    - Updated descriptions to reflect Toki Labs' software development focus
    - Disabled Comments component until proper GitHub repository is configured
    - Updated Terms component with appropriate Toki Labs content

- [ ] Adapt and implement content for each section:
    - [x] **DONE** - Hero/Landing section with Toki Labs messaging
        - Updated hero text to "WE DON'T JUST BUILD" with rotating alternatives
        - Added partnership-focused subtitle and CTA
        - Updated service titles and descriptions for our actual offerings
    - [x] **DONE** - Services section layout and visuals 
        - All 5 services updated with Toki Labs expertise content
        - Software Architecture & Migration, Complex System Design, Development Process Optimization, Team Building & Mentorship, Technical Leadership & Strategy
    - [x] **DONE** - Companies We've Worked With section
        - Replaced placeholder studios with real companies: Rocket Money, Crossover, Cleanify, Camiseteria
        - Added detailed case studies with challenges, approaches, and achievements
    - [x] **DONE** - Tagline section with core positioning
        - "We are a Software House that works differently" messaging displayed beautifully
    - [x] **DONE** - Meta information and SEO updates
        - Updated page title to "Toki Labs - Software House That Works Differently | 21+ Years of Excellence"
        - Updated meta descriptions and social sharing information
    - [x] **DONE** - Footer branding updates
        - Updated social media links to Saulo's actual profiles (Twitter, LinkedIn, GitHub, Portfolio)
        - Changed email from test@mintaka.co to hello@tokilabs.io
        - Updated copyright to "©2024 Toki Labs"
    - [x] **DONE** - FAQ section (kept developer-focused humor as it shows technical personality)
    - [x] **IN PROGRESS** - About section with company story and leadership
        - [x] **DONE** - Created About.astro component
        - [x] **DONE** - Added content for Story, Approach (Social Alchemist), and Innovations (Mentorship, UISL, CVA)
        - [x] **DONE** - Integrated into homepage after Hero section
    - [x] **IN PROGRESS** - How We Work section with consulting + execution approach and tree swing illustration
        - [x] **DONE** - Added translations for headlines, body, benefits, process, client story, and textual tree swing cartoon
        - [x] **DONE** - Created HowWeWork.astro component
        - [x] **DONE** - Integrated into homepage after About section
    - [x] **IN PROGRESS** - Testimonials section
        - [x] **DONE** - Added translations for 4 selected testimonials
        - [x] **DONE** - Created Testimonials.astro component
        - [x] **DONE** - Integrated into homepage after Testimonials section
    - [x] **IN PROGRESS** - Open Source & Community section
        - [x] **DONE** - Added translations for OS contributions, Mentorship, and Innovation Sharing
        - [x] **DONE** - Created OpenSourceCommunity.astro component
        - [x] **DONE** - Integrated into homepage after Testimonials section
- [ ] Create the 5 planned blog articles:
    - [x] **DONE** - "The Art of Complex System Migration"
        - [x] **DONE** - English version created (`src/content/posts/en/the-art-of-complex-system-migration.mdx`)
        - [x] **DONE** - Italian version created (`src/content/posts/it/l-arte-della-migrazione-di-sistemi-complessi.mdx`)
    - [x] **DONE** - "Building Teams Through Crisis: Lessons from a 40-Person Emergency Response"
        - [x] **DONE** - English version created (`src/content/posts/en/building-teams-through-crisis.mdx`)
        - [x] **DONE** - Italian version created (`src/content/posts/it/costruire-team-attraverso-la-crisi.mdx`)
    - [x] **DONE** - "Innovation in Development Workflows: From UISL to CVA"
        - [x] **DONE** - English version created (`src/content/posts/en/innovation-in-development-workflows.mdx`)
        - [x] **DONE** - Italian version created (`src/content/posts/it/innovazione-nei-flussi-di-sviluppo.mdx`)
    - [x] **DONE** - "The Social Alchemist Approach to Technical Leadership"
        - [x] **DONE** - English version created (`src/content/posts/en/the-social-alchemist-approach-to-technical-leadership.mdx`)
        - [x] **DONE** - Italian version created (`src/content/posts/it/l-approccio-dell-alchimista-sociale-alla-leadership-tecnica.mdx`)
    - [x] **DONE** - "Mentorship as a Business Strategy: How Teaching Others Transformed Our Company"
        - [x] **DONE** - English version created (`src/content/posts/en/mentorship-as-a-business-strategy.mdx`)
        - [x] **DONE** - Italian version created (`src/content/posts/it/mentorship-as-a-business-strategy.mdx`)
- [x] **DONE** - Set up contact forms and partnership inquiry system
    - [x] **DONE** - Created Cloudflare Pages Function for Mailchannels (`functions/contact.ts`)
    - [x] **DONE** - Updated `Contact.astro` to POST to the new function
    - [x] **DONE** - Created English and Italian thank-you pages
    - [x] **DONE** - Updated translations in `src/i18n/ui.ts`
- [ ] Test and optimize the site for performance and SEO
- [ ] Deploy the site to replace the current placeholder
