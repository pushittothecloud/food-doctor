export type SymptomId =
  | 'energy-fatigue'
  | 'cognitive-performance'
  | 'stress-mood'
  | 'sleep-recovery'
  | 'immune-illness'
  | 'inflammation-pain'
  | 'gut-health'

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
  chard: '🥬',
  chamomile: '🌼',
  'chicken broth': '🍲',
  chickpeas: '🧆',
  cucumber: '🥒',
  'dark chocolate': '🍫',
  'egg yolks': '🥚',
  eggs: '🥚',
  fennel: '🌿',
  garlic: '🧄',
  ginger: '🫚',
  kale: '🥬',
  kiwi: '🥝',
  lemon: '🍋',
  lentils: '🫘',
  liver: '🥩',
  mango: '🥭',
  mint: '🌱',
  oats: '🌾',
  'olive oil': '🫒',
  'pumpkin seeds': '🎃',
  'red bell peppers': '🫑',
  salmon: '🐟',
  sardines: '🐟',
  spinach: '🥬',
  'sunflower seeds': '🌻',
  'sweet potatoes': '🍠',
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
    id: 'energy-fatigue',
    label: 'Energy & fatigue',
    description: 'Focus on iron, B12, and steady-energy nutrients.',
  },
  {
    id: 'cognitive-performance',
    label: 'Cognitive performance',
    description: 'Prioritize choline, omega-3s, folate, and B-vitamin support.',
  },
  {
    id: 'stress-mood',
    label: 'Stress & mood',
    description: 'Steady blood sugar, magnesium, and calming nutrients are emphasized.',
  },
  {
    id: 'sleep-recovery',
    label: 'Sleep & recovery',
    description: 'Support sleep quality and tissue recovery with balanced nutrients.',
  },
  {
    id: 'immune-illness',
    label: 'Immune & illness',
    description: 'Vitamin C, carotenoids, hydration, and supportive minerals are prioritized.',
  },
  {
    id: 'inflammation-pain',
    label: 'Inflammation & pain',
    description: 'Emphasize anti-inflammatory fats and antioxidant-rich ingredients.',
  },
  {
    id: 'gut-health',
    label: 'Digestion & gut health',
    description: 'Blend gentle digestive support, motility support, and gut-soothing foods.',
  },
]

export const getSymptomLabel = (symptomId: SymptomId) =>
  symptoms.find((symptom) => symptom.id === symptomId)?.label ?? symptomId

export const symptomIngredientMap: Record<SymptomId, IngredientMatch[]> = {
  'energy-fatigue': [
    { ingredient: 'liver', benefit: 'high-impact B12 + iron support' },
    { ingredient: 'spinach', benefit: 'iron + folate support' },
    { ingredient: 'lentils', benefit: 'iron + fiber support' },
    { ingredient: 'egg yolks', benefit: 'B-vitamin and choline support' },
    { ingredient: 'pumpkin seeds', benefit: 'magnesium + zinc' },
    { ingredient: 'kale', benefit: 'micronutrient support' },
    { ingredient: 'sardines', benefit: 'B12 + omega-3 support' },
    { ingredient: 'sweet potatoes', benefit: 'steady fuel support' },
    { ingredient: 'mango', benefit: 'easy carb + recovery support' },
  ],
  'cognitive-performance': [
    { ingredient: 'egg yolks', benefit: 'choline + B-vitamin support' },
    { ingredient: 'sardines', benefit: 'omega-3 + B12 support' },
    { ingredient: 'liver', benefit: 'B12 density support' },
    { ingredient: 'kale', benefit: 'folate support' },
    { ingredient: 'oats', benefit: 'steady-energy support' },
  ],
  'stress-mood': [
    { ingredient: 'sunflower seeds', benefit: 'magnesium + vitamin E support' },
    { ingredient: 'dark chocolate', benefit: 'polyphenols + mood support' },
    { ingredient: 'oats', benefit: 'steady glucose support' },
    { ingredient: 'chickpeas', benefit: 'B6 + fiber support' },
    { ingredient: 'chamomile', benefit: 'calming ritual support' },
    { ingredient: 'sardines', benefit: 'omega-3 support' },
  ],
  'sleep-recovery': [
    { ingredient: 'kiwi', benefit: 'sleep-quality + motility support' },
    { ingredient: 'tart cherry', benefit: 'melatonin pathway support' },
    { ingredient: 'almonds', benefit: 'magnesium support' },
    { ingredient: 'oats', benefit: 'serotonin precursor support' },
    { ingredient: 'kale', benefit: 'recovery micronutrient support' },
    { ingredient: 'sweet potatoes', benefit: 'glycogen recovery support' },
    { ingredient: 'sunflower seeds', benefit: 'vitamin E support' },
  ],
  'immune-illness': [
    { ingredient: 'red bell peppers', benefit: 'very high vitamin C support' },
    { ingredient: 'kiwi', benefit: 'vitamin C + fiber support' },
    { ingredient: 'sweet potatoes', benefit: 'beta-carotene support' },
    { ingredient: 'mango', benefit: 'vitamins A + C support' },
    { ingredient: 'lemon', benefit: 'hydration + vitamin C support' },
    { ingredient: 'garlic', benefit: 'immune-supportive compounds' },
    { ingredient: 'chicken broth', benefit: 'warm hydration + minerals' },
  ],
  'inflammation-pain': [
    { ingredient: 'sardines', benefit: 'omega-3 anti-inflammatory support' },
    { ingredient: 'salmon', benefit: 'omega-3 fatty acids' },
    { ingredient: 'turmeric', benefit: 'curcumin support' },
    { ingredient: 'olive oil', benefit: 'polyphenol-rich fat source' },
    { ingredient: 'berries', benefit: 'antioxidant support' },
    { ingredient: 'kale', benefit: 'polyphenol-rich greens support' },
    { ingredient: 'ginger', benefit: 'warming anti-inflammatory support' },
  ],
  'gut-health': [
    { ingredient: 'ginger', benefit: 'digestive comfort' },
    { ingredient: 'fennel', benefit: 'gut-soothing compounds' },
    { ingredient: 'mint', benefit: 'post-meal comfort' },
    { ingredient: 'yogurt', benefit: 'probiotic support' },
    { ingredient: 'chard', benefit: 'magnesium-rich support' },
    { ingredient: 'kiwi', benefit: 'motility + fiber support' },
    { ingredient: 'oats', benefit: 'soluble fiber support' },
    { ingredient: 'banana', benefit: 'easy-to-digest energy support' },
    { ingredient: 'mango', benefit: 'easy calories + vitamins support' },
    { ingredient: 'cucumber', benefit: 'hydration support' },
  ],
}

