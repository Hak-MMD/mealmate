import { recipes } from "../data/recipes";

// In Phase 3, replace internals with real fetch calls to Spoonacular.
// Keep function signatures the same so you don't refactor components.

export async function searchRecipes(query, filters = {}) {
  const { cuisine, diet, sort } = filters;
  let result = [...recipes];

  if (query && query.trim()) {
    const q = query.toLowerCase();
    result = result.filter((r) => r.title.toLowerCase().includes(q));
  }

  if (cuisine) {
    result = result.filter((r) => r.cuisines?.includes(cuisine));
  }

  if (diet) {
    result = result.filter((r) =>
      r.diets?.map((d) => d.toLowerCase()).includes(diet.toLowerCase()),
    );
  }

  if (sort === "time-asc") {
    result.sort((a, b) => a.readyInMinutes - b.readyInMinutes);
  } else if (sort === "time-desc") {
    result.sort((a, b) => b.readyInMinutes - a.readyInMinutes);
  }

  return result;
}

export async function getRecipeById(id) {
  return recipes.find((r) => r.id === Number(id)) || null;
}

export async function getSimilarRecipes(id) {
  const recipe = recipes.find((r) => r.id === Number(id));
  if (!recipe) return [];
  const sameCuisine = recipe.cuisines?.[0];
  return recipes
    .filter(
      (r) =>
        r.id !== recipe.id &&
        (sameCuisine ? r.cuisines?.includes(sameCuisine) : true),
    )
    .slice(0, 2);
}
