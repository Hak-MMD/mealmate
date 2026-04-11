import MealPlannerGrid from "../../components/MealPlannerGrid";

export default function MealPlannerPage() {
  return (
    <section>
      <h1 className="page-title">Weekly Meal Planner</h1>
      <p className="page-subtitle">
        Assign recipes to days of the week. (Static layout for Phase 1.)
      </p>

      <MealPlannerGrid />

      <section style={{ marginTop: "1.5rem" }}>
        <h2 className="section-title">How it will work</h2>
        <p className="section-subtitle">
          In later phases, you&apos;ll be able to add recipes from the details
          page, drag and drop meals between days, and generate a shopping list.
        </p>
      </section>
    </section>
  );
}
