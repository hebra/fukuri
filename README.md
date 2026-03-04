# Fukuri — Compound Interest Calculator

A clean, modern, and accessible compound interest calculator that supports regular contributions and various compounding frequencies.

**Live Demo:** [https://fukuri.yogu.one](https://fukuri.yogu.one)

## Features

- **Interactive Calculator**: Real-time updates as you change inputs
- **Support for Contributions**: Add weekly, monthly, or annual contributions
- **Custom Compounding**: Choose between daily, weekly, monthly, quarterly, semi-annual, or annual compounding
- **Visualisation**: SVG-based growth chart showing the forecast over time
- **Responsive Design**: Mobile-first approach that works on all devices
- **Dark Mode**: Toggle between light and dark themes
- **Accessible**: Built with semantic HTML and follows WCAG standards
- **SEO Optimised**: Complete meta tags, Open Graph, and JSON-LD structured data

## Technologies Used

- **HTML5**: Semantic markup with proper ARIA attributes
- **CSS3**: Custom properties, Grid, and Flexbox (Vanilla CSS)
- **JavaScript**: ES6+ (Vanilla JS, no frameworks)

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Setup

Since this is a static website, no installation is required. Simply open `web/index.html` in your browser.

## Local Development

For local development, you can use the provided Deno script to serve the `web/` folder:

```bash
make serve
```

Alternatively, run the Deno script directly:

```bash
deno run --allow-net --allow-read serve.ts
```

Then visit [http://localhost:8000](http://localhost:8000) in your browser.

### Available Commands

- `make serve`: Start local development server
- `make fmt`: Format source files using Deno
- `make lint`: Lint source files using Deno
- `make check`: Run both format check and lint

## Project Structure

```
fukuri/
├── web/
│   ├── index.html          # Main HTML file
│   ├── css/
│   │   ├── variables.css   # CSS custom properties
│   │   └── styles.css      # Main stylesheet
│   ├── js/
│   │   ├── calculator.js   # Core calculation logic
│   │   └── theme.js        # Dark mode functionality
│   └── assets/
│       └── fukuri.png      # Logo and favicon
├── AGENTS.md               # Development guidelines
├── LICENSE                 # MIT License
├── Makefile                # Build commands
├── README.md               # This file
└── serve.ts                # Deno server script
```

## Calculator Inputs

- **Start Value**: Initial investment amount
- **Interest Rate**: Annual interest rate (0-25%)
- **Forecast Time Period**: Investment duration (1-50 years)
- **Additional Contribution**: Regular contribution amount
- **Contribution Frequency**: Weekly, Monthly, or Annually
- **Compounding Frequency**: Daily, Weekly, Monthly, Quarterly, Semi-Annually, or Annually

## Accessibility Features

- Semantic HTML5 elements (`<main>`, `<section>`, `<form>`, `<label>`)
- Proper form labels associated with inputs
- ARIA attributes for screen readers
- Keyboard navigation support
- Focus indicators
- Screen reader friendly
- Sufficient colour contrast (WCAG AA minimum)

## SEO Features

- Complete meta tags (description, viewport, charset)
- Open Graph tags for social sharing
- Twitter Card meta tags
- JSON-LD structured data for search engines
- Canonical URL
- Semantic heading hierarchy

## Calculation Formula

The calculator uses the compound interest formula with regular contributions:

```
A = P(1 + r/n)^(nt) + PMT * (((1 + r/n)^(nt) - 1) / (r/n))
```

Where:
- **A** = Future value of the investment
- **P** = Principal investment amount
- **r** = Annual interest rate (decimal)
- **n** = Number of compounding periods per year
- **t** = Time in years
- **PMT** = Regular contribution amount

## Licence

MIT

## Contributing

This project follows the guidelines in [`AGENTS.md`](AGENTS.md):
- No frameworks (React, Vue, etc.)
- No CSS frameworks (Tailwind, Bootstrap)
- No build tools
- British English spelling for all code and comments
