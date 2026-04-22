# **MealMate – Smart Recipe Finder & Weekly Meal Planner (Phase 3)**

MealMate is a modern web application built with **Next.js (Pages Router)** that helps users discover recipes, explore detailed cooking instructions, save favorites, and plan weekly meals.  
This project demonstrates advanced front‑end development concepts from CPAN144, including:

- Component‑based architecture
- Shared state management with Context API
- Dynamic routing
- API integration with Spoonacular
- Pagination & performance optimization
- Responsive UI with CSS Modules
- LocalStorage persistence
- Deployment‑ready structure

This repository contains **Phase 3**, the final and fully functional version of the project.

---

# 🚀 **Final Features (Phase 3)**

Phase 3 completes the application with real API integration, performance improvements, and a polished user experience.

---

# 🧭 **Routing & Navigation**

The application uses the Next.js Pages Router with clean, intuitive navigation:

| Route           | Description                                 |
| --------------- | ------------------------------------------- |
| `/`             | Home page with hero section + quick actions |
| `/recipes`      | Search, filters, pagination, recipe grid    |
| `/recipes/[id]` | Dynamic recipe details page                 |
| `/favorites`    | User’s saved favorite recipes               |
| `/meal-planner` | Weekly meal planner with assigned meals     |

Navigation bar and logo provide consistent access across all pages.

---

# 🧩 **Component Architecture**

MealMate uses a modular, reusable component structure:

### **Core Components**

- `RecipeCard` – reusable recipe preview card
- `SearchBar` – controlled search input
- `RecipeFilters` – cuisine, diet, sorting
- `NavBar` – top navigation with icon
- `Footer` – global footer
- `Toast` – global notification system
- `Similar Recipes` section
- `Meal Planner Grid`
- `Home Action Cards`

### **Context & Shared State**

`AppContext` manages:

- Favorites (full recipe objects)
- Weekly meal plan (full recipe objects per day)
- Toast notifications
- LocalStorage persistence

This eliminates prop‑drilling and keeps the app consistent across pages.

---

# 🌐 **Real API Integration (Spoonacular)**

Phase 3 replaces mock data with **live API calls** using Spoonacular.

### **Endpoints Used**

- `GET /recipes/complexSearch`
  - With `addRecipeInformation=true`
  - Supports pagination (`number`, `offset`)
  - Supports filters (cuisine, diet)

- `GET /recipes/{id}/information`
  - Includes ingredients, instructions, nutrition

- `GET /recipes/{id}/similar`
  - Returns similar recipe IDs

- `GET /recipes/informationBulk`
  - Fetches full similar recipe objects in **one batch**
  - Reduces API usage from 4–6 calls → **2 calls total**

### **API Efficiency**

- Pagination loads **12 recipes per page**
- Similar recipes fetched in **bulk**
- No repeated calls for favorites or meal planner
- LocalStorage prevents unnecessary re-fetching

---

# 🔄 **State Management (Final Version)**

### **Favorites**

- Stores **full recipe objects**
- Prevents duplicate entries
- Persists in LocalStorage
- Zero API calls on Favorites page

### **Meal Planner**

- Stores **full recipe objects per day**
- Displays assigned meals with links
- Persists in LocalStorage
- Zero API calls on Meal Planner page

### **Toast Notifications**

- Global popup for:
  - Adding/removing favorites
  - Assigning meals
- Auto-dismiss after 2 seconds

---

# 📄 **Recipe Details Page**

The details page includes:

- High‑resolution recipe image
- Title, time, servings, calories
- Ingredients list
- Step‑by‑step instructions
- Add to Favorites button
- Add to Meal Plan (day selector)
- Fully functional **Similar Recipes** section

Similar recipes are fetched efficiently using:

1. `/similar` → get IDs
2. `/informationBulk` → get full objects

---

# 📚 **Recipes Page (Search + Filters + Pagination)**

The recipes page includes:

- Search bar (controlled input)
- Filters:
  - Cuisine
  - Diet
  - Sort by time (asc/desc)
- Pagination:
  - 12 recipes per page
  - Prev/Next buttons
  - Total pages calculated from API response

All results are displayed using the shared `RecipeCard` component.

---

# 🎨 **Styling & Responsiveness**

MealMate uses:

### **CSS Modules**

- `Recipes.module.css`
- `RecipeDetails.module.css`

### **Global Styles**

- Hero section
- Action cards
- Meal planner grid
- Toast animations
- Responsive layout

### **Responsive Features**

- Mobile‑friendly grid layouts
- Scaled hero image
- Adaptive typography
- Clean spacing and alignment

---

# ⚡ **Performance Optimizations**

Phase 3 includes real performance improvements:

### **1. Pagination**

- Only loads 12 recipes at a time
- Reduces payload size
- Improves speed

### **2. Bulk Similar Recipes**

- Replaces 4–6 API calls with **2 calls total**

### **3. LocalStorage Caching**

- Favorites and meal plan require **zero API calls**
- Faster navigation
- Offline-friendly

### **4. Clean State Normalization**

- Prevents corrupted data
- Ensures consistent behavior

---

# 📁 **Final Project Structure (Phase 3)**

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

  lib/
    spoonacular.js

  styles/
    globals.css
    Recipes.module.css
    RecipeDetails.module.css

public/
  hero.jpg
  logo.png
```

---

# 🧠 **Phase 3 Learning Objectives Covered**

### ✔ Real API integration

### ✔ Pagination & performance optimization

### ✔ Shared state with Context API

### ✔ Dynamic routing

### ✔ Responsive UI

### ✔ Error handling

### ✔ Deployment-ready structure

### ✔ Clean code organization

---

# 🖼️ **Screenshots Required for Final Submission**

Include screenshots of:

- Home page (hero + actions)
- Recipes page (search + filters + pagination)
- Recipe details page
- Similar recipes section
- Favorites page
- Meal planner page
- Toast notifications
- Mobile view (recommended)

---

# 🛠️ **How to Run the Project**

### Install dependencies

```bash
npm install
```

### Add your API key

Create `.env.local`:

```
NEXT_PUBLIC_SPOONACULAR_API_KEY=YOUR_KEY_HERE
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

# 🚀 **Deployment**

The project is fully compatible with **Render** or **Vercel**:

- Automatic routing
- Environment variables
- Optimized production build

---

# 👥 **Team Roles**

- **Mykhailo Maslyuk** – Lead Frontend, API Integration, State Management
- **Maksym Orlov** – UI Components & Layout
- **Jonathan Griffith & Ethan Huynh** – Logic, Context API, Data Flow
- **Ramone Mitchell‑Mckoy** – Styling, UX, Visual Design
- **All Members** – Testing, Debugging, Deployment

---

# 📄 **License**

This project is for educational purposes as part of CPAN144.
