import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Licitaciones from "./pages/licitaciones";
import BuscarProveedor from "./pages/buscarProveedor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/licitaciones" element={<Licitaciones />} />
        <Route path="/proveedores" element={<BuscarProveedor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;