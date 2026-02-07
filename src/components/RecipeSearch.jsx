import React from "react";


const RecipeSearch = ({ search, setSearch, category, setCategory }) => {
  return (
    <div className="gotit">
      <input
        type="text"
        placeholder="Search recipe..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
  <option value="all">All</option>
  <option value="indian">Indian</option>
  <option value="chinese">Chinese</option>
  <option value="italian">Italian</option>
</select>
    </div>
  );
};

export default RecipeSearch;
