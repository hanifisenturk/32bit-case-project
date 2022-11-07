import "./utilities/Internationalization/Internationalization";

import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer/Footer";

import { ToastContainer } from "react-toastify";

import Home from "./screens/Home";
import Contact from "./screens/Contact";
import NotFound from "./screens/NotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />

      <ToastContainer style={{ fontSize: "1.2rem" }} position="top-right" />
    </>
  );
}

export default App;
