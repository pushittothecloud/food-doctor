export type SymptomId =
  | 'fatigue'
  | 'bloating'
  | 'headache'
  | 'cold'
  | 'joint-pain'
  | 'high-stress'
  | 'poor-sleep'
  | 'brain-fog'
  | 'pms-symptoms'
  | 'immune-support'
  | 'recovery-support'
  | 'inflammation'
  | 'constipation'
  | 'low-focus'
  | 'low-mood'
  | 'low-appetite'
  | 'weakness'

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
  {
    id: 'brain-fog',
    label: 'Brain fog',
    description: 'Nutrient-dense foods and choline-focused options are prioritized.',
  },
  {
    id: 'pms-symptoms',
    label: 'PMS symptoms',
    description: 'Magnesium and micronutrient-rich foods are emphasized.',
  },
  {
    id: 'immune-support',
    label: 'Immune support',
    description: 'Vitamin C and carotenoid-rich ingredients are ranked higher.',
  },
  {
    id: 'recovery-support',
    label: 'General recovery',
    description: 'Broad micronutrient and steady-energy foods are prioritized.',
  },
  {
    id: 'inflammation',
    label: 'Inflammation',
    description: 'Anti-inflammatory fats and antioxidant foods are highlighted.',
  },
  {
    id: 'constipation',
    label: 'Constipation',
    description: 'Fiber-forward and motility-supportive choices are surfaced.',
  },
  {
    id: 'low-focus',
    label: 'Low focus',
    description: 'Steady-energy and choline-rich ingredients are prioritized.',
  },
  {
    id: 'low-mood',
    label: 'Low mood',
    description: 'Omega-3 and magnesium-containing ingredients are emphasized.',
  },
  {
    id: 'low-appetite',
    label: 'Low appetite',
    description: 'Easy-to-eat nutrient-dense options are suggested.',
  },
  {
    id: 'weakness',
    label: 'Weakness / low energy',
    description: 'Iron and B-vitamin-supportive foods are surfaced first.',
  },
]

export const getSymptomLabel = (symptomId: SymptomId) =>
  symptoms.find((symptom) => symptom.id === symptomId)?.label ?? symptomId

export const symptomIngredientMap: Record<SymptomId, IngredientMatch[]> = {
  fatigue: [
    { ingredient: 'spinach', benefit: 'iron + folate support' },
    { ingredient: 'lentils', benefit: 'iron + fiber support' },
    { ingredient: 'pumpkin seeds', benefit: 'magnesium + zinc' },
    { ingredient: 'eggs', benefit: 'B-vitamin support' },
    { ingredient: 'kale', benefit: 'micronutrient support' },
    { ingredient: 'sardines', benefit: 'B12 + omega-3 support' },
    { ingredient: 'sweet potatoes', benefit: 'steady fuel support' },
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
    { ingredient: 'red bell peppers', benefit: 'vitamin C-rich support' },
    { ingredient: 'mango', benefit: 'vitamins A + C support' },
  ],
  'joint-pain': [
    { ingredient: 'salmon', benefit: 'omega-3 fatty acids' },
    { ingredient: 'turmeric', benefit: 'curcumin support' },
    { ingredient: 'olive oil', benefit: 'polyphenol-rich fat source' },
    { ingredient: 'berries', benefit: 'antioxidant support' },
    { ingredient: 'sardines', benefit: 'omega-3 + vitamin D support' },
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
  'brain-fog': [
    { ingredient: 'egg yolks', benefit: 'choline + B-vitamin support' },
    { ingredient: 'liver', benefit: 'B12 + iron density support' },
    { ingredient: 'kale', benefit: 'folate support' },
    { ingredient: 'sardines', benefit: 'omega-3 + B12 support' },
  ],
  'pms-symptoms': [
    { ingredient: 'kale', benefit: 'magnesium + folate support' },
    { ingredient: 'chard', benefit: 'magnesium-rich support' },
    { ingredient: 'sunflower seeds', benefit: 'vitamin E + magnesium support' },
    { ingredient: 'kiwi', benefit: 'fiber + vitamin C support' },
  ],
  'immune-support': [
    { ingredient: 'red bell peppers', benefit: 'high vitamin C support' },
    { ingredient: 'kiwi', benefit: 'vitamin C + fiber support' },
    { ingredient: 'sweet potatoes', benefit: 'beta-carotene support' },
    { ingredient: 'mango', benefit: 'vitamins A + C support' },
  ],
  'recovery-support': [
    { ingredient: 'kale', benefit: 'broad micronutrient support' },
    { ingredient: 'chard', benefit: 'magnesium + potassium support' },
    { ingredient: 'sunflower seeds', benefit: 'vitamin E support' },
    { ingredient: 'sweet potatoes', benefit: 'steady carb support' },
    { ingredient: 'sardines', benefit: 'omega-3 + B12 support' },
  ],
  inflammation: [
    { ingredient: 'sardines', benefit: 'omega-3 anti-inflammatory support' },
    { ingredient: 'olive oil', benefit: 'polyphenol support' },
    { ingredient: 'berries', benefit: 'antioxidant support' },
    { ingredient: 'kale', benefit: 'polyphenol-rich greens support' },
  ],
  constipation: [
    { ingredient: 'kiwi', benefit: 'motility + fiber support' },
    { ingredient: 'oats', benefit: 'soluble fiber support' },
    { ingredient: 'chard', benefit: 'fiber + magnesium support' },
    { ingredient: 'yogurt', benefit: 'gut flora support' },
  ],
  'low-focus': [
    { ingredient: 'egg yolks', benefit: 'choline support' },
    { ingredient: 'sardines', benefit: 'omega-3 + B12 support' },
    { ingredient: 'oats', benefit: 'steady-energy support' },
    { ingredient: 'kale', benefit: 'folate support' },
  ],
  'low-mood': [
    { ingredient: 'sardines', benefit: 'omega-3 support' },
    { ingredient: 'dark chocolate', benefit: 'polyphenol support' },
    { ingredient: 'sunflower seeds', benefit: 'magnesium + vitamin E support' },
    { ingredient: 'oats', benefit: 'steady-energy support' },
  ],
  'low-appetite': [
    { ingredient: 'mango', benefit: 'easy calories + vitamins support' },
    { ingredient: 'sweet potatoes', benefit: 'gentle carb support' },
    { ingredient: 'banana', benefit: 'easy-to-digest energy support' },
    { ingredient: 'yogurt', benefit: 'light protein + probiotic support' },
  ],
  weakness: [
    { ingredient: 'liver', benefit: 'iron + B12 density support' },
    { ingredient: 'egg yolks', benefit: 'B-vitamin support' },
    { ingredient: 'lentils', benefit: 'iron + fiber support' },
    { ingredient: 'sweet potatoes', benefit: 'steady-energy support' },
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
