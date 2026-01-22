import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AddRecipe from "./pages/AddRecipe";
import RecipeDetails from "./pages/RecipeDetails";
import EditRecipe from "./pages/EditRecipe";

// import Bookmarks from "./pages/Bookmarks";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/add" element={user ? <AddRecipe /> : <Navigate to="/login" />} />
        <Route path="/edit/:id" element={user ? <EditRecipe /> : <Navigate to="/login" />} />
       
      </Routes>
    </>
  );
}

export default App;
