# Arcotorre Scacchi Chieri - Sito Web

Sito web dell'A.S.D. Arcotorre Scacchi Chieri, realizzato con [Hugo](https://gohugo.io/).

## 🚀 Quick Start

### Prerequisiti

1. Installa Hugo: https://gohugo.io/installation/
   - Windows: `winget install Hugo.Hugo.Extended`
   - Mac: `brew install hugo`
   - Linux: `sudo apt install hugo` o `sudo snap install hugo`

### Sviluppo locale

```bash
# Clona il repository
git clone https://github.com/TUOUSERNAME/arcotorre-hugo.git
cd arcotorre-hugo

# Avvia il server di sviluppo
hugo server -D

# Apri http://localhost:1313 nel browser
```

### Build per produzione

```bash
hugo --minify
# I file generati saranno nella cartella /public
```

## 📁 Struttura del progetto

```
arcotorre-hugo/
├── hugo.toml              # Configurazione principale
├── content/               # Contenuti del sito (Markdown)
│   ├── _index.md          # Homepage
│   ├── articoli/          # News e articoli del blog
│   ├── circolo/           # Pagine istituzionali
│   ├── tornei/            # Tornei e risultati
│   ├── tecnica/           # Sezione didattica
│   ├── cis/               # Campionato Interno Sociale
│   ├── contatti/          # Contatti
│   └── links/             # Link utili
├── static/                # File statici (PDF, immagini)
│   ├── download/          # PDF didattici
│   └── images/            # Immagini
└── themes/                # Tema grafico
    └── arcotorre-theme/
```

## ✍️ Come aggiungere contenuti

### Nuovo articolo

Crea un file in `content/articoli/` con questo formato:

```markdown
---
title: "Titolo dell'articolo"
date: 2024-12-10
tags: ["tornei", "risultati"]
---

Testo dell'articolo in Markdown...
```

Nome file consigliato: `YYYY-MM-DD-titolo-breve.md`

### Nuova pagina

Crea un file `.md` nella sezione appropriata con:

```markdown
---
title: "Titolo pagina"
subtitle: "Sottotitolo opzionale"
---

Contenuto...
```

### Aggiungere PDF

1. Copia il PDF in `static/download/tecnica/[sezione]/`
2. Linka nel contenuto: `[Testo link](/download/tecnica/teoria/nomefile.pdf)`

## 🌐 Deploy su GitHub Pages

### Setup iniziale (una volta sola)

1. Crea repository su GitHub: `arcotorre-hugo`
2. Vai in Settings → Pages → Source: "GitHub Actions"
3. Crea il file `.github/workflows/hugo.yml` (vedi sotto)
4. Push del codice

### Workflow automatico

Crea `.github/workflows/hugo.yml`:

```yaml
name: Deploy Hugo site to Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

defaults:
  run:
    shell: bash

jobs:
  build:
    runs-on: ubuntu-latest
    env:
      HUGO_VERSION: 0.128.0
    steps:
      - name: Install Hugo CLI
        run: |
          wget -O ${{ runner.temp }}/hugo.deb https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-amd64.deb \
          && sudo dpkg -i ${{ runner.temp }}/hugo.deb
      - name: Checkout
        uses: actions/checkout@v4
        with:
          submodules: recursive
      - name: Setup Pages
        id: pages
        uses: actions/configure-pages@v4
      - name: Build with Hugo
        env:
          HUGO_ENVIRONMENT: production
        run: |
          hugo \
            --minify \
            --baseURL "${{ steps.pages.outputs.base_url }}/"
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./public

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Dominio personalizzato (opzionale)

1. Acquista dominio (es. `arcotorrescacchi.it`)
2. In GitHub Settings → Pages → Custom domain: inserisci il dominio
3. Configura DNS del dominio:
   - CNAME: `www` → `tuousername.github.io`
   - A records per apex domain (vedi docs GitHub)

## 🔗 Integrazione Vesus

Per linkare tornei su Vesus, usa questo formato nelle pagine:

```html
<div class="torneo-card">
    <h3 class="torneo-title">Nome Torneo</h3>
    <p class="torneo-date">📅 Data</p>
    <p class="torneo-description">Descrizione...</p>
    <a href="https://vesus.org/tournament/CODICE" target="_blank" class="vesus-link">
        🏆 Iscriviti su Vesus
    </a>
</div>
```

Per i risultati:
```markdown
[📊 Risultati su Vesus](https://vesus.org/results/nome-torneo)
```

## 📋 Migrazione contenuti

### PDF da sito esistente

1. Scarica i PDF da `arcotorre.altervista.org/download/`
2. Copiali in `static/download/` mantenendo la struttura
3. I link nei contenuti sono già configurati

### Immagini

1. Copia le immagini in `static/images/`
2. Usa nei contenuti: `![descrizione](/images/nomefile.jpg)`

## 🎨 Personalizzazione

### Colori e font

Modifica le variabili CSS in `themes/arcotorre-theme/static/css/style.css`:

```css
:root {
    --color-gold: #c9a227;      /* Colore accent */
    --color-black: #1a1a1a;     /* Sfondo header/footer */
    --color-cream: #f5f0e6;     /* Sfondo pagine */
    /* ... */
}
```

### Menu

Modifica `hugo.toml` sezione `[menu]`

### Logo/Favicon

- Sostituisci `static/images/logo.png`
- Modifica favicon in `themes/arcotorre-theme/layouts/_default/baseof.html`

## 📞 Supporto

Per problemi tecnici con il sito, contatta [Nome responsabile sito].

---

Made with ♟️ by Arcotorre Scacchi Chieri
