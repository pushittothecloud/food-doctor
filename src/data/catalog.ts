export type SymptomId =
  | 'fatigue'
  | 'bloating'
  | 'headache'
  | 'cold'
  | 'joint-pain'
  | 'high-stress'
  | 'poor-sleep'

export interface Symptom {
  id: SymptomId
  label: string
  description: string
}

export interface IngredientMatch {
  ingredient: string
  benefit: string
}

export interface Recipe {
  id: string
  name: string
  description: string
  time: string
  ingredients: string[]
  directions: string[]
  equipment: string[]
  chefTips: string[]
  servingNotes: string[]
}

export const ingredientEmojiMap: Record<string, string> = {
  almonds: '🌰',
  banana: '🍌',
  berries: '🫐',
  chamomile: '🌼',
  'chicken broth': '🍲',
  chickpeas: '🧆',
  cucumber: '🥒',
  'dark chocolate': '🍫',
  eggs: '🥚',
  fennel: '🌿',
  garlic: '🧄',
  ginger: '🫚',
  kiwi: '🥝',
  lemon: '🍋',
  lentils: '🫘',
  mint: '🌱',
  oats: '🌾',
  'olive oil': '🫒',
  'pumpkin seeds': '🎃',
  salmon: '🐟',
  spinach: '🥬',
  'tart cherry': '🍒',
  turmeric: '🟡',
  yogurt: '🥣',
}

export const withIngredientEmoji = (ingredient: string) => {
  const emoji = ingredientEmojiMap[ingredient] ?? '🥗'
  return `${emoji} ${ingredient}`
}

export const symptoms: Symptom[] = [
  {
    id: 'fatigue',
    label: 'Low energy / fatigue',
    description: 'Aim for iron-rich and B-vitamin supportive ingredients.',
  },
  {
    id: 'bloating',
    label: 'Bloating / indigestion',
    description: 'Favor digestion-friendly herbs and gentle fiber.',
  },
  {
    id: 'headache',
    label: 'Frequent headache',
    description: 'Hydrating and magnesium-rich ingredients may help.',
  },
  {
    id: 'cold',
    label: 'Cold symptoms',
    description: 'Warming and immune-supportive foods are prioritized.',
  },
  {
    id: 'joint-pain',
    label: 'Joint discomfort',
    description: 'Lean into anti-inflammatory ingredients.',
  },
  {
    id: 'high-stress',
    label: 'High stress',
    description: 'Choose calming, blood sugar-steadying recipes.',
  },
  {
    id: 'poor-sleep',
    label: 'Poor sleep',
    description: 'Magnesium and tryptophan-friendly ingredients can support rest.',
  },
]

export const getSymptomLabel = (symptomId: SymptomId) =>
  symptoms.find((symptom) => symptom.id === symptomId)?.label ?? symptomId

export const symptomIngredientMap: Record<SymptomId, IngredientMatch[]> = {
  fatigue: [
    { ingredient: 'spinach', benefit: 'iron + folate support' },
    { ingredient: 'lentils', benefit: 'plant protein + iron' },
    { ingredient: 'pumpkin seeds', benefit: 'magnesium + zinc' },
    { ingredient: 'eggs', benefit: 'B-vitamin support' },
  ],
  bloating: [
    { ingredient: 'ginger', benefit: 'digestive comfort' },
    { ingredient: 'fennel', benefit: 'gut-soothing compounds' },
    { ingredient: 'mint', benefit: 'post-meal comfort' },
    { ingredient: 'yogurt', benefit: 'probiotic support' },
  ],
  headache: [
    { ingredient: 'banana', benefit: 'potassium support' },
    { ingredient: 'spinach', benefit: 'magnesium support' },
    { ingredient: 'cucumber', benefit: 'hydration support' },
    { ingredient: 'oats', benefit: 'steady energy release' },
  ],
  cold: [
    { ingredient: 'garlic', benefit: 'immune-supportive compounds' },
    { ingredient: 'turmeric', benefit: 'warming anti-inflammatory support' },
    { ingredient: 'lemon', benefit: 'vitamin C support' },
    { ingredient: 'chicken broth', benefit: 'warm hydration + minerals' },
  ],
  'joint-pain': [
    { ingredient: 'salmon', benefit: 'omega-3 fatty acids' },
    { ingredient: 'turmeric', benefit: 'curcumin support' },
    { ingredient: 'olive oil', benefit: 'polyphenol-rich fat source' },
    { ingredient: 'berries', benefit: 'antioxidant support' },
  ],
  'high-stress': [
    { ingredient: 'dark chocolate', benefit: 'polyphenols + mood support' },
    { ingredient: 'oats', benefit: 'steady glucose support' },
    { ingredient: 'chickpeas', benefit: 'B6 + fiber support' },
    { ingredient: 'chamomile', benefit: 'calming ritual support' },
  ],
  'poor-sleep': [
    { ingredient: 'almonds', benefit: 'magnesium support' },
    { ingredient: 'kiwi', benefit: 'sleep-quality support' },
    { ingredient: 'oats', benefit: 'serotonin precursor support' },
    { ingredient: 'tart cherry', benefit: 'melatonin support' },
  ],
}

