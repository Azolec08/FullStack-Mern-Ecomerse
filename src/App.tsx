import { Route, Routes } from "react-router-dom";
import LeftCategory from "./features/category/components/left-category";
import Home from "./features/home/components/home";
import Product from "./features/product/components/product";
import Todolist from "./features/todolist/todolists";
import Layout from "./layout";
import ScrollToTop from "./shared/utils/scroll-to-top";
function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<LeftCategory />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/todolist" element={<Todolist />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
