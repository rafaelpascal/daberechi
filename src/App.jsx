import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { Home, Work, Aboutme, Singleproject } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/work" element={<Work />}></Route>
        <Route path="/project/:id" element={<Singleproject />}></Route>
        <Route path="/aboutme" element={<Aboutme />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
