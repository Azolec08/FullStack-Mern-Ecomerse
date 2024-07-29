import { Outlet } from "react-router-dom";
import Footer from "./features/footer/components/Footer";
import Header from "./features/header/components/Header";
const Layout = () => {
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
