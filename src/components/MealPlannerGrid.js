import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function MealPlannerGrid() {
  const { mealPlan } = useContext(AppContext);

  return (
    <div className="meal-planner-grid">
      {DAYS.map((day) => (
        <div key={day} className="meal-day-card">
          <strong>{day}</strong>
          <p style={{ marginTop: "0.25rem" }}>
            {mealPlan[day]?.title || "No meal assigned"}
          </p>
        </div>
      ))}
    </div>
  );
}
