"use client";

const DUMMY_RECIPES = [
  { id: 1, title: "Lemon Garlic Chicken", tags: ["chicken", "dinner"] },
  { id: 2, title: "Creamy Tomato Pasta", tags: ["pasta", "vegetarian"] },
  { id: 3, title: "Vegan Buddha Bowl", tags: ["vegan", "bowl"] },
  { id: 4, title: "Avocado Toast", tags: ["breakfast", "quick"] },
];

export default function RecipeList({ searchTerm, onAddToPlanner }) {
  const filtered = DUMMY_RECIPES.filter((recipe) => {
    if (!searchTerm) return true;
    const term = searchTerm.toLowerCase();
    return (
      recipe.title.toLowerCase().includes(term) ||
      recipe.tags.some((t) => t.toLowerCase().includes(term))
    );
  });

  return (
    <section>
      <h2 style={{ marginBottom: "0.75rem" }}>Recipes</h2>
      <div className="recipe-list">
        {filtered.length === 0 && <p>No recipes found. Try another keyword.</p>}
        {filtered.map((recipe) => (
          <article key={recipe.id} className="recipe-card">
            <div>
              <h3 className="recipe-card-title">{recipe.title}</h3>
              <p className="recipe-card-meta">Tags: {recipe.tags.join(", ")}</p>
            </div>
            <button
              className="recipe-card-button"
              onClick={() => onAddToPlanner(recipe)}
            >
              Add to Weekly Plan
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
