import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const UpdateModel = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [model, setModel] = useState({});

  useEffect(() => {
    axios.get(`https://b12-a10-future-box-server-gamma.vercel.app/models/${id}`)
      .then(res => setModel(res.data))
      .catch(() => toast.error("Failed to fetch model"));
  }, [id]);

  const handleUpdate = e => {
    e.preventDefault();
    const updatedData = {
      name: e.target.name.value,
      description: e.target.description.value
    };
    axios.patch(`http://localhost:5000/update-model/${id}`, updatedData)
      .then(() => {
        toast.success("Model updated!");
        navigate("/my-models");
      })
      .catch(() => toast.error("Update failed"));
  };

  return (
    <div className="form-container">
      <h2>Update Model</h2>
      <form className="form-grid" onSubmit={handleUpdate}>
        <input name="name" defaultValue={model.name} required />
        <textarea name="description" defaultValue={model.description} required />
        <button type="submit" className="btn primary">Update Model</button>
      </form>
    </div>
  );
};

export default UpdateModel;
