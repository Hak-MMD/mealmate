# **MealMate – Smart Recipe Finder & Weekly Meal Planner (Phase 2)**

MealMate is a modern web application designed to help users discover new recipes, explore detailed cooking instructions, plan weekly meals, and organize their cooking routine.  
This project is built using **Next.js (Pages Router)** and demonstrates key concepts from CPAN144, including:

- Component‑based architecture
- Global state management with Context API
- Dynamic routing
- Responsive UI with CSS Modules
- Data persistence (LocalStorage)
- API integration preparation

This repository contains **Phase 2** of the project, focusing on dynamic functionality, routing, state management, and polished UI/UX.

---

## 🚀 **Project Features (Phase 2)**

Phase 2 builds on the Phase 1 foundation and introduces full dynamic behavior, styling improvements, and persistent state.

---

## ✔ **Routing & Navigation**

- Fully functional navigation bar with icon + project name
- Clicking the logo or project name returns to Home
- Pages implemented:
  - `/` – Home
  - `/recipes` – Search, filters, recipe grid
  - `/recipes/[id]` – Dynamic recipe details
  - `/favorites` – Saved recipes
  - `/meal-planner` – Weekly meal plan view

Dynamic routing is used for recipe details, enabling `/recipes/1001`, `/recipes/1002`, etc.

---

## ✔ **Dynamic Components & Modularity**

Phase 2 introduces a clean, modular architecture:

### **Core Components**

- `RecipeCard` – reusable recipe preview card
- `SearchBar` – search input + submit
- `RecipeFilters` – cuisine, diet, sorting
- `NavBar` – updated with IoFastFoodOutline icon
- `Footer`
- `Toast` – global popup notifications
- `Similar Recipes` section
- `RecipeList` grid layout (shared across pages)

### **Context & State**

- `AppContext` manages:
  - Favorites
  - Weekly meal plan
  - Toast notifications
  - Recipes data
  - LocalStorage persistence

All components are cleanly separated and reusable across pages.

---

## 🎨 **Styling & Responsiveness**

Phase 2 introduces **CSS Modules** for page‑specific styling:

- `Recipes.module.css`
- `RecipeDetails.module.css`

### **Styling Enhancements**

- Fixed‑size recipe cards
- Centered recipe grids
- Square, consistent detail images
- Styled day selector
- Styled buttons (primary, secondary, favorite)
- Responsive layout for all pages
- Toast popup with fade animation

### **Conditional Styling**

- Favorite button changes color when active
- Toast appears/disappears automatically
- Similar recipes section uses the same grid layout as Recipes page

---

## 🔄 **State Management (Fully Functional)**

Phase 2 implements complete dynamic behavior using **React Context API**.

### **Favorites**

- Add/remove recipes
- Displayed on Favorites page
- Persisted in LocalStorage

### **Meal Planner**

- Assign recipe to a day from the details page
- Weekly planner displays assigned meals
- Persisted in LocalStorage

### **Toast Notifications**

- Global popup for:
  - Add/remove favorites
  - Assigning meals
- Auto-dismiss after 2 seconds

### **Recipes**

- Loaded from mock Spoonacular‑style dataset
- Used across all pages
- Includes ingredients, instructions, nutrition, cuisines, diets, etc.

---

## 🌐 **API Integration Preparation**

A placeholder API file is included:

```
src/lib/spoonacular.js
```

It contains:

- `searchRecipes(query, filters)`
- `getRecipeById(id)`
- `getSimilarRecipes(id)`

These currently return mock data but are structured to be replaced with real Spoonacular API calls in Phase 3.

This satisfies the **Phase 2 “API Preparation” requirement**.

---

## 📁 **Project Structure (Phase 2)**

```
src/
  pages/
    index.js
    recipes/
      index.js
      [id].js
    meal-planner/
      index.js
    favorites/
      index.js
    _app.js

  components/
    NavBar.js
    Footer.js
    RecipeCard.js
    RecipeFilters.js
    SearchBar.js
    Toast.js

  context/
    AppContext.js

  data/
    recipes.js   (mock Spoonacular-style data)

  lib/
    spoonacular.js   (API placeholder)

  styles/
    globals.css
    Recipes.module.css
    RecipeDetails.module.css
```

---

## 🧠 **Phase 2 Learning Objectives Covered**

### **1. Routing & Navigation**

- Dynamic routes
- Multi‑page navigation
- Clean URL structure

### **2. Component Layout & Modularity**

- Reusable components
- Shared grid layout
- Clean separation of UI logic

### **3. Responsive Styling & Theming**

- CSS Modules
- Fixed card sizes
- Mobile‑friendly layout
- Styled interactive elements

### **4. Effective State Management**

- Favorites logic
- Meal planner logic
- Toast notifications
- LocalStorage persistence

### **5. Project Organization & Code Clarity**

- Clean folder structure
- Readable, maintainable code
- API prep file included

---

## 🖼️ **Screenshots Required for Submission**

Include screenshots of:

- Home page
- Recipes page
- Recipe details page
- Favorites page
- Meal planner page
- Similar recipes section
- Toast notification
- Mobile view (optional but recommended)

---

## 🛠️ **How to Run the Project**

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

### Open in browser

```
http://localhost:3000
```

---

## 🔮 **Planned Features (Phase 3)**

- Real Spoonacular API integration
- Real similar recipes from API
- Loading skeletons
- Pagination
- Drag‑and‑drop weekly planner
- Shopping list generator
- Error handling
- Deployment to Vercel

---

## 👥 **Team Roles (from Proposal)**

- **Mykhaylo Maslyuk** – API Integration & Data Handling
- **Maksym Orlov** – Frontend Components
- **Jonathan Griffith & Ethan Huynh** – State Management & Logic
- **Ramone Mitchell‑Mckoy** – Styling & UI/UX
- **All Members** – Deployment & Testing

---

## 📄 **License**

This project is for educational purposes as part of CPAN144.
