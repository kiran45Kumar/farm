import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";
import AOS from "aos";
import Admin from "./components/admin/Admin";
import Home from "./components/home/Home";
import AddGallery from "./components/admin/AddGallery";
import AdminContent from "./components/admin/AdminContent";
import AdminLogin from "./components/admin/AdminLogin";
import AddCategory from "./components/admin/AddCategory";
import AddTestimonial from "./components/admin/AddTestimonial";
import ViewGallery from "./components/admin/ViewGallery";
import ViewTestimonial from "./components/admin/ViewTestimonial";
import { useState } from "react";

AOS.init({
  duration: 2000,
  easing: "ease",
  once: true,
  delay: 200,
});

const App = () => {
  const [flag, setFlag] = useState(false);
  return (
    <div>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<Admin />}>
            <Route index element={<AdminContent />} />
            <Route path="gallery/add" element={<AddGallery />} />
            <Route path="testimonial/add" element={<AddTestimonial />} />
            <Route path="category/add" element={<AddCategory />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
