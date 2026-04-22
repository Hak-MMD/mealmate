// src/lib/spoonacular.js
const API_KEY = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;
const BASE_URL = "https://api.spoonacular.com";

async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }
  return res.json();
}

// page starts from 1
export async function searchRecipes(query, filters = {}, page = 1) {
  const number = 12;
  const offset = (page - 1) * number;

  const params = new URLSearchParams({
    apiKey: API_KEY,
    query: query || "",
    number: String(number),
    offset: String(offset),
    addRecipeInformation: "true",
  });

  if (filters.cuisine) params.append("cuisine", filters.cuisine);
  if (filters.diet) params.append("diet", filters.diet);

  const url = `${BASE_URL}/recipes/complexSearch?${params.toString()}`;
  const data = await fetchJson(url);

  return {
    results: data.results || [],
    totalResults: data.totalResults || 0,
  };
}

export async function getRecipeById(id) {
  const url = `${BASE_URL}/recipes/${id}/information?apiKey=${API_KEY}&includeNutrition=true`;
  return fetchJson(url);
}

// Efficient similar recipes: 1 call to /similar, 1 call to /informationBulk
export async function getSimilarRecipes(id) {
  const similarUrl = `${BASE_URL}/recipes/${id}/similar?apiKey=${API_KEY}&number=4`;
  const similar = await fetchJson(similarUrl); // [{id, title, ...}]

  const ids = similar.map((r) => r.id).join(",");
  if (!ids) return [];

  const bulkUrl = `${BASE_URL}/recipes/informationBulk?apiKey=${API_KEY}&ids=${ids}`;
  const detailed = await fetchJson(bulkUrl); // full recipe objects with image, etc.

  return detailed || [];
}
