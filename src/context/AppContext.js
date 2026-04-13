import { createContext, useContext, useState, useEffect } from "react";
import { recipes } from "../data/recepies";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [favorites, setFavorites] = useState([]); // array of recipe IDs
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

  // Load from localStorage
  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    const savedMealPlan = localStorage.getItem("mealPlan");

    if (savedFavorites) setFavorites(JSON.parse(savedFavorites));
    if (savedMealPlan) setMealPlan(JSON.parse(savedMealPlan));
  }, []);

  // Save favorites
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Save meal plan
  useEffect(() => {
    localStorage.setItem("mealPlan", JSON.stringify(mealPlan));
  }, [mealPlan]);

  const addToFavorites = (id) => {
    setFavorites((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const removeFromFavorites = (id) => {
    setFavorites((prev) => prev.filter((favId) => favId !== id));
  };

  const isFavorite = (id) => favorites.includes(id);

  const assignRecipeToDay = (day, id) => {
    setMealPlan((prev) => ({
      ...prev,
      [day]: id,
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
    recipes,
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
