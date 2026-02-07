import { useEffect, useState } from "react";
import api from "../services/Api";
import RecipeSearch from "../components/RecipeSearch";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

 useEffect(() => {
  api.get("/recipes").then((res) => {
    const normalized = res.data.map((r) => ({
      ...r,
      category: r.category ? r.category.toLowerCase() : "unknown",
      title: r.title ? r.title : ""
    }));
    setRecipes(normalized);
  });
}, []);


const filteredRecipes = recipes.filter((recipe) => {
  const matchSearch =
    recipe.title &&
    recipe.title.toLowerCase().includes(search.toLowerCase());

  const matchCategory =
    category === "all" || recipe.category === category;

  return matchSearch && matchCategory;
});

  return (
    <div className="page">
      <div className="top-section">
        <h1>All Recipes</h1>
      </div>

      <RecipeSearch
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />

      <div className="recipes-grid">
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
