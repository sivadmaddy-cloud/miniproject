import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  const fallbackImage =
    "https://via.placeholder.com/300x200?text=No+Image";

  return (
    <div className="head-recipe">
    <div className="recipe-card">
      <img
        src={recipe.image || fallbackImage}
        alt={recipe.title}
        style={{ width: "340px", height: "300px", objectFit: "cover" }}
        className="recipe-image"
      />

      <h3>{recipe.title}</h3>
      <p>{recipe.category}</p>

      <Link to={`/recipe/${recipe.id}`}>View Recipe</Link>
    </div>
    </div>
  );
}
