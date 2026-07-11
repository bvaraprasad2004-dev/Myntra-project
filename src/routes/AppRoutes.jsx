import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Men from "../pages/Men";
import Women from "../pages/Women";
import Kids from "../pages/Kids";
import Beauty from "../pages/Beauty";
import HomeLiving from "../pages/HomeLiving";
import Studio from "../pages/Studio";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Wishlist from "../pages/Wishlist";
import Bag from "../pages/Bag";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/home-living" element={<HomeLiving />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;