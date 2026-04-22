// src/pages/recipes/[id].js
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { getRecipeById, getSimilarRecipes } from "../../lib/spoonacular";
import RecipeCard from "../../components/RecipeCard";
import styles from "../../styles/RecipeDetails.module.css";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function RecipeDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const numericId = Number(id);

  const {
    isFavorite,
    addToFavorites,
    removeFromFavorites,
    assignRecipeToDay,
    showToast,
  } = useAppContext();

  const [recipe, setRecipe] = useState(null);
  const [similarRecipes, setSimilarRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [similarLoading, setSimilarLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedDay, setSelectedDay] = useState("Mon");

  useEffect(() => {
    if (!numericId) return;
    const load = async () => {
      try {
        setLoading(true);
        setError("");
        const data = await getRecipeById(numericId);
        setRecipe(data);
      } catch (err) {
        setError("Failed to load recipe.");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [numericId]);

  useEffect(() => {
    if (!numericId) return;
    const loadSimilar = async () => {
      try {
        setSimilarLoading(true);
        const data = await getSimilarRecipes(numericId);
        setSimilarRecipes(data.slice(0, 4));
      } finally {
        setSimilarLoading(false);
      }
    };
    loadSimilar();
  }, [numericId]);

  if (loading) return <p>Loading recipe...</p>;
  if (error || !recipe) return <p>{error || "Recipe not found."}</p>;

  const favorite = isFavorite(recipe.id);
  const calories =
    recipe.nutrition?.nutrients?.find((n) => n.name === "Calories")?.amount ??
    null;

  return (
    <>
      <section className={styles.layout}>
        <div className={styles.imageColumn}>
          <img
            src={recipe.image}
            alt={recipe.title}
            className={styles.mainImage}
          />
        </div>

        <div className={styles.contentColumn}>
          <h1 className={styles.title}>{recipe.title}</h1>
          <p className={styles.meta}>
            {recipe.readyInMinutes} min · {recipe.servings} servings
          </p>
          {calories && (
            <p className={styles.meta}>Approx. {calories} kcal per serving</p>
          )}

          <div className={styles.buttonsRow}>
            <button
              className={
                favorite ? styles.btnFavoriteActive : styles.btnPrimary
              }
              onClick={() => {
                if (favorite) {
                  removeFromFavorites(recipe.id);
                  showToast("Removed from favorites");
                } else {
                  addToFavorites(recipe);
                  showToast("Added to favorites");
                }
              }}
            >
              {favorite ? "Remove from Favorites" : "Add to Favorites"}
            </button>

            <div className={styles.assignWrapper}>
              <select
                value={selectedDay}
                onChange={(e) => setSelectedDay(e.target.value)}
              >
                {DAYS.map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
              <button
                className={styles.btnSecondary}
                onClick={() => {
                  assignRecipeToDay(selectedDay, recipe);
                  showToast(`Assigned to ${selectedDay}`);
                }}
              >
                Add to Meal Plan
              </button>
            </div>
          </div>

          <section className={styles.section}>
            <h2>Ingredients</h2>
            <ul className="details-list">
              {recipe.extendedIngredients?.map((ing) => (
                <li key={ing.id}>{ing.original}</li>
              ))}
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Instructions</h2>
            <ol className="details-list">
              {recipe.analyzedInstructions?.[0]?.steps?.map((step) => (
                <li key={step.number}>{step.step}</li>
              ))}
            </ol>
          </section>
        </div>
      </section>

      {similarRecipes.length > 0 && (
        <section className={`${styles.section} ${styles.similarSection}`}>
          <h2>Similar Recipes</h2>
          {similarLoading && <p>Loading similar recipes...</p>}
          <div className="recipe-list">
            {similarRecipes.map((sim, index) => (
              <RecipeCard key={sim.id || `sim-${index}`} recipe={sim} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
