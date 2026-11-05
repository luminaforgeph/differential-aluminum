# Differential Aluminum & Steel Co. Ltd

A responsive Next.js website for an aluminum and structural steel fabrication company based in Port Harcourt, Nigeria.

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS 4
- Framer Motion
- Zod validation
- Resend email API integration (optional until credentials are configured)

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Environment variables

Set these in your local environment and production hosting dashboard:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical production URL used by metadata and sitemap |
| `RESEND_API_KEY` | Resend API key for quote email delivery |
| `CONTACT_TO_EMAIL` | Verified company inbox receiving enquiries |
| `CONTACT_FROM_EMAIL` | Verified sender address/domain configured in Resend |

The quote form validates on the client and server. Until all three Resend variables are configured, the API intentionally returns a clear service-not-configured response and does not claim that an enquiry was delivered.

## Before public launch

1. Replace illustrative portfolio photography and labels with approved, verified company project records.
2. Confirm the company's legal name, address, phone number, email and preferred enquiry recipient.
3. Set `NEXT_PUBLIC_SITE_URL` to the real production domain.
4. Configure Resend and verify the sender domain.
5. Add a company-approved Open Graph image and favicon.
6. Run `npm run lint` and `npm run build`.

## Project structure

- `app/`: routes, metadata, API and global styles
- `components/`: reusable layout, page sections and interactive UI
- `lib/`: service/project content, site config and validation
- `types/`: shared TypeScript types
- `public/`: static assets

All portfolio images currently displayed are illustrative placeholders and must not be represented as completed Differential projects.
