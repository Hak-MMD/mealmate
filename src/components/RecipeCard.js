import Link from "next/link";
import { useAppContext } from "../context/AppContext";
import styles from "../styles/Recipes.module.css";

export default function RecipeCard({ recipe }) {
  const { isFavorite } = useAppContext();
  const favorite = isFavorite(recipe.id);

  return (
    <article className={styles.card}>
      <div className={styles.cardImageWrapper}>
        <img
          src={recipe.imageSmall || recipe.image}
          alt={recipe.title}
          className={styles.cardImage}
        />
      </div>

      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{recipe.title}</h3>
        <p className={styles.cardMeta}>
          {recipe.readyInMinutes} min · {recipe.servings} servings
        </p>
        <p className={styles.cardMeta}>
          {recipe.cuisines?.[0] || "General"}{" "}
          {recipe.diets && recipe.diets.length > 0
            ? "· " + recipe.diets.join(", ")
            : ""}
        </p>

        <div className={styles.cardFooter}>
          <Link href={`/recipes/${recipe.id}`} className={styles.cardLink}>
            View Details
          </Link>
          {favorite && <span className={styles.favoriteBadge}>★ Favorite</span>}
        </div>
      </div>
    </article>
  );
}
