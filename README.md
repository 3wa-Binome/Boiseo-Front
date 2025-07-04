# Boiseo-Front

Boiseo-Front est une application web de gestion de produits et de matériaux, développée en React. Elle propose une interface utilisateur moderne avec authentification, tableau de bord, gestion des profils, produits, matériaux, et plus encore.

## Fonctionnalités principales

- **Authentification** : Connexion, inscription, déconnexion, routes privées.
- **Tableau de bord** : Vue d’ensemble personnalisée pour chaque utilisateur.
- **Navigation responsive** : Sidebar avec menu hamburger sur mobile, navbar fixe.
- **Gestion des produits** : Liste, détails, catégories, actions sur les produits.
- **Gestion des matériaux** : Consultation par nom de matériau.
- **Profil utilisateur** : Affichage et modification des informations personnelles.
- **Design moderne** : Utilisation de SCSS, responsive design, avatars personnalisés.

## Structure du projet
boiseo-front--/
├── public/
├── src/
│   ├── api/                # Appels API (utilisateur, produits, etc.)
│   ├── assets/             # Images et icônes
│   ├── components/
│   │   ├── atoms/          # Composants UI de base
│   │   ├── molecules/      # Composants composés
│   │   ├── organisms/      # Composants complexes (Navbar, Sidebar, etc.)
│   │   ├── pages/          # Pages principales (Dashboard, Login, etc.)
│   │   └── templates/      # Templates de pages
│   ├── data/               # Données statiques ou mocks
│   ├── store/              # State management (Zustand)
│   ├── styles/             # Fichiers SCSS
│   ├── App.jsx             # Composant racine
│   └── main.jsx            # Point d’entrée React
├── package.json
└── README.md

## Prérequis

- [Node.js](https://nodejs.org/) (v16 ou plus recommandé)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## Installation

1. **Cloner le dépôt :**
   ```bash
   git clone https://github.com/3wa-Binome/Boiseo-Front.git
   cd boiseo-front--

Installer les dépendances :
```bash
npm install
# ou
yarn install
```

2. **Lancer l’application :**
   ```bash
   npm start
   # ou
   yarn start
   ```

## Scripts utiles
- npm run dev : Lance le serveur de développement (Vite).
- npm run build : Génère la version de production.
- npm run preview : Prévisualise la build de production localement.

## Configuration
Les appels API sont définis dans src/api/.
Le state global (authentification, utilisateur) est géré avec Zustand.
Les styles sont en SCSS dans src/styles/.


## Personnalisation
Sidebar & Navbar : Responsive, menu hamburger sur mobile.
Thème : Modifiable dans les fichiers SCSS (_variables.scss).
Pages : Ajoute ou modifie les pages dans src/components/pages/.

## Dépendances principales
- React
- React Router
- Zustand
- Vite
- Sass (SCSS)
- react-nice-avatar

## Contribution
Fork le projet
Crée une branche (git checkout -b feature/ma-feature)
Commit tes modifications (git commit -am 'Ajout de ma feature')
Push la branche (git push origin feature/ma-feature)
Ouvre une Pull Request

## Auteurs
Projet réalisé par le binôme 3WA, Julien Loiseau et Bastien Raoult
<hr></hr> N’hésite pas à ouvrir une issue pour toute question ou suggestion !