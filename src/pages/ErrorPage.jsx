import { Link } from "react-router-dom";
import { FaHome, FaRobot } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <FaRobot size={100} className="error-icon" />
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist. Return to the homepage.</p>
      <Link to="/" className="btn-primary"><FaHome /> Home</Link>
    </div>
  );
};

export default ErrorPage;
