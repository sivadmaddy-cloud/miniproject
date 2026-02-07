import { Link } from "react-router-dom";
import noImage from "../assets/no-image.jpg";

export default function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <img
        src={recipe.image && recipe.image.trim() !== "" ? recipe.image : noImage}
        alt={recipe.title}
        className="recipe-image"
        style={{ width: "340px", height: "300px", objectFit: "cover" }}
      />

      <h3>{recipe.title}</h3>
      <p>{recipe.category}</p>

      <p>⭐ {recipe.rating} / 5</p>
      <p>{recipe.reviews} Reviews</p>

      <Link to={`/recipe/${recipe.id}`}>View Recipe</Link>
    </div>
  );
}
