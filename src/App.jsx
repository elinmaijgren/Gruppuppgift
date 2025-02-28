import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home"; 
import Product_info from "./pages/Product_info/Product_info";
import Navbar from "./components/Navbar/Navbar";
import KundvagnSida from "./pages/Kundvagn/KundvagnSida";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/Login";
import Help from "./pages/Help/Help";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="kundvagnSida" element={<KundvagnSida />} />
        <Route path="info/:id" element={<Product_info />} />
        <Route path="login" element={<Login />}></Route>
        <Route path="help" element={<Help />}></Route>
      </Routes>
      <Footer />

    </>
  );
}

export default App;
