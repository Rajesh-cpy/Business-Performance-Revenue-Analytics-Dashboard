# BizMetrics — Business Performance & Revenue Analytics

Responsive React SPA based on the supplied dashboard reference. It uses React Router for section URLs, Tailwind CSS with a small custom design layer, Recharts for charts, and local dummy data. No backend or environment variables are required.

## Architecture

```text
src/
├── App.jsx                    # Route declarations + error boundary
├── main.jsx                   # React entry point
├── style.css                  # Tailwind layers + dashboard design system
├── components/
│   ├── ErrorBoundary.jsx      # Safe fallback UI
│   ├── Panel.jsx              # Reusable analytics panel
│   └── SectionPage.jsx        # Searchable, exportable routed data pages
├── data/
│   └── demoData.js            # Sample rows and navigation metadata
└── pages/
    └── Dashboard.jsx          # Overview dashboard and chart interactions
```

## Run locally

Node.js 18.18+ or 20+ is recommended.

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Routes

- `/` — Overview dashboard
- `/leads` — Lead records
- `/quotations` — Quotation records
- `/deals` — Deals and revenue
- `/orders` — Orders and payments
- `/team` — Team activity
- `/reports` — Report list

Section pages support record search and CSV export. The overview includes date filters, chart panels, KPI drill-down modals, and report export. The demo data is illustrative and held in source files only.

## Deployment

Import the project into Vercel or Netlify. Build command: `npm run build`; output directory: `dist`. SPA rewrites are included for client-side routes. No secrets or environment variables are required.
