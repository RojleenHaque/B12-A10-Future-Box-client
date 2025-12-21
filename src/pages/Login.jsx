import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
      .then(() => {
        toast.success("Login successful!");
        navigate(from, { replace: true });
      })
      .catch(() => toast.error("Invalid credentials"));
  };

  return (
    <section className="auth-page">
      <form className="auth-card" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button className="btn primary full">Login</button>
        <button type="button" className="btn outline full" onClick={() => googleSignIn().then(() => navigate(from))}>
          Continue with Google
        </button>
        <p>New here? <Link to="/register">Register</Link></p>
      </form>
    </section>
  );
};

export default Login;

