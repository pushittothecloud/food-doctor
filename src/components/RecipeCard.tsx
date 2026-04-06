import type { RecipeRecommendation } from '../logic/recommendRecipes'

interface RecipeCardProps {
  recommendation: RecipeRecommendation
}

export function RecipeCard({ recommendation }: RecipeCardProps) {
  const { recipe, matchedIngredients, matchedSymptoms, score } = recommendation

  return (
    <article className="recipe-card">
      <div className="recipe-top">
        <h3>{recipe.name}</h3>
        <span className="score-pill">Match score {score}</span>
      </div>
      <p className="recipe-description">{recipe.description}</p>
      <p className="recipe-time">Time: {recipe.time}</p>
      <div className="meta-row">
        <span className="meta-label">Matched ingredients</span>
        <div className="mini-chips">
          {matchedIngredients.map((ingredient) => (
            <span key={ingredient} className="mini-chip">
              {ingredient}
            </span>
          ))}
        </div>
      </div>
      <div className="meta-row">
        <span className="meta-label">Covers symptoms</span>
        <span className="symptom-count">{matchedSymptoms.length}</span>
      </div>
      <ol className="directions">
        {recipe.directions.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </article>
  )
}
