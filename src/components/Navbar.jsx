import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate("/login"); // redirect to login after logout
      })
      .catch(err => console.error(err));
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">AI Model Inventory</Link>
      </div>

      <div className="nav-menu">
        <Link to="/">Home</Link>
        <Link to="/models">Models</Link>
      </div>

      <div className="nav-actions">
        {user ? (
          <>
            <span>{user.email}</span>
            <button className="btn primary" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn outline">Login</Link>
            <Link to="/register" className="btn primary">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

