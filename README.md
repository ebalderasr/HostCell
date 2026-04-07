<div align="center">

# Host Cell Lab Suite

### Browser-based tools for upstream bioprocess workflows

<br>

**[→ Open the suite](https://ebalderasr.github.io/HostCell/)**

<br>

[![Tools](https://img.shields.io/badge/Tools-9_tools_·_3_categories-5856D6?style=for-the-badge)]()
[![Stack](https://img.shields.io/badge/Stack-Vanilla_JS_·_HTML5_·_CSS3-4A90D9?style=for-the-badge)]()
[![Focus](https://img.shields.io/badge/Focus-CHO_·_Upstream_Bioprocessing-34C759?style=for-the-badge)]()
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](./LICENSE)

</div>

---

## What is Host Cell Lab Suite?

Host Cell Lab Suite is a collection of **browser-based tools** for biotechnologists working with mammalian, yeast, and bacterial cell culture systems. It covers the full range of bench-side needs — from quick daily calculations to complex data analysis and educational simulators.

Every tool in the suite runs entirely in the browser. No installation, no account, no internet connection required once loaded. Built to work in the biosafety cabinet, from a tablet, or on a shared lab computer.

The suite was born from necessity: the repetitive, high-stakes calculations of a PhD routine where a single arithmetic error can cost days of culture work. What started as local Python scripts evolved through AI-assisted live coding into a collection of reliable, offline-ready tools designed to eliminate human error and ensure reproducibility across labs worldwide.

---

## Why it matters

Every day, researchers perform the same calculations by hand or in fragile spreadsheets:

- How many cells do I need to seed for the next passage?
- What is my specific growth rate and doubling time this interval?
- How do I prepare this molar stock solution?
- Which clone has the highest productivity per cell?

One transcription error can invalidate an experiment — or go unnoticed and compromise downstream data. Host Cell Lab Suite encodes the correct formulas once, tests them in real workflows, and makes them available to any lab, anywhere, for free.

---

## The Suite

### Category 1 — Daily Lab Tools · PWAs

Fast, offline-ready PWAs for the calculations you do every day at the bench.

| Tool | What it does |
|------|-------------|
| [**CellSplit**](https://ebalderasr.github.io/CellSplit/) | Computes viable cell concentration, viability, and C₁V₁=C₂V₂ volumes for cell passaging from Neubauer counts |
| [**PulseGrowth**](https://ebalderasr.github.io/PulseGrowth/) | Calculates specific growth rate (μ), doubling time, IVCD, and specific consumption/production rates per interval |
| [**MolarPrep**](https://ebalderasr.github.io/MolarPrep/) | Solves mass, volume, and molar concentration for stock solution preparation and buffer recipes |
| [**DiluteIt**](https://ebalderasr.github.io/DiluteIt/) | Generates serial dilution schemes and solves C₁V₁ = C₂V₂ for standards, media, and reagent preparation |

### Category 2 — Advanced Tools · Data Analysis

For complex experimental datasets that go beyond a single calculation.

| Tool | What it does |
|------|-------------|
| [**Flowjo Sweetspot Web**](https://ebalderasr.github.io/flowjo-sweetspot-web/) | Identifies the optimal protein expression gate in flow cytometry data from candidate clones — interactive visualization |
| [**YSI Processor**](https://ebalderasr.github.io/ysi-processor/) | Processes YSI 2950 analyte exports (glucose, lactate, glutamine): QC review, replicate averaging, normalization, and export |
| [**Clonalyzer 2**](https://ebalderasr.github.io/Clonalyzer-2/) | Compares and ranks candidate CHO clones by productivity profile, growth efficiency, and biosynthetic rate |

### Category 3 — Education · Simulators

Interactive models for understanding bioprocess fundamentals.

| Tool | What it does |
|------|-------------|
| [**Kinetic Drive**](https://ebalderasr.github.io/Kinetic-Drive/) | Full kinetic analysis of mammalian cell culture data with step-by-step arithmetic, interactive Plotly charts, and a logistic growth simulator |
| [**BioReact Lite**](https://bioreact.streamlit.app/) | Chemostat simulator for Monod kinetics, reactor dynamics, local stability analysis, and phase-plane exploration |

---

## How it's built

All tools are fully static — no backend, no build step, no server required.

**Core**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

**Design system**

The landing page and About page use a custom [Material Design 3](https://m3.material.io/) component system — tokens, elevation, shape, and motion — implemented in vanilla CSS.

**Deployment**

Hosted on GitHub Pages. Each tool lives in its own repository and is linked from the suite. The `ysi-processor` tool is embedded directly in this repo.

---

## Project structure

```
HostCell/
├── index.html          ← suite landing page (tool catalog + hero)
├── about.html          ← creator profile page
├── style.css           ← MD3 design system (tokens, components, layout)
├── app.js              ← scroll behavior and nav logic
├── assets/
│   └── profile.jpg     ← profile photo
└── ysi-processor/      ← YSI Processor tool (embedded as subdirectory)
    ├── index.html
    ├── ysi_processor.py
    └── ysi_toolkit/
```

---

## Author

**Emiliano Balderas Ramírez**  
Bioengineer · Programmer · PhD Candidate in Biochemical Sciences  
Instituto de Biotecnología (IBt), UNAM

[![Portfolio](https://img.shields.io/badge/🌐_Portfolio-ebalderasr.github.io-007AFF?style=flat-square)](https://ebalderasr.github.io/ebalderasr/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-emilianobalderas-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/emilianobalderas/)
[![Email](https://img.shields.io/badge/Email-ebalderas%40live.com.mx-D14836?style=flat-square&logo=gmail&logoColor=white)](mailto:ebalderas@live.com.mx)

---

## Related repositories

Each tool in the suite has its own repository with full documentation:

[**CellSplit**](https://github.com/ebalderasr/CellSplit) · [**PulseGrowth**](https://github.com/ebalderasr/PulseGrowth) · [**MolarPrep**](https://github.com/ebalderasr/MolarPrep) · [**DiluteIt**](https://github.com/ebalderasr/DiluteIt) · [**Flowjo Sweetspot Web**](https://github.com/ebalderasr/flowjo-sweetspot-web) · [**Clonalyzer 2**](https://github.com/ebalderasr/Clonalyzer-2) · [**Kinetic Drive**](https://github.com/ebalderasr/Kinetic-Drive) · [**BioReact**](https://github.com/ebalderasr/BioReact)

---

## Acknowledgements

This work was supported by:

- **SECIHTI** — Secretaría de Ciencia, Humanidades, Tecnología e Innovación (doctoral fellowship)
- **PAPIIT IT201524** — Programa de Apoyo a Proyectos de Investigación e Innovación Tecnológica, UNAM
- **Instituto de Biotecnología, UNAM** — host institution and research infrastructure

---

<div align="center"><i>Host Cell Lab Suite — encode the formula once, trust it every time.</i></div>
