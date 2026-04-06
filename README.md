# Food Doctor

Food Doctor is a symptom-first meal suggestion app.

Users can:
- select one or more symptoms,
- get ingredient recommendations ranked by symptom overlap,
- view recipe suggestions scored by ingredient and symptom match.

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## How Matching Works

1. Symptom-to-ingredient mappings are defined in `src/data/catalog.ts`.
2. The recommendation engine in `src/logic/recommendRecipes.ts` calculates:
   - ingredient ranking by symptom hit count,
   - recipe score based on ingredient overlap and symptom coverage.
3. The UI renders top ranked recipes in `src/App.tsx`.

## Extend the App

- Add symptoms in `symptoms` and `SymptomId` in `src/data/catalog.ts`.
- Add ingredient mappings in `symptomIngredientMap` in `src/data/catalog.ts`.
- Add recipe entries to `recipes` in `src/data/catalog.ts`.

The algorithm updates automatically as long as ingredient names match between mappings and recipes.
