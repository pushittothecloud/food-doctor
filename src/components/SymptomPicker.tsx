import type { Symptom, SymptomId } from '../data/catalog'

interface SymptomPickerProps {
  symptoms: Symptom[]
  selectedSymptoms: SymptomId[]
  onToggleSymptom: (symptomId: SymptomId) => void
}

export function SymptomPicker({
  symptoms,
  selectedSymptoms,
  onToggleSymptom,
}: SymptomPickerProps) {
  return (
    <section className="panel">
      <div className="panel-heading">
        <h2>Select symptoms</h2>
        <p>Choose one or more symptoms to generate ingredient and recipe suggestions.</p>
      </div>
      <div className="chip-grid">
        {symptoms.map((symptom) => {
          const selected = selectedSymptoms.includes(symptom.id)
          return (
            <button
              key={symptom.id}
              className={`symptom-chip ${selected ? 'is-selected' : ''}`}
              type="button"
              onClick={() => onToggleSymptom(symptom.id)}
              aria-pressed={selected}
            >
              <span className="symptom-title">{symptom.label}</span>
              <span className="symptom-detail">{symptom.description}</span>
            </button>
          )
        })}
      </div>
    </section>
  )
}
