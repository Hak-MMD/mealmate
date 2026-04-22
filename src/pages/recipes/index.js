// src/pages/recipes/index.js
import { useEffect, useState, useMemo } from "react";
import { searchRecipes } from "../../lib/spoonacular";
import SearchBar from "../../components/SearchBar";
import RecipeFilters from "../../components/RecipeFilters";
import RecipeCard from "../../components/RecipeCard";
import styles from "../../styles/Recipes.module.css";

export default function RecipesPage() {
  const [query, setQuery] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [diet, setDiet] = useState("");
  const [sort, setSort] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const totalPages = Math.max(1, Math.ceil(totalResults / 12));

  const loadRecipes = async (pageToLoad = 1) => {
    try {
      setLoading(true);
      setError("");
      const { results, totalResults } = await searchRecipes(
        query,
        { cuisine, diet, sort },
        pageToLoad,
      );
      setRecipes(results);
      setTotalResults(totalResults);
      setPage(pageToLoad);
    } catch (err) {
      setError("Failed to load recipes. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // initial load
  useEffect(() => {
    loadRecipes(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredRecipes = useMemo(() => {
    let result = [...recipes];

    if (sort === "time-asc") {
      result.sort((a, b) => a.readyInMinutes - b.readyInMinutes);
    } else if (sort === "time-desc") {
      result.sort((a, b) => b.readyInMinutes - a.readyInMinutes);
    }

    return result;
  }, [recipes, sort]);

  const handleSearchSubmit = () => {
    loadRecipes(1);
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      loadRecipes(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      loadRecipes(page - 1);
    }
  };

  return (
    <section>
      <h1 className="page-title">Find Recipes</h1>
      <p className="page-subtitle">
        Search for recipes and refine results using filters.
      </p>

      <div className="recipes-toolbar">
        <SearchBar
          value={query}
          onChange={setQuery}
          onSubmit={handleSearchSubmit}
        />
        <RecipeFilters
          cuisine={cuisine}
          diet={diet}
          sort={sort}
          onCuisineChange={setCuisine}
          onDietChange={setDiet}
          onSortChange={setSort}
        />
      </div>

      {loading && <p>Loading recipes...</p>}
      {error && <p className="error-text">{error}</p>}

      <section style={{ marginTop: "1.5rem" }}>
        <h2 className="section-title">Results</h2>

        <div className="recipe-list">
          {!loading && !error && filteredRecipes.length === 0 && (
            <p>No recipes match your search.</p>
          )}
          {filteredRecipes.map((recipe, index) => (
            <RecipeCard key={recipe.id || `rec-${index}`} recipe={recipe} />
          ))}
        </div>

        {totalResults > 12 && (
          <div className={styles.pagination}>
            <button
              className={styles.pageButton}
              onClick={handlePrevPage}
              disabled={page === 1 || loading}
            >
              Previous
            </button>
            <span className={styles.pageInfo}>
              Page {page} of {totalPages}
            </span>
            <button
              className={styles.pageButton}
              onClick={handleNextPage}
              disabled={page === totalPages || loading}
            >
              Next
            </button>
          </div>
        )}
      </section>
    </section>
  );
}
