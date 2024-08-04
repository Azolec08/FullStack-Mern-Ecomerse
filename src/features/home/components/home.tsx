import Category from "./category";
import FeaturedProducts from "./featured-products";
import Slider from "./slider";

const Home = () => {
  return (
    <main className="w-full min-h-[100dvh]">
      <Slider />
      <FeaturedProducts types="Featured" />
      <Category />
      <FeaturedProducts types="Trending" />
      <FeaturedProducts types="Normal" />
    </main>
  );
};

export default Home;
