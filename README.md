# mortenglad

A Nuxt 4 (Vue 3 + TypeScript) website scaffold that uses Contentful (GraphQL) as a CMS, GSAP for animations, and SCSS for styling.

This README covers how to get the project running locally, how GraphQL types are generated, how the Contentful proxy is implemented, and the main areas of the codebase to help you quickly contribute.

---

## Table of contents

- Quickstart
- Required environment variables
- Available scripts
- GraphQL & codegen
- How data fetching works (Contentful proxy + plugin)
- Project structure & important files
- Styling, images and fonts
- Tips & troubleshooting
- Contributing
- License

---

## Quickstart

Prerequisites:

- Node.js (recommended 20+)
- bun

1. Clone the repository and install dependencies

```bash
git clone https://github.com/LobergDesign/mortenglad.git
cd mortenglad
bun install
```

2. Create an environment file (example below) with your Contentful GraphQL endpoint and token.

3. Generate GraphQL types (see codegen section) before running dev if you want type-safe GraphQL usage.

4. Run development server

```bash
bun run dev
# open http://localhost:3000
```

Build for production:

```bash
bun run build
bun run preview   # preview the built server locally
```

Generate a static build:

```bash
bun run generate
```

Notes:

- The app uses TypeScript and the generated GraphQL types are stored in `app/generated/graphql.ts`.

---

## Required environment variables

The app keeps Contentful credentials server-side. Provide the following variables in a `.env` (or via your hosting/provider):

.example .env (do NOT commit your secrets)

```
GRAPHQL_ENDPOINT=https://graphql.contentful.com/content/v1/spaces/<SPACE_ID>
GRAPHQL_TOKEN=<YOUR_CONTENTFUL_ACCESS_TOKEN>
```

- GRAPHQL_ENDPOINT: The Contentful GraphQL endpoint.
- GRAPHQL_TOKEN: The Contentful access token (used only server-side via the server API).

Make sure these environment variables are available to your runtime (e.g., in your deployment platform or in your local shell).

---

## GraphQL & codegen

This project keeps GraphQL documents under `app/queries/*.graphql` and generates TypeScript types using GraphQL Code Generator.

Configuration:

- `codegen.ts` configures the codegen to read `process.env.GRAPHQL_ENDPOINT` and `process.env.GRAPHQL_TOKEN` (so make sure these are set).
- Generated output: `app/generated/graphql.ts`

Run codegen:

```bash
# Ensure .env provides GRAPHQL_ENDPOINT and GRAPHQL_TOKEN
bun run codegen
```

If codegen encounters authentication or network errors, verify your environment variables and endpoint accessibility.

---

## Styling, images and fonts

- SCSS:
  - Global styles and variables in `app/assets/scss/`. `nuxt.config.ts` includes `~/assets/scss/main.scss`.
  - Vite is configured to add SCSS variables and mixins automatically via `vite.css.preprocessorOptions.scss.additionalData`.

- Images:
  - `@nuxt/image` module is configured with Cloudinary baseURL in `nuxt.config.ts`:
    - `https://res.cloudinary.com/dzw0r5i7d/image/upload/`
  - Breakpoints for responsive images are defined in `nuxt.config.ts`.

- Fonts:
  - Uses `@nuxt/fonts` with Fontshare (Satoshi).

---

## Security & CSP

- Content Security Policy and other security headers are configured in `nuxt.config.ts` using `nuxt-security`.
- `img-src`, `font-src`, `style-src`, and `script-src` include allowances for cloudinary, Contentful assets and font providers. If you change assets/providers, update the CSP accordingly.
