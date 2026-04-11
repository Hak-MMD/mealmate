# **MealMate – Smart Recipe Finder & Weekly Meal Planner**

MealMate is a modern web application designed to help users discover new recipes, explore detailed cooking instructions, plan weekly meals, and organize their cooking routine.  
This project is built using **Next.js (Pages Router)** and demonstrates key concepts from CPAN144, including:

- Component‑based architecture
- State management (React state + Context API)
- Routing
- Styling & responsive design
- Project structure & planning

This repository contains **Phase 1** of the project, focusing on structure, layout, routing, and UI skeletons.

---

## 🚀 **Project Features (Phase 1)**

Phase 1 includes the foundational structure of the MealMate application:

### **✔ Full Project Structure**

- `pages/` for routing
- `components/` for reusable UI
- `context/` for global state
- `styles/` for global CSS
- `public/` for assets (logo, hero image)

### **✔ Global Layout**

- Navigation bar with logo
- Sticky footer
- Responsive main content wrapper

### **✔ Pages Implemented**

- **Home Page** (`/`)
  - Hero section with image
  - Icon‑based navigation cards

- **Recipes Page** (`/recipes`)
  - Search bar
  - Filters toolbar
  - Responsive recipe grid
  - Placeholder recipe cards

- **Recipe Details Page** (`/recipes/[id]`)
  - Static layout for ingredients, instructions, nutrition
  - “Add to Favorites” / “Add to Meal Plan” buttons (UI only)

- **Meal Planner Page** (`/meal-planner`)
  - Weekly grid layout (Mon–Sun)
  - Connected to global context (static for Phase 1)

- **Favorites Page** (`/favorites`)
  - Placeholder list for saved recipes

### **✔ Global State (Context API)**

- `favorites` array
- `mealPlan` object (Mon–Sun)
- Placeholder action functions (logic added in Phase 2)

### **✔ Styling & Responsiveness**

- Fully custom `globals.css`
- Responsive grids
- Responsive navbar
- Clean, modern UI
- React Icons integrated

---

## 📁 **Project Structure**

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
    _document.js

  components/
    NavBar.js
    Footer.js
    HomeHero.js
    RecipeCard.js
    RecipeFilters.js
    SearchBar.js
    MealPlannerGrid.js

  context/
    AppContext.js

  styles/
    globals.css

public/
  logo.png
  hero.jpg
```

---

## 🧠 **Phase 1 Learning Objectives Covered**

### **1. Project Setup & Structure**

- Next.js project initialized
- Organized folder structure
- Navigation implemented

### **2. Components & State**

- Multiple reusable components
- Global state with Context API
- React state used across pages

### **3. Routing**

- At least 3 main pages (you have 5)
- Each page has unique content
- Interactive UI elements present

### **4. Styling & Responsiveness**

- Custom CSS
- Responsive layout
- Consistent color scheme and typography

### **5. Submission Requirements**

- GitHub repository
- Screenshots of:
  - Home page
  - Recipes page
  - Recipe details page
  - Meal planner page
  - Favorites page
  - One interactive component (search bar, filters, buttons, etc.)

---

## 🛠️ **How to Run the Project**

### **Install dependencies**

```bash
npm install
```

### **Run development server**

```bash
npm run dev
```

### **Open in browser**

```
http://localhost:3000
```

---

## 🔮 **Planned Features (Phase 2 & 3)**

These features are part of the full MealMate vision and will be implemented in later phases:

- Real recipe API integration (Spoonacular / Edamam)
- Dynamic recipe details
- Add/remove favorites
- Add recipes to meal planner
- Drag‑and‑drop weekly planner
- Shopping list generator
- Pagination
- Advanced filters (cuisine, calories, diet, popularity)
- Loading skeletons
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
