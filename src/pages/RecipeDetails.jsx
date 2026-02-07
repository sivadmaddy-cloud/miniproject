


// import { useEffect, useState, useContext } from "react";
// import { useParams, useNavigate, Link } from "react-router-dom";
// import Api from '../services/Api';
// import { AuthContext } from "../context/AuthContext";


// export default function RecipeDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();
  

//   const [recipe, setRecipe] = useState(null);
//   const [loading, setLoading] = useState(false);
// const { user } = useContext(AuthContext);

//   // console.log("USER 👉", user);

//   // ✅ PASTE HERE (AFTER hooks, BEFORE return)
//   const isAdmin = user?.role === "admin";

//   useEffect(() => {
//     Api.get(`/recipes/${id}`).then(res => {
//       setRecipe(res.data);
//     });
//   }, [id]);

//   if (!recipe) return <p>Loading...</p>;

//   return (
    
//     <div className="view">
//       <h1>{recipe.title}</h1>
//       <p>{recipe.description}</p>
//       <p>{recipe.ingredients}</p>
//       <p>{recipe.imageurl}</p>
//       <p>{recipe.instructions}</p>
//       <p>{recipe.rating}⭐</p>
//       <p>{recipe.review}</p>


//       {/* ✅ ADMIN ONLY */}
//       {isAdmin && (
//         <div className="ed">
//           <Link to={`/edit/${recipe.id}`}>Edit</Link>
          
//         </div>
//       )}
//     </div>
//   );
// }



import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import Api from "../services/Api";
import { AuthContext } from "../context/AuthContext";

export default function RecipeDetails() {
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const [recipe, setRecipe] = useState(null);

  const isAdmin = user?.role === "admin";

  useEffect(() => {
    Api.get(`/recipes/${id}`).then(res => {
      setRecipe(res.data);
    });
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="view">
      {/* Title */}
      <h1>{recipe.title}</h1>

      {/* Description */}
      <p>{recipe.description}</p>

      {/* Image */}
      <img
        src={recipe.image}
        alt={recipe.title}
        style={{ width: "500px", borderRadius: "8px" }}
      />

      {/* Ingredients */}
      <h2>Ingredients</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      {/* Steps / Instructions */}
      <h2>Steps</h2>
      <ol>
        {recipe.instructions.split("\n").map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>

      {/* Rating */}
      <p>
        <strong>Rating:</strong> {recipe.rating} ⭐
      </p>

      {/* Review */}
      <p>
        <strong>Review:</strong> {recipe.review}
      </p>

      {/* Admin Only */}
      {isAdmin && (
        <div className="ed">
          <Link to={`/edit/${recipe.id}`}>Edit</Link>
        </div>
      )}
    </div>
  );
}

