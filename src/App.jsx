import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AllModels from "./pages/AllModels";
import AddModel from "./pages/AddModel";
import MyModels from "./pages/MyModels";
import ModelDetails from "./pages/ModelDetails";
import UpdateModel from "./pages/UpdateModel";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ErrorPage from "./pages/ErrorPage";
import PrivateRoute from "./routes/PrivateRoute";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/models" element={<AllModels />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Private Routes */}
            <Route path="/add-model" element={<PrivateRoute><AddModel /></PrivateRoute>} />
            <Route path="/my-models" element={<PrivateRoute><MyModels /></PrivateRoute>} />
            <Route path="/models/:id" element={<PrivateRoute><ModelDetails /></PrivateRoute>} />
            <Route path="/update/:id" element={<PrivateRoute><UpdateModel /></PrivateRoute>} />

            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer />
        <ToastContainer position="top-right" autoClose={2000} />
      </div>
    </Router>
  );
}

export default App;
