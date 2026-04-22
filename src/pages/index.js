import Link from "next/link";
import { FiBookOpen, FiCalendar, FiHeart } from "react-icons/fi";

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <img src="/hero.jpg" alt="Delicious food" className="home-hero-img" />

        <div className="home-hero-overlay">
          <h1 className="home-hero-title">MealMate – Smart Recipe Planner</h1>
          <p className="home-hero-subtitle">
            Discover recipes, plan your weekly meals, and simplify your cooking
            routine.
          </p>
        </div>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2 className="section-title">Get Started</h2>
        <p className="section-subtitle">Choose what you want to do today.</p>

        <div className="home-actions-grid">
          <Link href="/recipes" className="home-action-card">
            <FiBookOpen className="home-action-icon icon-green" />
            <h3>Search Recipes</h3>
            <p>Find recipes by keyword, cuisine, and more.</p>
          </Link>

          <Link href="/meal-planner" className="home-action-card">
            <FiCalendar className="home-action-icon icon-blue" />
            <h3>Plan Your Week</h3>
            <p>Assign recipes to days of the week.</p>
          </Link>

          <Link href="/favorites" className="home-action-card">
            <FiHeart className="home-action-icon icon-red" />
            <h3>Favorites</h3>
            <p>View recipes you’ve saved for later.</p>
          </Link>
        </div>
      </section>
    </>
  );
}
