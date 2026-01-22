import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    
    <nav>
      <Link to="/">Recipes</Link>

      {user ? (
        <>
          <span>Hello, Welcome {user.name}</span>
          <Link to="/add">Add Recipe</Link>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
       
          <Link to="/signup">Signup</Link>
        </>
      )}
    </nav>
  );
}
