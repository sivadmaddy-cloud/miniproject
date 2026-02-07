
import { useState } from "react";
import Api from '../services/Api'

function AddRecipe() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    await Api.post("/recipes", {
      title,
      category,
      ingredients: ingredients.split(","),
      image,
      rating,
      review
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


<select
  value={rating}
  onChange={(e) => setRating(e.target.value)}
  className="rater"
>
  <option value="">Select Rating</option>
  <option value="1">⭐ 1</option>
  <option value="2">⭐ 2</option>
  <option value="3">⭐ 3</option>
  <option value="4">⭐ 4</option>
  <option value="5">⭐ 5</option>
</select>

<div className="reviewr">
<textarea
  placeholder="Write a short review about the food..."
  value={review}
  onChange={(e) => setReview(e.target.value)}
  rows="4"
/>
</div>
      <button type="submit" className="butr">Add</button>
       <p>Share Your Favourite Foody</p>
    </form>
    
    </div>
    

  );
}

export default AddRecipe;
