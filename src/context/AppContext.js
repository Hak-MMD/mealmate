// src/context/AppContext.js
import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [favorites, setFavorites] = useState([]); // array of recipe objects
  const [mealPlan, setMealPlan] = useState({
    Mon: null,
    Tue: null,
    Wed: null,
    Thu: null,
    Fri: null,
    Sat: null,
    Sun: null,
  });
  const [toast, setToast] = useState(null);

  // Load from localStorage (and normalize old data)
  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    const savedMealPlan = localStorage.getItem("mealPlan");

    if (savedFavorites) {
      try {
        const parsed = JSON.parse(savedFavorites);
        const normalized = Array.isArray(parsed)
          ? parsed.filter((r) => typeof r === "object" && r !== null)
          : [];
        setFavorites(normalized);
      } catch {
        setFavorites([]);
      }
    }

    if (savedMealPlan) {
      try {
        const parsed = JSON.parse(savedMealPlan);
        const cleaned = Object.fromEntries(
          Object.entries(parsed).map(([day, value]) => [
            day,
            typeof value === "object" && value !== null ? value : null,
          ]),
        );
        setMealPlan(cleaned);
      } catch {
        setMealPlan({
          Mon: null,
          Tue: null,
          Wed: null,
          Thu: null,
          Fri: null,
          Sat: null,
          Sun: null,
        });
      }
    }
  }, []);

  // Save favorites
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Save meal plan
  useEffect(() => {
    localStorage.setItem("mealPlan", JSON.stringify(mealPlan));
  }, [mealPlan]);

  const addToFavorites = (recipe) => {
    setFavorites((prev) => {
      const normalized = prev.filter(
        (r) => typeof r === "object" && r !== null,
      );
      const exists = normalized.some((r) => r.id === recipe.id);
      return exists ? normalized : [...normalized, recipe];
    });
  };

  const removeFromFavorites = (id) => {
    setFavorites((prev) =>
      prev.filter((r) => typeof r === "object" && r.id !== id),
    );
  };

  const isFavorite = (id) =>
    favorites.some((r) => typeof r === "object" && r.id === id);

  const assignRecipeToDay = (day, recipe) => {
    setMealPlan((prev) => ({
      ...prev,
      [day]: recipe,
    }));
  };

  const clearDay = (day) => {
    setMealPlan((prev) => ({
      ...prev,
      [day]: null,
    }));
  };

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2000);
  };

  const value = {
    favorites,
    mealPlan,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    assignRecipeToDay,
    clearDay,
    toast,
    showToast,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useAppContext must be used within AppProvider");
  return ctx;
}
