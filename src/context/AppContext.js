// src/context/AppContext.js
import { createContext, useState } from "react";

export const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [favorites, setFavorites] = useState([]); // will hold recipe objects
  const [mealPlan, setMealPlan] = useState({
    Mon: null,
    Tue: null,
    Wed: null,
    Thu: null,
    Fri: null,
    Sat: null,
    Sun: null,
  });

  // For Phase 1: just define empty placeholder functions (no logic yet)
  const value = {
    favorites,
    mealPlan,
    addToFavorites: () => {},
    removeFromFavorites: () => {},
    assignRecipeToDay: () => {},
    clearDay: () => {},
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
