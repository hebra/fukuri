# Fukuri — Compound Interest Calculator

A clean, modern, and accessible compound interest calculator that supports regular contributions and various compounding frequencies.

**Live Demo:** [https://fukuri.yogu.one](https://fukuri.yogu.one)

## Features

- **Interactive Calculator**: Real-time updates as you change inputs.
- **Support for Contributions**: Add weekly, monthly, or annual contributions.
- **Custom Compounding**: Choose between daily, weekly, monthly, quarterly, semi-annual, or annual compounding.
- **Visualisation**: SVG-based growth chart showing the forecast over time.
- **Responsive Design**: Mobile-first approach that works on all devices.
- **Accessible**: Built with semantic HTML and follows WCAG standards.

## Technologies Used

- **HTML5**: Semantic markup.
- **CSS3**: Custom properties, Grid, and Flexbox (Vanilla CSS).
- **JavaScript**: ES6+ (Vanilla JS).

## Development Guidelines

This project follows strict guidelines defined in `AGENTS.md`:
- No frameworks (React, Vue, etc.).
- No CSS frameworks (Tailwind, Bootstrap).
- No build tools.
- British English spelling for all code and comments.

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

Other available commands:
- `make fmt`: Format source files using Deno.
- `make lint`: Lint source files using Deno.
- `make check`: Run both format check and lint.

## Licence

MIT
