import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllModels = () => {
  const [models, setModels] = useState([]);
  const [search, setSearch] = useState("");
  const [framework, setFramework] = useState("All");

  useEffect(() => {
    axios.get(`https://b12-a10-future-box-server-gamma.vercel.app/models?search=${search}&framework=${framework}`)
      .then(res => setModels(res.data))
      .catch(err => console.error(err));
  }, [search, framework]);

  return (
    <div className="container">
      <h2>All AI Models</h2>
      <div className="filters">
        <input placeholder="Search models..." onChange={e => setSearch(e.target.value)} />
        <select onChange={e => setFramework(e.target.value)}>
          <option value="All">All Frameworks</option>
          <option value="TensorFlow">TensorFlow</option>
          <option value="PyTorch">PyTorch</option>
          <option value="Keras">Keras</option>
        </select>
      </div>
      <div className="model-grid">
        {models.map(m => (
          <div key={m._id} className="model-card">
            <img src={m.image} alt={m.name} />
            <h3>{m.name}</h3>
            <p>{m.useCase}</p>
            <Link to={`/models/${m._id}`} className="btn small">Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllModels;
