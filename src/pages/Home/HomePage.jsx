import HeroSection from "@/components/templates/Home/HeroSection";
import ProductsShowCase from "@/components/templates/Home/ProductsShowCase";

function HomePage() {
  return (
    <>
      <div className="container">
        <HeroSection />
      </div>
        <ProductsShowCase
          photo1="blose-1"
          photo2="blose-2"
          title="جدید ترین محصولات"
          href="/products/?sort=newest"
        />
    </>
  );
}

export default HomePage;
