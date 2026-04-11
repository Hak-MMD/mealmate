import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export default function FavoritesPage() {
  const { favorites } = useContext(AppContext);

  return (
    <section>
      <h1 className="page-title">Favorites</h1>
      <p className="page-subtitle">
        Recipes you&apos;ve saved for later. (Static layout for Phase 1.)
      </p>

      {favorites.length === 0 ? (
        <p>
          No favorites yet. In later phases, you&apos;ll be able to add recipes
          here from the details page.
        </p>
      ) : (
        <ul>
          {favorites.map((recipe) => (
            <li key={recipe.id}>{recipe.title}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
