import { useMemo, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import SearchBar from "../../components/SearchBar";
import RecipeFilters from "../../components/RecipeFilters";
import RecipeCard from "../../components/RecipeCard";
import styles from "../../styles/Recipes.module.css";

export default function RecipesPage() {
  const { recipes } = useAppContext();

  const [query, setQuery] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [diet, setDiet] = useState("");
  const [sort, setSort] = useState("");

  const filteredRecipes = useMemo(() => {
    let result = [...recipes];

    if (query.trim()) {
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
    } else if (sort === "calories-asc") {
      result.sort(
        (a, b) =>
          (a.nutrition?.nutrients?.[0]?.amount || 0) -
          (b.nutrition?.nutrients?.[0]?.amount || 0),
      );
    } else if (sort === "calories-desc") {
      result.sort(
        (a, b) =>
          (b.nutrition?.nutrients?.[0]?.amount || 0) -
          (a.nutrition?.nutrients?.[0]?.amount || 0),
      );
    }

    return result;
  }, [recipes, query, cuisine, diet, sort]);

  return (
    <section>
      <h1 className="page-title">Find Recipes</h1>
      <p className="page-subtitle">
        Search for recipes and refine results using filters.
      </p>

      <div className="recipes-toolbar">
        <SearchBar value={query} onChange={setQuery} />
        <RecipeFilters
          cuisine={cuisine}
          diet={diet}
          sort={sort}
          onCuisineChange={setCuisine}
          onDietChange={setDiet}
          onSortChange={setSort}
        />
      </div>

      <section style={{ marginTop: "1.5rem" }}>
        <h2 className="section-title">Results</h2>

        <div className="recipe-list">
          {filteredRecipes.length === 0 && <p>No recipes match your search.</p>}
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>
    </section>
  );
}
