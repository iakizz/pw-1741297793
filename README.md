# Tailwind Framework

Un progetto basato su template per Tailwind CSS v3.3.1

### Live demo

Live demo navigabile disponibile qui:
https://iakizz.github.io/pw-1741297793/

### Repo

Repository del progetto disponibile qui:
https://github.com/iakizz/pw-1741297793/public/

### Struttura dei file di progetto

public/
├── assets/
│   ├── css/
│   │   ├── output.css
│   │   └── styles.css
│   ├── js/
│   │   ├── navbar.js
│   │   └── scripts.js
│   └── img/
│       ├── favicon.ico
│       └── logo.png
│       └── section-intro.avif
│       └── ...
├── index.html

src/
├── input.css
├── reset.css
└── typography.css

.gitignore
LICENSE
package-lock.json
package.json
README.md
tailwind.config.js

### Utilizzo

Da terminale, eseguire questi comandi
```
 cd '<Project Folder>'
```
```
 npm install
```
```
 npm run css
 [ esegue la build e avvia watch sulle modifiche ]
```
```
 npm run dev
 [ esegue la build e avvia watch con reload automatico del browser ]
```
```
 npm run build
 [ esegue la build ]
```

# pw-1741297793-dev