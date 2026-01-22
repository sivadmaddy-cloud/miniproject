import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import Api from '../services/Api'

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    Api.get("/recipes").then(res => setRecipes(res.data));
  }, []);

 const filteredRecipes = recipes.filter(recipe => {
  const titleMatch = recipe.title
    ?.toLowerCase()
    .includes(search.toLowerCase());

  const ingredientsMatch = Array.isArray(recipe.ingredients)
    ? recipe.ingredients.join(" ").toLowerCase().includes(search.toLowerCase())
    : false;

  const categoryMatch = recipe.category
    ?.toLowerCase()
    .includes(search.toLowerCase());

  return titleMatch || ingredientsMatch || categoryMatch;
});

return (
  <div className="recipes-grid">
    {filteredRecipes.map(recipe => (
      <RecipeCard key={recipe.id} recipe={recipe} />
    ))}
  </div>
);
}