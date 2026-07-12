import HeroBanner from "../components/Banner/HeroBanner";
import Banner from "../components/Banner/Banner";
import CategorySection from "../components/CategorySection/CategorySection";
import PromoSection from "../components/CategorySection/PromoSection";
import DealsSection from "../components/DealsSection";

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