export const recipes = [
  {
    id: 1001,
    title: "Creamy Garlic Parmesan Chicken",
    image: "https://img.spoonacular.com/recipes/1001-636x393.jpg",
    imageSmall: "https://img.spoonacular.com/recipes/1001-312x231.jpg",
    readyInMinutes: 35,
    servings: 4,
    summary:
      "A rich and creamy garlic parmesan chicken dish cooked in a silky sauce. Perfect for weeknight dinners and pairs well with pasta or mashed potatoes.",
    cuisines: ["Italian"],
    dishTypes: ["main course", "dinner"],
    diets: ["gluten free"],
    vegetarian: false,
    vegan: false,
    glutenFree: true,
    dairyFree: false,
    veryHealthy: false,
    cheap: false,

    extendedIngredients: [
      {
        id: 11215,
        name: "garlic",
        amount: 4,
        unit: "cloves",
        original: "4 cloves garlic, minced",
        measures: {
          us: { amount: 4, unitShort: "cloves", unitLong: "cloves" },
          metric: { amount: 4, unitShort: "cloves", unitLong: "cloves" },
        },
      },
      {
        id: 1001,
        name: "butter",
        amount: 2,
        unit: "tbsp",
        original: "2 tbsp butter",
        measures: {
          us: { amount: 2, unitShort: "tbsp", unitLong: "tablespoons" },
          metric: { amount: 30, unitShort: "g", unitLong: "grams" },
        },
      },
      {
        id: 1033,
        name: "parmesan cheese",
        amount: 0.5,
        unit: "cup",
        original: "1/2 cup grated parmesan",
        measures: {
          us: { amount: 0.5, unitShort: "cup", unitLong: "cups" },
          metric: { amount: 50, unitShort: "g", unitLong: "grams" },
        },
      },
    ],

    analyzedInstructions: [
      {
        name: "",
        steps: [
          { number: 1, step: "Season chicken breasts with salt and pepper." },
          { number: 2, step: "Sear chicken in butter until golden brown." },
          {
            number: 3,
            step: "Add garlic and sauté for 1 minute until fragrant.",
          },
          {
            number: 4,
            step: "Pour in cream and parmesan, simmer until thickened.",
          },
        ],
      },
    ],

    nutrition: {
      nutrients: [
        {
          name: "Calories",
          amount: 520,
          unit: "kcal",
          percentOfDailyNeeds: 26,
        },
        { name: "Protein", amount: 38, unit: "g", percentOfDailyNeeds: 76 },
        { name: "Fat", amount: 32, unit: "g", percentOfDailyNeeds: 49 },
      ],
    },
  },

  {
    id: 1002,
    title: "Spicy Shrimp Tacos with Lime Slaw",
    image: "https://img.spoonacular.com/recipes/1002-636x393.jpg",
    imageSmall: "https://img.spoonacular.com/recipes/1002-312x231.jpg",
    readyInMinutes: 25,
    servings: 3,
    summary:
      "Fresh and zesty shrimp tacos topped with crunchy lime slaw. A quick and flavorful meal perfect for taco night.",
    cuisines: ["Mexican"],
    dishTypes: ["main course", "lunch"],
    diets: ["gluten free"],
    vegetarian: false,
    vegan: false,
    glutenFree: true,
    dairyFree: true,
    veryHealthy: true,
    cheap: false,

    extendedIngredients: [
      {
        id: 15270,
        name: "shrimp",
        amount: 1,
        unit: "lb",
        original: "1 lb shrimp, peeled and deveined",
        measures: {
          us: { amount: 1, unitShort: "lb", unitLong: "pounds" },
          metric: { amount: 450, unitShort: "g", unitLong: "grams" },
        },
      },
      {
        id: 9160,
        name: "lime juice",
        amount: 2,
        unit: "tbsp",
        original: "2 tbsp lime juice",
        measures: {
          us: { amount: 2, unitShort: "tbsp", unitLong: "tablespoons" },
          metric: { amount: 30, unitShort: "ml", unitLong: "milliliters" },
        },
      },
      {
        id: 1002014,
        name: "chili powder",
        amount: 1,
        unit: "tsp",
        original: "1 tsp chili powder",
        measures: {
          us: { amount: 1, unitShort: "tsp", unitLong: "teaspoons" },
          metric: { amount: 5, unitShort: "g", unitLong: "grams" },
        },
      },
    ],

    analyzedInstructions: [
      {
        name: "",
        steps: [
          { number: 1, step: "Season shrimp with chili powder and salt." },
          { number: 2, step: "Cook shrimp in a hot skillet for 2–3 minutes." },
          {
            number: 3,
            step: "Mix cabbage with lime juice to create slaw.",
          },
          {
            number: 4,
            step: "Assemble tacos with shrimp and slaw.",
          },
        ],
      },
    ],

    nutrition: {
      nutrients: [
        {
          name: "Calories",
          amount: 410,
          unit: "kcal",
          percentOfDailyNeeds: 20,
        },
        { name: "Protein", amount: 34, unit: "g", percentOfDailyNeeds: 68 },
        { name: "Fat", amount: 18, unit: "g", percentOfDailyNeeds: 28 },
      ],
    },
  },

  {
    id: 1003,
    title: "Vegetarian Pesto Pasta",
    image: "https://img.spoonacular.com/recipes/1003-636x393.jpg",
    imageSmall: "https://img.spoonacular.com/recipes/1003-312x231.jpg",
    readyInMinutes: 20,
    servings: 2,
    summary:
      "A bright and flavorful pasta tossed in homemade basil pesto. Simple, fresh, and perfect for a quick vegetarian meal.",
    cuisines: ["Italian"],
    dishTypes: ["main course", "lunch"],
    diets: ["vegetarian"],
    vegetarian: true,
    vegan: false,
    glutenFree: false,
    dairyFree: false,
    veryHealthy: false,
    cheap: true,

    extendedIngredients: [
      {
        id: 20420,
        name: "pasta",
        amount: 200,
        unit: "g",
        original: "200g pasta",
        measures: {
          us: { amount: 7, unitShort: "oz", unitLong: "ounces" },
          metric: { amount: 200, unitShort: "g", unitLong: "grams" },
        },
      },
      {
        id: 2044,
        name: "basil",
        amount: 1,
        unit: "cup",
        original: "1 cup fresh basil",
        measures: {
          us: { amount: 1, unitShort: "cup", unitLong: "cups" },
          metric: { amount: 30, unitShort: "g", unitLong: "grams" },
        },
      },
      {
        id: 1033,
        name: "parmesan cheese",
        amount: 0.25,
        unit: "cup",
        original: "1/4 cup grated parmesan",
        measures: {
          us: { amount: 0.25, unitShort: "cup", unitLong: "cups" },
          metric: { amount: 25, unitShort: "g", unitLong: "grams" },
        },
      },
    ],

    analyzedInstructions: [
      {
        name: "",
        steps: [
          { number: 1, step: "Cook pasta according to package instructions." },
          {
            number: 2,
            step: "Blend basil, parmesan, garlic, and olive oil to make pesto.",
          },
          { number: 3, step: "Toss pasta with pesto and serve." },
        ],
      },
    ],

    nutrition: {
      nutrients: [
        {
          name: "Calories",
          amount: 480,
          unit: "kcal",
          percentOfDailyNeeds: 24,
        },
        { name: "Protein", amount: 16, unit: "g", percentOfDailyNeeds: 32 },
        { name: "Fat", amount: 22, unit: "g", percentOfDailyNeeds: 34 },
      ],
    },
  },

  {
    id: 1004,
    title: "Beef Stir Fry with Vegetables",
    image: "https://img.spoonacular.com/recipes/1004-636x393.jpg",
    imageSmall: "https://img.spoonacular.com/recipes/1004-312x231.jpg",
    readyInMinutes: 30,
    servings: 3,
    summary:
      "A savory beef stir fry loaded with colorful vegetables and tossed in a flavorful soy‑ginger sauce.",
    cuisines: ["Asian"],
    dishTypes: ["main course", "dinner"],
    diets: [],
    vegetarian: false,
    vegan: false,
    glutenFree: false,
    dairyFree: true,
    veryHealthy: true,
    cheap: false,

    extendedIngredients: [
      {
        id: 23572,
        name: "beef sirloin",
        amount: 300,
        unit: "g",
        original: "300g sliced beef sirloin",
        measures: {
          us: { amount: 10.5, unitShort: "oz", unitLong: "ounces" },
          metric: { amount: 300, unitShort: "g", unitLong: "grams" },
        },
      },
      {
        id: 11216,
        name: "ginger",
        amount: 1,
        unit: "tbsp",
        original: "1 tbsp grated ginger",
        measures: {
          us: { amount: 1, unitShort: "tbsp", unitLong: "tablespoons" },
          metric: { amount: 15, unitShort: "g", unitLong: "grams" },
        },
      },
      {
        id: 11215,
        name: "garlic",
        amount: 3,
        unit: "cloves",
        original: "3 cloves garlic, minced",
        measures: {
          us: { amount: 3, unitShort: "cloves", unitLong: "cloves" },
          metric: { amount: 3, unitShort: "cloves", unitLong: "cloves" },
        },
      },
    ],

    analyzedInstructions: [
      {
        name: "",
        steps: [
          { number: 1, step: "Sear beef in a hot wok until browned." },
          {
            number: 2,
            step: "Add vegetables and stir fry for 3–4 minutes.",
          },
          {
            number: 3,
            step: "Pour in soy‑ginger sauce and cook until thickened.",
          },
        ],
      },
    ],

    nutrition: {
      nutrients: [
        {
          name: "Calories",
          amount: 540,
          unit: "kcal",
          percentOfDailyNeeds: 27,
        },
        { name: "Protein", amount: 42, unit: "g", percentOfDailyNeeds: 84 },
        { name: "Fat", amount: 28, unit: "g", percentOfDailyNeeds: 43 },
      ],
    },
  },
];
