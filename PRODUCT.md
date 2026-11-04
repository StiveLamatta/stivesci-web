# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

People who open stivesci.com to decide whether Stive Lamatta is someone to contact, hire for an internship, or collaborate with, and people who want to try his Fourier visualizer. They arrive from search, GitHub, LinkedIn, or a direct link, often on a phone. [Inferred from the existing copy and the links the site already offers; the brief did not name a second audience.]

## Product Purpose

A personal site for Stive Lamatta, a university mathematics student who programs. It introduces him in Spanish, shows Epiciclos (his interactive discrete Fourier visualizer), lists the mathematics and tools he actually uses, lets visitors open his certificates, and gives a direct way to write or follow him. Success is a visitor who understands who he is, can open the app, and can reach him without hunting.

## Positioning

The site is his, not a studio template: the work that distinguishes it is Epiciclos, which turns a drawn path into rotating vectors via the discrete Fourier transform, with Catmull-Rom interpolation, a computed barycenter, and in-browser video export. He describes himself as a curious student, not a senior who already knows everything.

## Operating Context

Single long page in Spanish. Sections already in the page: about, Epiciclos, skills, certificates (lightbox), a note that a blog is still in development, and contact. The app lives at https://epy.stivesci.com. Contact is mailto:stive@stivesci.com, https://github.com/stivesci, and https://linkedin.com/in/stivelamatta.

## Capabilities and Constraints

- Keep the existing content, purpose, and working features: navigation, featured project, skills drawn from `src/data/skills.json`, certificate lightbox, contact links, mobile menu.
- Keep the stack and deploy setup: Astro, the current `src/data` JSON, public images, Ezoic scripts in the document head, and `public/ads.txt`.
- Language stays Spanish. Do not translate unless a string is clearly broken.
- Do not invent projects, testimonials, metrics, or a published blog. `src/data/recent.json` is placeholder copy and is not on the live page.
- The unused components `NavProfile`, `FeacturedApps`, `RecentArts`, and `Carousel` are not mounted. Do not surface placeholder articles.
- Accessibility bar for this pass: contrast, visible focus, semantic HTML, keyboard use of the menu and the certificate viewer, and a layout that works on a phone and a desktop.

## Brand Commitments

Name: Stive Lamatta. Wordmark already used on the site: StiveSci. Voice already on the page: direct, first person, honest about being a student. Portrait: `public/profile.jpg`. Existing mark: `public/logo.jpg` (a glowing wireframe S). The owner asked for the current look to stop reading as generic AI output. That request binds the redesign; it does not delete the name, the portrait, the links, or the Spanish copy.

## Evidence on Hand

- Portrait: `public/profile.jpg`
- Mark: `public/logo.jpg` and `public/favicon.svg` (default Astro mark)
- Epiciclos still: `public/images/proy/epy.gif` and `public/images/epy.png`
- Certificates: `public/images/certif/` and matching PDFs in `src/docs/`
- Skills and the one real project: `src/data/skills.json`, `src/data/proy.json`, `src/data/certif.json`
- No press, no client list, no published articles. Do not fabricate any.

## Product Principles

- Show the mathematics and the app before decoration.
- Say only what the page already claims.
- A visitor on a phone can reach the app, the certificates, and the email without a puzzle.
- The interface should feel chosen for this person, not interchangeable with a SaaS landing page.

## Accessibility & Inclusion

Keyboard access, visible focus, text contrast at WCAG AA, and a layout that still reads when text is enlarged. No product-specific disability requirement was stated beyond that.
