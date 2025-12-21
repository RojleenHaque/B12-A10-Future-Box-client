import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddModel = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      framework: e.target.framework.value,
      useCase: e.target.useCase.value,
      dataset: e.target.dataset.value,
      description: e.target.description.value,
      image: e.target.image.value,
      createdBy: user.email,
      createdAt: new Date(),
      purchased: 0
    };

    try {
      const res = await axios.post("http://localhost:5000/models", data);
      if (res.data.insertedId) {
        toast.success("Model added successfully!");
        navigate("/models");
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="form-container">
      <h2>Add New AI Model</h2>
      <form className="form-grid" onSubmit={handleSubmit}>
        <input name="name" placeholder="Model Name" required />
        <select name="framework" required>
          <option>TensorFlow</option>
          <option>PyTorch</option>
          <option>Keras</option>
        </select>
        <input name="useCase" placeholder="Use Case" required />
        <input name="dataset" placeholder="Dataset Name" required />
        <textarea name="description" placeholder="Description" required></textarea>
        <input name="image" placeholder="Image URL" required />
        <button type="submit" className="btn primary">Submit Model</button>
      </form>
    </div>
  );
};

export default AddModel;
