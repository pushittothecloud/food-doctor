import { useMemo, useState } from 'react'
import { RecipeCard } from './components/RecipeCard'
import { SymptomPicker } from './components/SymptomPicker'
import { symptoms, type SymptomId } from './data/catalog'
import {
  getIngredientRecommendations,
  getRecipeRecommendations,
} from './logic/recommendRecipes'
import './App.css'

function App() {
  const [selectedSymptoms, setSelectedSymptoms] = useState<SymptomId[]>([])

  const ingredientRecommendations = useMemo(
    () => getIngredientRecommendations(selectedSymptoms),
    [selectedSymptoms],
  )

  const recipeRecommendations = useMemo(
    () => getRecipeRecommendations(selectedSymptoms),
    [selectedSymptoms],
  )

  const toggleSymptom = (symptomId: SymptomId) => {
    setSelectedSymptoms((current) =>
      current.includes(symptomId)
        ? current.filter((id) => id !== symptomId)
        : [...current, symptomId],
    )
  }

  return (
    <main className="app-shell">
      <header className="hero">
        <p className="eyebrow">Doctor Chef Protocol</p>
        <h1>Clinical logic, kitchen-ready prescriptions.</h1>
        <p className="hero-copy">
          Log symptoms like a quick consult, then receive food prescriptions and
          remedy dishes designed for overlap across multiple needs.
        </p>
        <div className="hero-note">
          <span className="rx-tag">RX MODE</span>
          <p>Each suggested dish is scored by therapeutic ingredient coverage.</p>
        </div>
      </header>

      <SymptomPicker
        symptoms={symptoms}
        selectedSymptoms={selectedSymptoms}
        onToggleSymptom={toggleSymptom}
      />

      <section className="panel">
        <div className="panel-heading">
          <h2>Prescription ingredients</h2>
          <p>
            Ingredients are ranked by how many selected symptoms they can support.
          </p>
        </div>
        {ingredientRecommendations.length === 0 ? (
          <p className="empty-state">
            Select at least one symptom to see ingredient recommendations.
          </p>
        ) : (
          <ul className="ingredient-list">
            {ingredientRecommendations.map((item) => (
              <li key={item.ingredient} className="ingredient-item">
                <div>
                  <strong>{item.ingredient}</strong>
                  <p>{item.benefit}</p>
                </div>
                <span className="score-pill">{item.symptomHits} matches</span>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="panel">
        <div className="panel-heading">
          <h2>Remedy dish suggestions</h2>
          <p>Dishes are scored by ingredient overlap and symptom coverage.</p>
        </div>
        {recipeRecommendations.length === 0 ? (
          <p className="empty-state">
            Your tailored recipes will appear here after selecting symptoms.
          </p>
        ) : (
          <div className="recipe-grid">
            {recipeRecommendations.slice(0, 4).map((recommendation) => (
              <RecipeCard
                key={recommendation.recipe.id}
                recommendation={recommendation}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  )
}

export default App
