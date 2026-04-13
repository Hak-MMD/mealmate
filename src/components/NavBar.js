import Link from "next/link";
import { IoFastFoodOutline } from "react-icons/io5";

export default function NavBar() {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <Link href="/" className="navbar-logo-link">
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <IoFastFoodOutline size={26} />
            <span className="logo-text">MealMate</span>
          </div>
        </Link>
      </div>

      <nav className="navbar-links">
        <Link href="/recipes">Recipes</Link>
        <Link href="/meal-planner">Meal Planner</Link>
        <Link href="/favorites">Favorites</Link>
      </nav>
    </header>
  );
}
