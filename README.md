# Siemens — Hiring Test

Application web front-end consommant l'API [restful-api.dev](https://api.restful-api.dev).

## Stack

- React 18 + Vite
- JavaScript / JSX
- CSS vanilla

## Structure

src/
├── components/
│ ├── addTask/
│ ├── header/
│ ├── progressBar/
│ ├── toDoList/
│ └── userCard/
├── pages/
│ └── homepage/

## Lancer le projet

```bash
npm install
npm run dev
```

L'application sera disponible sur `http://localhost:5173`.

## Choix techniques

-Architecture par composants : l'application est découpée en blocs logiques réutilisables (AddTask, ProgressBar). Le composant parent ToDoList orchestre l'ensemble.

-Lifting State Up (Remontée de l'état) : l'état des tâches (tasks) est centralisé dans le parent. Les composants enfants communiquent via des fonctions passées en props (comme onAdd).

-Calcul d'état dérivé : les statistiques de progression (6/10 tâches) ne sont pas stockées en base. Elles sont calculées dynamiquement à chaque rendu à partir du tableau de tâches, garantissant une source de vérité unique.

-Immuabilité des données : les mises à jour du tableau (ajout, suppression, toggle) utilisent systématiquement des méthodes non-mutables (map, filter, spread operator) pour respecter le cycle de vie de React.
