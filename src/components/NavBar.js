import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="MealMate Logo"
            width={40}
            height={40}
            style={{ cursor: "pointer" }}
          />
        </Link>
        <span className="logo-text">MealMate</span>
      </div>
      <nav className="navbar-links">
        <Link href="/">Home</Link>
        <Link href="/recipes">Recipes</Link>
        <Link href="/meal-planner">Meal Planner</Link>
        <Link href="/favorites">Favorites</Link>
      </nav>
    </header>
  );
}
