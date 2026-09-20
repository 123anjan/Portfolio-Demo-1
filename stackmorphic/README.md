# Stackmorphic

Stackmorphic is a modern full-stack web development studio website built with Next.js, TypeScript, Tailwind CSS and a premium dark design system.

## Features

- Responsive marketing website with dedicated routes for services, projects, process, about, FAQ, contact and tech stack
- Conversion-focused landing experience for businesses and startups
- Interactive technology explorer and JavaScript demo sections
- Contact API prepared for Resend integration
- Structured metadata, robots, sitemap and Vercel-ready configuration

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run start
```

## Environment variables

Create a local `.env.local` file using the example below:

```bash
cp .env.example .env.local
```

Required variables:

```bash
NEXT_PUBLIC_SITE_URL=https://www.stackmorphic.com
RESEND_API_KEY=
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
```

The contact API is ready for future Resend integration and will fail gracefully when credentials are not configured.

## Deployment

This project is set up for deployment on Vercel. The standard workflow is:

```bash
npm install
npm run build
```

## Notes

- No real client data or testimonials were included.
- Concept project references are clearly labeled as concept work.
- No secrets should be committed to the repository.
