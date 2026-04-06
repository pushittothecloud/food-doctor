import { useEffect, useMemo, useState } from 'react'
import { RecipeDetailPage } from './components/RecipeDetailPage'
import { RecipeCard } from './components/RecipeCard'
import { SymptomPicker } from './components/SymptomPicker'
import {
  getSymptomLabel,
  recipes,
  symptoms,
  type SymptomId,
  withIngredientEmoji,
} from './data/catalog'
import {
  getIngredientRecommendations,
  getRecipeRecommendations,
} from './logic/recommendRecipes'
import './App.css'

function App() {
  const [selectedSymptoms, setSelectedSymptoms] = useState<SymptomId[]>([])
  const [submittedSymptoms, setSubmittedSymptoms] = useState<SymptomId[]>([])
  const [isAnimating, setIsAnimating] = useState(false)
  const [hash, setHash] = useState(window.location.hash)

  const recipeRouteId = useMemo(() => {
    const prefix = '#/recipe/'
    if (!hash.startsWith(prefix)) {
      return null
    }

    return decodeURIComponent(hash.slice(prefix.length))
  }, [hash])

  const openedRecipe = useMemo(
    () => recipes.find((recipe) => recipe.id === recipeRouteId) ?? null,
    [recipeRouteId],
  )

  const ingredientRecommendations = useMemo(
    () => getIngredientRecommendations(submittedSymptoms),
    [submittedSymptoms],
  )

  const recipeRecommendations = useMemo(
    () => getRecipeRecommendations(submittedSymptoms),
    [submittedSymptoms],
  )

  const toggleSymptom = (symptomId: SymptomId) => {
    setSelectedSymptoms((current) =>
      current.includes(symptomId)
        ? current.filter((id) => id !== symptomId)
        : [...current, symptomId],
    )
  }

  const runPrescription = () => {
    if (selectedSymptoms.length === 0) {
      return
    }

    setSubmittedSymptoms(selectedSymptoms)
    setIsAnimating(true)
  }

  useEffect(() => {
    if (!isAnimating) {
      return
    }

    const timer = window.setTimeout(() => {
      setIsAnimating(false)
    }, 1350)

    return () => {
      window.clearTimeout(timer)
    }
  }, [isAnimating])

  useEffect(() => {
    const onHashChange = () => {
      setHash(window.location.hash)
    }

    window.addEventListener('hashchange', onHashChange)
    return () => {
      window.removeEventListener('hashchange', onHashChange)
    }
  }, [])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Enter' || event.shiftKey || event.ctrlKey || event.metaKey) {
        return
      }

      const target = event.target as HTMLElement | null
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT' ||
          target.isContentEditable)
      ) {
        return
      }

      event.preventDefault()
      runPrescription()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [selectedSymptoms])

  if (recipeRouteId) {
    return <RecipeDetailPage recipe={openedRecipe} />
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

      {isAnimating ? (
        <div className="doctor-chef-overlay" role="status" aria-live="polite">
          <div className="doctor-chef-stage">
            <div className="stage-orbit orbit-a" aria-hidden="true"></div>
            <div className="stage-orbit orbit-b" aria-hidden="true"></div>
            <div className="doctor-chef-avatar big-avatar" aria-hidden="true">
              <div className="avatar-half chef-half">🍳</div>
              <div className="avatar-half doctor-half">🩺</div>
              <div className="avatar-hat"></div>
            </div>
            <div className="doctor-chef-body" aria-hidden="true">
              <div className="emoji-body">🧑‍🍳🩺</div>
            </div>
            <div className="magic-pot" aria-hidden="true">
              <div className="pot-lid"></div>
              <div className="pot-body"></div>
              <span className="steam steam-1"></span>
              <span className="steam steam-2"></span>
              <span className="steam steam-3"></span>
            </div>
            <div className="flair-ingredients" aria-hidden="true">
              <span className="flair-chip chip-a"></span>
              <span className="flair-chip chip-b"></span>
              <span className="flair-chip chip-c"></span>
              <span className="flair-chip chip-d"></span>
            </div>
            <p className="anim-title">Doctor Chef is preparing your plan...</p>
            <p className="anim-subtitle">Calibrating ingredients and remedy dishes</p>
          </div>
        </div>
      ) : null}

      <form
        className="intake-form"
        onSubmit={(event) => {
          event.preventDefault()
          runPrescription()
        }}
      >
        <SymptomPicker
          symptoms={symptoms}
          selectedSymptoms={selectedSymptoms}
          onToggleSymptom={toggleSymptom}
        />
        <div className="submit-row">
          <button
            className="rx-submit"
            type="submit"
            disabled={selectedSymptoms.length === 0}
          >
            Prescribe dishes
          </button>
          <p className="submit-hint">Shortcut: press Enter after selecting symptoms</p>
        </div>
      </form>

      <section className="panel">
        <div className="panel-heading">
          <h2>Prescribed ingredients</h2>
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
                  <strong
                    title={`Supports:\n${item.relatedSymptoms
                      .map((symptomId) => getSymptomLabel(symptomId))
                      .join('\n')}`}
                  >
                    {withIngredientEmoji(item.ingredient)}
                  </strong>
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
                recipeUrl={`${import.meta.env.BASE_URL}#/recipe/${recommendation.recipe.id}`}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  )
}

export default App
