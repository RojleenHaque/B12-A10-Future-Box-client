import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddModel = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();

  // ✅ Check user
  if (!user || !user.email) {
    toast.error("You must be logged in");
    return;
  }

  // ✅ Collect form data safely
  const form = e.target;

  const data = {
    name: form.name.value.trim(),
    framework: form.framework.value,
    useCase: form.useCase.value.trim(),
    dataset: form.dataset.value.trim(),
    description: form.description.value.trim(),
    image: form.image.value.trim(),
    createdBy: user.email,
    createdAt: new Date().toISOString(), // better format
    purchased: 0
  };

  try {
    const res = await axios.post("http://localhost:5000/models", data);

    // ✅ Success check
    if (res.data?.insertedId) {
      toast.success("Model added successfully!");
      form.reset(); // clear form
      navigate("/models");
    } else {
      toast.error("Failed to add model");
    }
  } catch (err) {
    // ✅ Show real error
    console.error("Add Model Error:", err.response?.data || err.message);
    toast.error(err.response?.data?.error || "Something went wrong");
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