export const recipes: Recipe[] = [
  {
    id: 'golden-lentil-soup',
    name: 'Golden Lentil Recovery Soup',
    description: 'A warm anti-inflammatory soup with ginger, turmeric, and nourishing lentils.',
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
  {
    id: 'pepper-sardine-focus-toast',
    name: 'Pepper Sardine Focus Toast',
    description: 'A quick savory plate using sardines and red bell peppers for brain and immune support.',
    time: '15 min',
    ingredients: ['sardines', 'red bell peppers', 'kale', 'olive oil', 'lemon'],
    directions: [
      'Saute sliced red bell peppers in olive oil until softened.',
      'Warm sardines gently in the same pan and add chopped kale for 1 minute.',
      'Finish with lemon and serve over toast or a grain bowl.',
    ],
    equipment: ['skillet', 'spatula', 'knife + board'],
    chefTips: [
      'Do not overcook sardines; warm just until heated through.',
      'Add kale at the end so it stays bright.',
      'Use lemon zest for extra freshness.',
    ],
    servingNotes: [
      'Good option when focus is low and appetite is moderate.',
      'Pair with water or tea for hydration support.',
    ],
  },
  {
    id: 'kiwi-mango-recovery-cup',
    name: 'Kiwi Mango Recovery Cup',
    description: 'A cool cup with kiwi, mango, and sunflower seeds for recovery and immune support.',
    time: '8 min',
    ingredients: ['kiwi', 'mango', 'yogurt', 'sunflower seeds', 'oats'],
    directions: [
      'Layer yogurt and oats in a bowl or glass.',
      'Top with diced kiwi and mango.',
      'Finish with sunflower seeds and serve chilled.',
    ],
    equipment: ['bowl or glass', 'spoon', 'knife'],
    chefTips: [
      'Use ripe mango for easier digestion and sweetness.',
      'Toast sunflower seeds for deeper flavor if time allows.',
      'Add a splash of water if texture is too thick.',
    ],
    servingNotes: [
      'Great when appetite is low but nutrition still matters.',
      'Can be prepared as a snack or light breakfast.',
    ],
  },
  {
    id: 'sweet-potato-chard-yolk-hash',
    name: 'Sweet Potato Chard Yolk Hash',
    description: 'A warm skillet with sweet potato, chard, and egg yolk for steady recovery support.',
    time: '22 min',
    ingredients: ['sweet potatoes', 'chard', 'egg yolks', 'garlic', 'olive oil'],
    directions: [
      'Cook diced sweet potatoes in olive oil until tender and lightly browned.',
      'Add garlic and chopped chard; cook until wilted.',
      'Stir in egg yolks off high heat until creamy and serve immediately.',
    ],
    equipment: ['skillet', 'spatula', 'knife + board'],
    chefTips: [
      'Cut sweet potatoes small for quicker cooking.',
      'Keep heat medium-low when adding yolks to avoid scrambling hard.',
      'Season in layers for better flavor balance.',
    ],
    servingNotes: [
      'Best served hot with lemon or mild chili flakes.',
      'Works well for low-energy mornings.',
    ],
  },
  {
    id: 'liver-greens-restore-skillet',
    name: 'Liver and Greens Restore Skillet',
    description: 'A nutrient-dense skillet with liver, kale, and peppers for weakness and fatigue support.',
    time: '20 min',
    ingredients: ['liver', 'kale', 'red bell peppers', 'olive oil', 'lemon'],
    directions: [
      'Sear sliced liver in olive oil briefly on each side.',
      'Add red bell peppers and cook until just tender.',
      'Fold in kale to wilt, then finish with lemon before serving.',
    ],
    equipment: ['heavy skillet', 'tongs', 'knife + board'],
    chefTips: [
      'Do not overcook liver; medium is usually best for texture.',
      'Pat liver dry before searing to improve browning.',
      'Slice peppers thin for faster cooking.',
    ],
    servingNotes: [
      'Portion in smaller servings for easier tolerance.',
      'Serve with a simple starch if you need more energy density.',
    ],
  },
]
