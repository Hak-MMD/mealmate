import SearchBar from "../../components/SearchBar";
import RecipeFilters from "../../components/RecipeFilters";
import RecipeCard from "../../components/RecipeCard";

export default function RecipesPage() {
  return (
    <section>
      <h1 className="page-title">Find Recipes</h1>
      <p className="page-subtitle">
        Search for recipes by keyword and refine results using filters.
      </p>

      <div className="recipes-toolbar">
        <SearchBar />
        <RecipeFilters />
      </div>

      <section style={{ marginTop: "1.5rem" }}>
        <h2 className="section-title">Results</h2>

        <div className="recipe-list">
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </div>
      </section>
    </section>
  );
}
