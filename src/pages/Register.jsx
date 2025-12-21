import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;

    
    createUser(email, password, name)
      .then(() => toast.success("Registration successful!"))
      .catch(() => toast.error("Email already in use"));
  };

  return (
    <section className="auth-page">
      <form className="auth-card" onSubmit={handleRegister}>
        <h2>Create Account</h2>
        <input name="name" placeholder="Full Name" required />
        <input name="email" type="email" placeholder="Email" required />
        <input name="photo" placeholder="Photo URL (optional)" />
        <input name="password" type="password" placeholder="Password" required />
        <button className="btn primary full">Register</button>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </section>
  );
};

export default Register;

