import Link from "next/link";
import { useAppContext } from "../../context/AppContext";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function MealPlannerPage() {
  const { mealPlan, recipes } = useAppContext();

  const getRecipeForDay = (day) => {
    const id = mealPlan[day];
    if (!id) return null;
    return recipes.find((r) => r.id === id) || null;
  };

  return (
    <section>
      <h1 className="page-title">Weekly Meal Planner</h1>
      <p className="page-subtitle">
        Recipes assigned from the recipe details page will appear here.
      </p>

      <div className="meal-planner-grid">
        {DAYS.map((day) => {
          const recipe = getRecipeForDay(day);
          return (
            <div key={day} className="meal-day-card">
              <h3>{day}</h3>
              {recipe ? (
                <>
                  <p>{recipe.title}</p>
                  <Link href={`/recipes/${recipe.id}`}>View recipe</Link>
                </>
              ) : (
                <p>No recipe assigned.</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
