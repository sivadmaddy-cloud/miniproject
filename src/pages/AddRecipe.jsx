
import { useState } from "react";
import Api from '../services/Api'

function AddRecipe() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await Api.post("/recipes", {
      title,
      category,
      ingredients: ingredients.split(","),
      image
    });
  };

  return (
    <div className="addrecipe">

     
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="titler"
      />

      <input
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="cater"

      />

      <input
        placeholder="Ingredients commo separated"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        className="interr"
      />

      <input
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="imgr"
      />

      <button type="submit" className="butr">Add</button>
       <p>Share Your Favourite Foody</p>
    </form>
    
    </div>
    

  );
}

export default AddRecipe;
