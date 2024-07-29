import FeaturedProducts from "./featured-products";
import Slider from "./slider";

const HomeHero = () => {
  return (
    <section className="w-full min-h-[100dvh]">
      <Slider />
      <FeaturedProducts types="Featured" />
      <FeaturedProducts types="Trending" />
    </section>
  );
};

export default HomeHero;
