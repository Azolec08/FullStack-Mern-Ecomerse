import { Route, Routes } from "react-router-dom";
import Category from "./features/category/components/category";
import Home from "./features/home/components/home";
import Product from "./features/product/components/product";
import Layout from "./layout";
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/products/:id" element={<Product />} />
      </Route>
    </Routes>
  );
}

export default App;
