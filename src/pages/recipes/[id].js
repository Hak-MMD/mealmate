import { useRouter } from "next/router";

export default function RecipeDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <section>
      <h1 className="page-title">Recipe Details</h1>
      <p className="page-subtitle">
        Detailed view for a single recipe. (Content is static for Phase 1.)
      </p>

      <div className="recipe-details-layout">
        <div className="recipe-details-image-placeholder">Image</div>

        <div className="recipe-details-main">
          <h2>Sample Recipe Title (ID: {id})</h2>
          <p className="recipe-card-meta">
            Cuisine: Italian · 450 kcal · 30 min
          </p>

          <div className="recipe-details-buttons">
            <button type="button" className="btn-primary">
              Add to Favorites
            </button>
            <button type="button" className="btn-secondary">
              Add to Meal Plan
            </button>
          </div>

          <section style={{ marginTop: "1.5rem" }}>
            <h3>Ingredients</h3>
            <ul className="details-list">
              <li>1 cup sample ingredient</li>
              <li>2 tbsp sample ingredient</li>
              <li>Salt and pepper to taste</li>
            </ul>
          </section>

          <section style={{ marginTop: "1.5rem" }}>
            <h3>Instructions</h3>
            <ol className="details-list">
              <li>Step one of the cooking process.</li>
              <li>Step two of the cooking process.</li>
              <li>Step three of the cooking process.</li>
            </ol>
          </section>

          <section style={{ marginTop: "1.5rem" }}>
            <h3>Nutrition</h3>
            <p>Calories: 450 · Protein: 25g · Carbs: 40g · Fat: 18g</p>
          </section>
        </div>
      </div>
    </section>
  );
}
