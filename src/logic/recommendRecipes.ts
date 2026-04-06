import {
  recipes,
  symptomIngredientMap,
  type IngredientMatch,
  type Recipe,
  type SymptomId,
} from '../data/catalog'

export interface IngredientRecommendation extends IngredientMatch {
  symptomHits: number
  relatedSymptoms: SymptomId[]
}

export interface RecipeRecommendation {
  recipe: Recipe
  score: number
  matchedIngredients: string[]
  matchedSymptoms: SymptomId[]
}

export const getIngredientRecommendations = (
  selectedSymptoms: SymptomId[],
): IngredientRecommendation[] => {
  const ingredientScores = new Map<
    string,
    { symptomHits: number; relatedSymptoms: Set<SymptomId>; benefit: string }
  >()

  selectedSymptoms.forEach((symptomId) => {
    symptomIngredientMap[symptomId].forEach(({ ingredient, benefit }) => {
      const current = ingredientScores.get(ingredient)
      if (current) {
        current.symptomHits += 1
        current.relatedSymptoms.add(symptomId)
      } else {
        ingredientScores.set(ingredient, {
          symptomHits: 1,
          relatedSymptoms: new Set([symptomId]),
          benefit,
        })
      }
    })
  })

  return [...ingredientScores.entries()]
    .map(([ingredient, value]) => ({
      ingredient,
      benefit: value.benefit,
      symptomHits: value.symptomHits,
      relatedSymptoms: [...value.relatedSymptoms],
    }))
    .sort((a, b) => b.symptomHits - a.symptomHits || a.ingredient.localeCompare(b.ingredient))
}

export const getRecipeRecommendations = (
  selectedSymptoms: SymptomId[],
): RecipeRecommendation[] => {
  if (selectedSymptoms.length === 0) {
    return []
  }

  const ingredientList = getIngredientRecommendations(selectedSymptoms)
  const ingredientSet = new Set(ingredientList.map((item) => item.ingredient))

  return recipes
    .map((recipe) => {
      const matchedIngredients = recipe.ingredients.filter((ingredient) =>
        ingredientSet.has(ingredient),
      )

      const matchedSymptoms = selectedSymptoms.filter((symptomId) =>
        symptomIngredientMap[symptomId].some((item) =>
          recipe.ingredients.includes(item.ingredient),
        ),
      )

      const score = matchedIngredients.length * 3 + matchedSymptoms.length * 2

      return {
        recipe,
        score,
        matchedIngredients,
        matchedSymptoms,
      }
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
}
