// import { useContext, useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";
// import Api  from '../services/Api'

// export default function EditRecipe() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { user } = useContext(AuthContext);

//   const [recipe, setRecipe] = useState(null);

// useEffect(() => {
//   if (!user || user.role !== "admin") {
//     alert("Access denied");
//     navigate(`/recipe/${id}`);
//   }
// }, [user, id, navigate]);

// useEffect(() => {
//   Api.get(`/recipes/${id}`).then(res => {
//     setRecipe(res.data);
//   });
// }, [id]);


//   // 🔒 PASTE HERE (BEFORE return)
//   // useEffect(() => {
//   //   api.get(`/recipes/${id}`).then(res => {
//   //     if (!user || user.role !== "admin") {
//   //       alert("Only admin can edit recipes");
//   //       navigate(`/recipe/${id}`);
//   //       return;
//   //     }
//   //     setRecipe(res.data);
//   //   });
//   // }, [id, user]);

//   // // ⛔ Prevent render until data loads
//   // if (!recipe) return <p>Loading...</p>;

//   return (
//     <div>
//       <h2>Edit Recipe</h2>
//       {/* edit form here */}
//     </div>
//   );
// }


import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Api from '../services/Api';
import { AuthContext } from "../context/AuthContext";

export default function EditRecipe() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    if (!user || user.role !== "admin") {
      alert("Only admin can edit recipes");
      navigate(`/recipe/${id}`);
      return;
    }

    Api.get(`/recipes/${id}`).then((res) => setRecipe(res.data));
  }, [id, user, navigate]);

  if (!recipe) return <p>Loading...</p>;

const handleUpdate = async () => {
  try {
    await Api.put(`/recipes/${id}`, recipe);
    alert("Recipe updated successfully");
    navigate(`/recipe/${id}`);
  } catch (err) {
    alert("Failed to update recipe");
  }
};

const handleDelete = async () => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this recipe?"
  );

  if (!confirmDelete) return;

  try {
    await Api.delete(`/recipes/${id}`);
    alert("Recipe deleted successfully");
    navigate("/");
  } catch (error) {
    console.error(error);
    alert("Failed to delete recipe");
  }
};


  return (
    
  <div className="form">

    <h2>Edit Recipe</h2>

    <input
      type="text"
      value={recipe.title}
      onChange={(e) =>
        setRecipe({ ...recipe, title: e.target.value })
      }
      placeholder="Recipe title"
    />

    <textarea
      value={recipe.description}
      onChange={(e) =>
        setRecipe({ ...recipe, description: e.target.value })
      }
      placeholder="Description"
    />

    <textarea
      value={recipe.ingredients}
      onChange={(e) =>
        setRecipe({ ...recipe, ingredients: e.target.value })
      }
      placeholder="Ingredients"
    />

    <textarea
      value={recipe.instructions}
      onChange={(e) =>
        setRecipe({ ...recipe, instructions: e.target.value })
      }
      placeholder="Instructions"
    />

    <div style={{ display: "grid", gap: "10px" }}>
  <button onClick={handleUpdate}>Update Recipe</button>

  <button
    onClick={handleDelete}
    style={{ backgroundColor: "red", color: "white" }}
  >
    Delete Recipe
  </button>
</div>

   
  </div>
);}
