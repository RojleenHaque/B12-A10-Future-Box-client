import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";

const ModelDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [model, setModel] = useState(null);

  useEffect(() => {
    axios.get(`https://b12-a10-future-box-server-h811.onrender.com/models/${id}`)
      .then(res => setModel(res.data))
      .catch(() => toast.error("Failed to fetch model"));
  }, [id]);

  const handlePurchase = () => {
    axios.patch(`https://b12-a10-future-box-server-h811.onrender.com/purchase/${id}`)
      .then(res => {
        if (res.data.modifiedCount > 0) {
          toast.success("Purchase successful!");
          setModel({ ...model, purchased: (model.purchased || 0) + 1 });
        }
      })
      .catch(() => toast.error("Something went wrong"));
  };

  if (!model) return <div className="loading">Loading...</div>;

  return (
    <div className="model-details">
      <img src={model.image} alt={model.name} className="detail-image" />
      <div className="detail-info">
        <h1>{model.name}</h1>
        <span className="badge">{model.framework}</span>
        <span className="badge-outline">{model.useCase}</span>
        <p>{model.description}</p>
        <div className="dataset-info">
          <p><strong>Dataset:</strong> {model.dataset}</p>
          <p><strong>Created By:</strong> {model.createdBy}</p>
          <p><strong>Purchased:</strong> {model.purchased || 0}</p>
        </div>
        <button onClick={handlePurchase} className="btn-primary">Purchase Model</button>
      </div>
    </div>
  );
};

export default ModelDetails;
