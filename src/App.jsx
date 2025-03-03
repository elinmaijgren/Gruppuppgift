import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Product_info from "./pages/Product_info/Product_info";
import Navbar from "./components/Navbar/Navbar";
import KundvagnSida from "./pages/Kundvagn/KundvagnSida";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/Login";
import Help from "./pages/Help/Help";
import Confirmation from "./pages/Confirmation/Confirmation";
import CartProvider from "./context/CartContext"; 

const App = () => {
  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="kundvagnSida" element={<KundvagnSida />} />
        <Route path="info/:id" element={<Product_info />} />
        <Route path="login" element={<Login />} />
        <Route path="help" element={<Help />} />
        <Route path="confirmation" element={<Confirmation />} />
      </Routes>
      <Footer />
    </CartProvider>
  );
};

export default App;