export const recipes: Recipe[] = [
  {
    id: 'golden-lentil-soup',
    name: 'Golden Lentil Recovery Soup',
    description: 'A warm anti-inflammatory soup with ginger, turmeric, and protein-rich lentils.',
    time: '30 min',
    ingredients: ['lentils', 'turmeric', 'ginger', 'spinach', 'garlic', 'olive oil', 'lemon'],
    directions: [
      'Saute garlic and ginger in olive oil for 2 minutes.',
      'Add lentils, turmeric, and water or broth. Simmer until lentils soften.',
      'Fold in spinach and finish with lemon juice before serving.',
    ],
    equipment: ['soup pot', 'wooden spoon', 'knife + board'],
    chefTips: [
      'Rinse lentils well to avoid cloudy broth.',
      'Bloom turmeric in oil for 20 seconds before adding liquid for deeper flavor.',
      'Finish with lemon off heat to keep brightness.',
    ],
    servingNotes: [
      'Serve with a pinch of salt if dehydration is a concern.',
      'Pair with warm tea when cold symptoms are present.',
    ],
  },
  {
    id: 'cool-cucumber-oat-bowl',
    name: 'Cool Cucumber Oat Bowl',
    description: 'A savory bowl for hydration and steady energy with probiotic yogurt.',
    time: '12 min',
    ingredients: ['oats', 'cucumber', 'yogurt', 'mint', 'pumpkin seeds', 'olive oil'],
    directions: [
      'Cook oats with water until soft and creamy.',
      'Top with yogurt, diced cucumber, mint, and pumpkin seeds.',
      'Drizzle olive oil and add salt and pepper to taste.',
    ],
    equipment: ['small pot', 'mixing bowl', 'knife'],
    chefTips: [
      'Let oats cool slightly before adding yogurt for better texture.',
      'Salt lightly, then re-taste after olive oil is added.',
      'Chill 10 minutes for a more refreshing bowl.',
    ],
    servingNotes: [
      'Great as a post-workout cool-down meal.',
      'Add extra cucumber for hydration-heavy days.',
    ],
  },
  {
    id: 'salmon-berry-spinach-plate',
    name: 'Salmon, Berry, and Spinach Plate',
    description: 'Omega-3 rich salmon paired with antioxidant berries and leafy greens.',
    time: '20 min',
    ingredients: ['salmon', 'spinach', 'berries', 'olive oil', 'lemon', 'almonds'],
    directions: [
      'Pan-sear salmon in olive oil until cooked through.',
      'Toss spinach with lemon and a little olive oil.',
      'Serve with berries and chopped almonds on top.',
    ],
    equipment: ['non-stick pan', 'tongs', 'mixing bowl'],
    chefTips: [
      'Pat salmon dry before searing for better crust.',
      'Cook salmon skin-side down first for most of the cooking time.',
      'Toast almonds briefly for more aroma.',
    ],
    servingNotes: [
      'Best served warm with room-temperature berries.',
      'A pinch of salt and lemon zest boosts flavor without heaviness.',
    ],
  },
  {
    id: 'stress-less-chickpea-skillet',
    name: 'Stress-Less Chickpea Skillet',
    description: 'A fast fiber-rich skillet with grounding flavors and steady carbs.',
    time: '18 min',
    ingredients: ['chickpeas', 'oats', 'garlic', 'spinach', 'olive oil', 'banana'],
    directions: [
      'Warm olive oil and garlic in a skillet.',
      'Stir in chickpeas and oats with a splash of water; cook until thick.',
      'Finish with spinach and serve with sliced banana on the side.',
    ],
    equipment: ['skillet', 'spatula', 'measuring cup'],
    chefTips: [
      'Mash a few chickpeas for a creamier texture.',
      'Add water gradually to control consistency.',
      'Fold spinach at the end to keep color vibrant.',
    ],
    servingNotes: [
      'Works well as lunch or early dinner.',
      'Add a squeeze of lemon if flavors feel flat.',
    ],
  },
  {
    id: 'sleepy-night-jar',
    name: 'Sleepy Night Oat Jar',
    description: 'An evening-friendly oat jar with kiwi, almonds, and tart cherry.',
    time: '8 min prep + chill',
    ingredients: ['oats', 'almonds', 'kiwi', 'tart cherry', 'yogurt', 'banana'],
    directions: [
      'Mix oats and yogurt in a jar and chill for at least 30 minutes.',
      'Top with kiwi, tart cherry, banana, and chopped almonds.',
      'Enjoy in the evening or as a calming breakfast.',
    ],
    equipment: ['lidded jar', 'spoon', 'small knife'],
    chefTips: [
      'Use rolled oats for best overnight texture.',
      'Stir once after 10 minutes to prevent clumping.',
      'Keep tart cherry on top to preserve color and bite.',
    ],
    servingNotes: [
      'Ideal 60 to 90 minutes before bedtime.',
      'Can be made ahead for two nights.',
    ],
  },
]
