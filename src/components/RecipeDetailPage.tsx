import { withIngredientEmoji, type Recipe } from '../data/catalog'

interface RecipeDetailPageProps {
  recipe: Recipe | null
}

export function RecipeDetailPage({ recipe }: RecipeDetailPageProps) {
  if (!recipe) {
    return (
      <main className="recipe-page-shell">
        <section className="recipe-page-card">
          <p className="eyebrow">Doctor Chef Protocol</p>
          <h1>Recipe not found</h1>
          <p>This prescription could not be located.</p>
          <a className="rx-open-link" href={`${import.meta.env.BASE_URL}#/`}>
            Return to intake
          </a>
        </section>
      </main>
    )
  }

  return (
    <main className="recipe-page-shell">
      <article className="recipe-page-card">
        <p className="eyebrow">Rx Protocol</p>
        <h1>{recipe.name}</h1>
        <p className="recipe-description">{recipe.description}</p>
        <p className="recipe-time">Kitchen time: {recipe.time}</p>

        <section className="meta-row">
          <span className="meta-label">Prescribed ingredients</span>
          <ul className="detail-ingredient-list">
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{withIngredientEmoji(ingredient)}</li>
            ))}
          </ul>
        </section>

        <section className="meta-row">
          <span className="meta-label">Equipment</span>
          <ul className="detail-ingredient-list">
            {recipe.equipment.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </section>

        <section>
          <p className="meta-label">Preparation protocol</p>
          <ol className="directions">
            {recipe.directions.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section className="meta-row">
          <span className="meta-label">Chef tips</span>
          <ul className="detail-ingredient-list">
            {recipe.chefTips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </section>

        <section className="meta-row">
          <span className="meta-label">Serving notes</span>
          <ul className="detail-ingredient-list">
            {recipe.servingNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </section>

        <a className="rx-open-link" href={`${import.meta.env.BASE_URL}#/`}>
          Back to symptoms
        </a>
      </article>
    </main>
  )
}
