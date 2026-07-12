import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/Layout/Layout";

import Home from "../pages/Home";
import Men from "../pages/Men";
import Women from "../pages/Women";
import Kids from "../pages/Kids";
import HomeLiving from "../pages/HomeLiving";
import Beauty from "../pages/Beauty";
import Studio from "../pages/Studio";
import Wishlist from "../pages/Wishlist";
import Bag from "../pages/Bag";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/home-living" element={<HomeLiving />} />
          <Route path="/beauty" element={<Beauty />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/bag" element={<Bag />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;