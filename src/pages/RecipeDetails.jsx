


import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Api from '../services/Api';
import { AuthContext } from "../context/AuthContext";


export default function RecipeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
const { user } = useContext(AuthContext);

  // console.log("USER 👉", user);

  // ✅ PASTE HERE (AFTER hooks, BEFORE return)
  const isAdmin = user?.role === "admin";

  useEffect(() => {
    Api.get(`/recipes/${id}`).then(res => {
      setRecipe(res.data);
    });
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="view">
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      {/* ✅ ADMIN ONLY */}
      {isAdmin && (
        <div className="ed">
          <Link to={`/edit/${recipe.id}`}>Edit</Link>
          
        </div>
      )}
    </div>
  );
}
