import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import CaseStudy from "./pages/CaseStudy";
import About from "./pages/About";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet>

        <html lang="en"/>
        <title>Alliya Concepts</title>
        <meta
        name="description"
        content="Best digital marketing and web development company based in kenya"/>
        </Helmet>

        
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/case-study" element={<CaseStudy />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </HelmetProvider>
    </>
  );
}

export default App;
