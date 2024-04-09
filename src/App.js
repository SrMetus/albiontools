import injectContext from "./store/appContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./views/Home";
import { Personajes } from "./views/Personajes";


function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/personaje" element={<Personajes />} />
            </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
}

export default injectContext(App);


