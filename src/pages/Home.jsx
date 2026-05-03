import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    axios.get("https://b12-a10-future-box-server-gamma.vercel.app/featured-models")
      .then(res => setFeatured(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>Discover. Explore. <span>AI Models</span></h1>
          <p>Find the best AI models for NLP, Vision, and more. Manage, contribute, and scale your AI workflow in one platform.</p>
          <div className="hero-buttons">
            <Link to="/models" className="btn primary">Explore Models</Link>
            <Link to="/add-model" className="btn outline">Add Your Model</Link>
          </div>
        </div>
        <div className="hero-image">
          
        </div>
      </section>

      <section className="featured-section">
  <h2>Featured Models</h2>

  {featured.length === 0 ? (
    <p className="no-models">No featured models available at the moment. Please check back later!</p>
  ) : (
    <div className="featured-grid">
      {featured.map(model => (
        <div key={model._id} className="featured-card">
          <div className="card-image">
            <img src={model.image} alt={model.name} />
            <span className="framework-badge">{model.framework}</span>
          </div>
          <div className="card-content">
            <h3>{model.name}</h3>
            <p>{model.description.slice(0, 100)}...</p>
            <Link to={`/models/${model._id}`} className="btn small">View Details</Link>
          </div>
        </div>
      ))}
    </div>
  )}
</section>

      {/* CTA */}
      <section className="cta">
        <h2>Join the AI Community</h2>
        <p>Contribute, explore, and scale AI models like never before.</p>
        <Link to="/register" className="btn primary">Get Started</Link>
      </section>
    </>
  );
};

export default Home;

