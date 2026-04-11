export default function RecipeFilters() {
  return (
    <div className="filters-container">
      <select>
        <option>Cuisine</option>
        <option>Italian</option>
        <option>Mexican</option>
        <option>Asian</option>
      </select>

      <select>
        <option>Diet</option>
        <option>Vegan</option>
        <option>Vegetarian</option>
        <option>Keto</option>
      </select>

      <select>
        <option>Sort</option>
        <option>Most Popular</option>
        <option>Recent</option>
        <option>Lowest Calories</option>
      </select>
    </div>
  );
}
