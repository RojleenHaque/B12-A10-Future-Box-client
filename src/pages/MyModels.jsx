import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEdit, FaTrash } from "react-icons/fa";

const MyModels = () => {
  const { user } = useContext(AuthContext);
  const [myModels, setMyModels] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axios.get(`https://b12-a10-future-box-server-gamma.vercel.app/my-models/${user.email}`)
        .then(res => setMyModels(res.data))
        .catch(() => toast.error("Failed to fetch your models"));
    }
  }, [user]);

  const handleDelete = id => {
    if (!window.confirm("Are you sure you want to delete this model?")) return;
    axios.delete(`http://localhost:5000/models/${id}`)
      .then(res => {
        if (res.data.deletedCount > 0) {
          toast.success("Deleted successfully!");
          setMyModels(myModels.filter(m => m._id !== id));
        }
      })
      .catch(() => toast.error("Failed to delete"));
  };

  if (!myModels) return <div className="loading">Loading...</div>;

  return (
    <div className="container">
      <h2 className="page-title">My Models</h2>
      {myModels.length === 0 ? (
        <div className="empty-state">
          <p>No models added yet.</p>
          <Link to="/add-model" className="btn-primary">Add First Model</Link>
        </div>
      ) : (
        <table className="custom-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Framework</th>
              <th>Use Case</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {myModels.map(model => (
              <tr key={model._id}>
                <td>{model.name}</td>
                <td>{model.framework}</td>
                <td>{model.useCase}</td>
                <td className="actions">
                  <Link to={`/update/${model._id}`} className="btn-warning"><FaEdit /> Edit</Link>
                  <button onClick={() => handleDelete(model._id)} className="btn-danger"><FaTrash /> Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyModels;
