import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Cources from "./components/Courses";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import ServicesAdmin from "./components/admin/ServicesAdmin";
import AdminList from "./components/admin/AdminList";
import AddAdmin from "./components/admin/AddAdmin";
import AdminLogin from "./components/admin/AdminLogin";
import AdminDash from "./components/admin/AdminDash";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/cources" element={<Cources />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/admin/services" element={<ServicesAdmin />} />
          <Route path="/admin/lists" element={<AdminList />} />
          <Route path="/admin/add" element={<AddAdmin />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDash />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
