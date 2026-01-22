import { useContext, useState } from "react";
import Api from "../services/Api";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await Api.get("/users");

    const user = res.data.find(
      (u) => u.email === email && u.password === password
    );

    console.log(res.data);

    if (user) {
      login(user);        // ✅ context login
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="form">
      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
