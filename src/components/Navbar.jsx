import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import EditRecipe from './../pages/EditRecipe';

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <h2>Recipe App</h2>

      <div className="navlinks">
        <Link to="/">Home</Link>
        <Link to="/recipes">Recipes</Link>

        {/* {user?.role === "" && <Link to="/add">Add Recipe</Link>} */}
        
{user &&  <Link to="/add">Add Recipe</Link>}

        {user ? (
          <>
            <span className="welcome">
              Hello, Welcome {user.name}
            </span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}

