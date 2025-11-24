# 🚰 Idraulico Nicotra – [idrauliconicotra.it](https://www.idrauliconicotra.it)


Ho sviluppato questo sito web per una ditta storica di Catania con oltre 50 anni di esperienza nel settore idraulico. L’obiettivo principale del progetto era creare una presenza online, moderna, chiara e facilmente navigabile, in grado di valorizzare la professionalità e l’affidabilità dell’azienda.

Il sito è stato interamente progettato e implementato da me, compresa la gestione del dominio acquistato su Aruba e la configurazione dell’hosting su Netlify. Durante lo sviluppo, ho posto particolare attenzione alle esigenze dell’azienda, realizzando un portale moderno, veloce e conforme alle normative vigenti (GDPR e Cookie Law), con cura per la SEO, l’usabilità e la qualità complessiva del codice, garantendo anche un’esperienza ottimale su qualsiasi tipologia di dispositivo grazie al design responsivo.

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=000000)

![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?logo=bootstrap&logoColor=white)
![Netlify](https://img.shields.io/badge/Hosting-Netlify-00C7B7?logo=netlify&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-9.36.0-4B32C3?logo=eslint&logoColor=white)
![Iubenda](https://img.shields.io/badge/Iubenda-GDPR-1E90FF?logo=iubenda&logoColor=white)
![Aruba](https://img.shields.io/badge/Aruba-Dominio-FFCC00?logo=aruba&logoColor=black)
![Google Analytics](https://img.shields.io/badge/Google%20Analytics-GA4-4285F4?logo=googleanalytics&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✍🏻 Descrizione del progetto:

Il sito è strutturato come una **Single Page Application**.

L’homepage introduce l’azienda, presentando i principali **servizi offerti**, la **storia** della ditta e i punti di forza che la contraddistinguono. Da qui l’utente può accedere rapidamente a tutte le sezioni del sito.

Ciascun servizio dispone di una pagina dedicata, con una breve **descrizione** e un carosello **fotografico** che mostra realizzazioni e interventi eseguiti dall’azienda. 📷

Il sito include anche sezioni informative come **“Chi Siamo”** e **“Perché Sceglierci”**, pensate per comunicare professionalità, esperienza e valori dell’azienda.

---

## ✨ Funzionalità principali
- Single Page Application sviluppata con **React 19**
- Navigazione gestita tramite **React Router DOM 6**
- Design completamente **responsive** grazie a Bootstrap 5
- **Google Tag Manager + Google Analytics 4** integrati 
- **Iubenda** per Privacy Policy, Cookie Policy e Cookie Banner
- Ottimizzazione SEO (meta tag, title dinamici, Open Graph)
- Fotogallery/carousel per ogni categoria di servizio
- Sezioni informative come *Chi Siamo* e *Perché Sceglierci*
- Integrazione **Google Maps** nella pagina Contatti
- Componenti riutilizzabili come *ServiceCard* e layout unificato

---

## 🌐 Hosting & Dominio

### Dominio personalizzato (Aruba)
Il dominio è stato acquistato, configurato e gestito manualmente tramite **Aruba**, con corretta configurazione DNS per puntare all’infrastruttura Netlify (record A + CNAME).

### Hosting (Netlify)
Il sito è distribuito tramite **Netlify**, con:
- Deploy automatici dalla branch principale  
- CDN globale ad alte prestazioni  
- Certificato SSL automatico  
- Redirect ottimizzati per Single Page Application  
- Rollback rapido e build preview

---


## 🛠️ Tecnologie utilizzate
- React 19  
- React Router DOM 6  
- Vite  
- Bootstrap 5  
- Font Awesome  
- ESLint 9  
- Netlify (hosting)  
- Aruba (dominio e DNS)

---

## 🔍 SEO & Analitica

### Google Tag Manager e Google Analytics 4
Il tracciamento è configurato tramite:
- Snippet GTM inserito in `<head>` e `<noscript>`
- Gestione degli eventi in ambiente SPA
- Compatibilità con Iubenda per il blocco preventivo cookie

### Iubenda
Utilizzato per:
- Privacy Policy
- Cookie Policy
- Cookie Banner conforme al GDPR
- Caricamento degli script in modalità asincrona

---

## 🌐 Routing

| Route | Descrizione |
|-------|-------------|
| `/` | Homepage |
| `/pageImpianti` | Impianti idraulici |
| `/pagina-Bagni` | Bagni |
| `/pagina-Box-doccia` | Box doccia |
| `/pagina-Autoclavi` | Autoclavi |
| `/pagina-Contatori` | Contatori |
| `/pagina-Ristrutturazioni` | Ristrutturazioni |
| `/pagina-Contatti` | Contatti |
| `*` | Pagina 404 |

---

