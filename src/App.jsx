import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home"; 
import Product_info from "./pages/Product_info/Product_info";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="info/:id" element={<Product_info />} />
    </Routes>
  );
}

export default App;
