import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import Category from "./pages/Category";
import ProductDetails from "./pages/ProductDetails";
import Shop from "./pages/Shop";



function App(){

  return(
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/category/:type" element={<Category/>} />
        <Route path="/product/:id" element={<ProductDetails/>}/>
        <Route path="/shop" element={<Shop />} />
        


      </Routes>

    </BrowserRouter>
  )

}

export default App;