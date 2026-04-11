import Link from "next/link";

export default function RecipeCard() {
  const id = 1;

  return (
    <article className="recipe-card">
      <div className="recipe-card-image-placeholder">Image</div>

      <div className="recipe-card-body">
        <h3 className="recipe-card-title">Sample Recipe Title</h3>
        <p className="recipe-card-meta">Cuisine: Italian · 450 kcal · 30 min</p>

        <Link href={`/recipes/${id}`} className="recipe-card-link">
          View Details
        </Link>
      </div>
    </article>
  );
}
