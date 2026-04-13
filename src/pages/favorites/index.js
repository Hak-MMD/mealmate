import { useAppContext } from "../../context/AppContext";
import RecipeCard from "../../components/RecipeCard";

export default function FavoritesPage() {
  const { recipes, favorites } = useAppContext();

  const favoriteRecipes = recipes.filter((r) => favorites.includes(r.id));

  return (
    <section>
      <h1 className="page-title">Favorites</h1>
      <p className="page-subtitle">
        Recipes you have marked as favorites. Click a card to view details.
      </p>

      {favoriteRecipes.length === 0 ? (
        <p>You have no favorite recipes yet.</p>
      ) : (
        <div className="favorites-grid">
          {favoriteRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </section>
  );
}
