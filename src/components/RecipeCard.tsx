import type { RecipeRecommendation } from '../logic/recommendRecipes'

interface RecipeCardProps {
  recommendation: RecipeRecommendation
}

export function RecipeCard({ recommendation }: RecipeCardProps) {
  const { recipe, matchedIngredients, matchedSymptoms, score } = recommendation
  const protocolCode = recipe.id.slice(0, 3).toUpperCase()

  return (
    <article className="recipe-card">
      <div className="recipe-top">
        <div>
          <p className="rx-line">Rx: {protocolCode}</p>
          <h3>{recipe.name}</h3>
        </div>
        <span className="score-pill">Clinical fit {score}</span>
      </div>
      <p className="recipe-description">{recipe.description}</p>
      <p className="recipe-time">Kitchen time: {recipe.time}</p>
      <div className="meta-row">
        <span className="meta-label">Prescribed ingredients</span>
        <div className="mini-chips">
          {matchedIngredients.map((ingredient) => (
            <span key={ingredient} className="mini-chip">
              {ingredient}
            </span>
          ))}
        </div>
      </div>
      <div className="meta-row">
        <span className="meta-label">Symptoms covered</span>
        <span className="symptom-count">{matchedSymptoms.length}</span>
      </div>
      <p className="meta-label">Preparation protocol</p>
      <ol className="directions">
        {recipe.directions.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </article>
  )
}
