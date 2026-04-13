import { useRouter } from "next/router";
import { useState, useMemo } from "react";
import { useAppContext } from "../../context/AppContext";
import RecipeCard from "../../components/RecipeCard";
import styles from "../../styles/RecipeDetails.module.css";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function RecipeDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const numericId = Number(id);

  const {
    recipes,
    isFavorite,
    addToFavorites,
    removeFromFavorites,
    assignRecipeToDay,
    showToast,
  } = useAppContext();

  const recipe = recipes.find((r) => r.id === numericId);
  const [selectedDay, setSelectedDay] = useState("Mon");

  const similarRecipes = useMemo(() => {
    if (!recipe) return [];
    const sameCuisine = recipe.cuisines?.[0];
    return recipes
      .filter(
        (r) =>
          r.id !== recipe.id &&
          (sameCuisine ? r.cuisines?.includes(sameCuisine) : true),
      )
      .slice(0, 2);
  }, [recipes, recipe]);

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  const favorite = isFavorite(recipe.id);

  const calories =
    recipe.nutrition?.nutrients?.find((n) => n.name === "Calories")?.amount ??
    null;

  return (
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
        <p className={styles.meta}>
          {recipe.cuisines?.[0] || "General"}{" "}
          {recipe.diets && recipe.diets.length > 0
            ? "· " + recipe.diets.join(", ")
            : ""}
        </p>
        {calories && (
          <p className={styles.meta}>Approx. {calories} kcal per serving</p>
        )}

        <div className={styles.buttonsRow}>
          <button
            className={favorite ? styles.btnFavoriteActive : styles.btnPrimary}
            onClick={() => {
              if (favorite) {
                removeFromFavorites(recipe.id);
                showToast("Removed from favorites");
              } else {
                addToFavorites(recipe.id);
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
                assignRecipeToDay(selectedDay, recipe.id);
                showToast(`Assigned to ${selectedDay}`);
              }}
            >
              Assign to Day
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
      {recipes.length > 0 && (
        <section className={`${styles.section} ${styles.similarSection}`}>
          <h2>Similar Recipes</h2>
          <div className={styles.similarGrid}>
            {recipes.map((sim) => (
              <RecipeCard key={sim.id} recipe={sim} />
            ))}
          </div>
        </section>
      )}
    </section>
  );
}
