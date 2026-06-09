# Nyce Event – SPA Scaffolding

## Struttura del progetto

```
nyce-event/
├── index.html          ← SPA unica (tutte le sezioni)
├── css/
│   └── main.css        ← Tutti gli stili
├── js/
│   ├── router.js       ← Hash-router (navigazione tra sezioni)
│   └── main.js         ← Logica form, interazioni
└── assets/
    └── img/
        ├── logo.png              ← RICHIESTO
        ├── hero/
        ├── staff/
        ├── portfolio/
        ├── partners/
        ├── services/
        └── icons/
```

## Sezioni SPA

| ID sezione   | Colore nav label | Contenuto principale |
|--------------|-----------------|----------------------|
| `home`       | giallo          | Hero + ticker + testimonianze + ruoli + partners preview |
| `lavora`     | verde           | Info animatore + form Italia + sub-section Egitto + form Egitto |
| `chi-siamo`  | – (navigazione) | About + pilastri + staff |
| `servizi`    | rosa            | 4 servizi: Nyce Village, Animazione eventi, Magic Castle, Dr. Why |
| `partners`   | celeste         | 2 partner cards + testo + portfolio strutture (8 foto) |
| `contatti`   | blu             | Info sede + form contatti |

---

## ✅ LISTA ASSETS IMMAGINI DA FARSI MANDARE

### 🔴 Obbligatori (senza di questi il sito è rotto)

| File                              | Dove va                              | Note |
|-----------------------------------|--------------------------------------|------|
| `logo.png`                        | `assets/img/logo.png`                | Logo Nyce Event su sfondo trasparente, almeno 200px di larghezza |
| `hero/hero-group.jpg`             | Hero homepage                        | Foto di gruppo animatori (quella delle ragazze con le angurie che hai nel PDF, p.15) – almeno 1400×600px |

### 🟡 Importanti (visibili subito nelle sezioni principali)

| File                              | Dove va                              | Note |
|-----------------------------------|--------------------------------------|------|
| `services/nyce-village.jpg`       | Sezione Servizi – Nyce Village       | Foto animatori in spiaggia/piscina con ospiti (festa holi, schiuma, ecc.) |
| `services/animazione-eventi.jpg`  | Sezione Servizi – Animazione eventi  | Foto artista a LED/farfalla che hai nel PDF (p.10, sezione notturna) |
| `services/magic-castle.jpg`       | Sezione Servizi – Magic Castle       | Foto Babbo Natale realistico che hai nel PDF (p.10) |
| `services/drwhy-logo.png`         | Sezione Servizi – Dr. Why            | Logo Dr. Why (il clown colorato del PDF, p.10) – PNG trasparente |
| `partners/puerto-svago-logo.png`  | Sezione Partners + Home              | Logo Puerto Svago su sfondo scuro o trasparente |
| `partners/club-vacanze-italiane-logo.png` | Sezione Partners + Home   | Logo Club Vacanze Italiane |

### 🟢 Sezione Staff (4 persone)

| File                              | Dove va                              | Note |
|-----------------------------------|--------------------------------------|------|
| `staff/dario-villino.jpg`         | Card Dario Villino                   | Foto profilo quadrata, almeno 300×300px |
| `staff/gianmarco-albano.jpg`      | Card Gianmarco Albano                | Foto profilo quadrata, almeno 300×300px |
| `staff/staff-3.jpg`               | Terza card staff                     | Se c'è un terzo membro; altrimenti rimuovere la card da index.html |
| `staff/staff-4.jpg`               | Quarta card staff                    | Stessa cosa |

### 🟢 Portfolio strutture (sezione Partners)

8 foto delle strutture/villaggi con cui lavorate:

| File                              | Note |
|-----------------------------------|------|
| `portfolio/struttura-1.jpg` … `struttura-8.jpg` | Foto quadrate o paesaggistiche dei villaggi, formato almeno 400×400px |

### 🟢 Egitto – Hotel

| File                              | Dove va                              | Note |
|-----------------------------------|--------------------------------------|------|
| `portfolio/egitto-amphoras-blu.jpg`    | Card hotel Egitto               | Foto hotel Amphoras Blu (Sharm) |
| `portfolio/egitto-amphoras-beach.jpg`  | Card hotel Egitto               | Foto hotel Amphoras Beach |
| `portfolio/egitto-see-breze.jpg`       | Card hotel Egitto               | Foto hotel See Breze |
| `portfolio/egitto-gran-rotana.jpg`     | Card hotel Egitto               | Foto hotel Gran Rotana |

### 🟢 Icone social (footer)

File SVG o PNG 24×24px, idealmente monocromatiche (bianco o nero):

| File                        | Dove va |
|-----------------------------|---------|
| `icons/facebook.svg`        | Footer  |
| `icons/instagram.svg`       | Footer  |
| `icons/youtube.svg`         | Footer  |
| `icons/whatsapp.svg`        | Footer  |
| `icons/tiktok.svg`          | Footer  |

> **Tip:** puoi scaricarle gratis da [simpleicons.org](https://simpleicons.org) o [fontawesome.com](https://fontawesome.com).

---

## 🔧 Come avviare il progetto in locale

Basta aprire `index.html` nel browser. Nessun build step richiesto.

Per lo sviluppo si consiglia:
```bash
npx serve .
# oppure
python -m http.server 8080
```

## 🚀 Prossimi step consigliati

1. **Integrare i form** con un servizio reale: [Formspree](https://formspree.io), [EmailJS](https://emailjs.com), o un backend custom.
2. **Aggiungere upload CV** (il campo c'è già, va collegato a un endpoint multipart).
3. **Animazioni scroll** (Intersection Observer) per le card testimonial, staff e servizi.
4. **Lightbox** per il portfolio foto.
5. **SEO + meta OG** per la condivisione sui social.
