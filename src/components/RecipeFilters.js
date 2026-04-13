export default function RecipeFilters({
  cuisine,
  diet,
  sort,
  onCuisineChange,
  onDietChange,
  onSortChange,
}) {
  return (
    <div className="filters-container">
      <select value={cuisine} onChange={(e) => onCuisineChange(e.target.value)}>
        <option value="">All Cuisines</option>
        <option value="Italian">Italian</option>
        <option value="Mexican">Mexican</option>
        <option value="Asian">Asian</option>
      </select>

      <select value={diet} onChange={(e) => onDietChange(e.target.value)}>
        <option value="">All Diets</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="gluten free">Gluten Free</option>
      </select>

      <select value={sort} onChange={(e) => onSortChange(e.target.value)}>
        <option value="">Sort</option>
        <option value="time-asc">Time: Low to High</option>
        <option value="time-desc">Time: High to Low</option>
        <option value="calories-asc">Calories: Low to High</option>
        <option value="calories-desc">Calories: High to Low</option>
      </select>
    </div>
  );
}
