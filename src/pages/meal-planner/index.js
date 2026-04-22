// src/pages/meal-planner/index.js
import Link from "next/link";
import { useAppContext } from "../../context/AppContext";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function MealPlannerPage() {
  const { mealPlan, clearDay } = useAppContext();

  return (
    <section>
      <h1 className="page-title">Weekly Meal Planner</h1>
      <p className="page-subtitle">
        Meals you assign from the recipe details page will appear here.
      </p>

      <div className="meal-grid">
        {DAYS.map((day) => {
          const recipe = mealPlan[day];
          return (
            <div key={day} className="meal-cell">
              <h3>{day}</h3>
              {recipe ? (
                <>
                  <Link href={`/recipes/${recipe.id}`} className="meal-link">
                    {recipe.title}
                  </Link>
                  <button
                    className="meal-clear-btn"
                    onClick={() => clearDay(day)}
                  >
                    Clear
                  </button>
                </>
              ) : (
                <p className="meal-empty">No recipe assigned.</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
