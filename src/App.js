import injectContext from "./store/appContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./views/Home";


function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
}

export default App;
