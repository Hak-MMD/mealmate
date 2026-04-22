// src/pages/favorites/index.js
import RecipeCard from "../../components/RecipeCard";
import { useAppContext } from "../../context/AppContext";

export default function FavoritesPage() {
  const { favorites } = useAppContext();

  return (
    <section>
      <h1 className="page-title">Favorite Recipes</h1>
      <p className="page-subtitle">
        Your saved recipes are stored locally in your browser.
      </p>

      <div className="recipe-list">
        {favorites.length === 0 && <p>No favorites yet.</p>}
        {favorites.map((recipe, index) => (
          <RecipeCard key={recipe.id || `fav-${index}`} recipe={recipe} />
        ))}
      </div>
    </section>
  );
}
