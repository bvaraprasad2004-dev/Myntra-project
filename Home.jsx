import Navbar from "../components/Navbar/Navbar";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import Banner from "../components/Banner/Banner";
import CategorySection from "../components/CategorySection/CategorySection";
import PromoSection from "../components/PromoSection/PromoSection";
import DealsSection from "../components/DealsSection/DealsSection";

function Home() {
  return (
    <>
  <HeroBanner />
  <Banner />
  <CategorySection />
  <DealsSection />
  <PromoSection />
</>
  );
}

export default Home;