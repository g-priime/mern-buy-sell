import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddItems from './pages/AddItems'
import Kart from './pages/Kart'
import Checkout from "./pages/Checkout";
import UpdateItems from "./pages/UpdateItems";
import UpdateFormPage from "./pages/UpdateFormPage";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/add" element={<AddItems />} />
            <Route path="/update" element={<UpdateItems />} />
            <Route path="/updateForm" element={<UpdateFormPage />} />
            <Route path="/kart" element={<Kart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
