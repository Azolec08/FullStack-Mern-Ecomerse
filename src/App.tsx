import { Route, Routes } from "react-router-dom";
import Category from "./features/category/components/category";
import HomeHero from "./features/home/components/home-hero";
import Product from "./features/product/components/product";
import Layout from "./layout";
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomeHero />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/product/:id" element={<Product />} />
      </Route>
    </Routes>
  );
}

export default App;
