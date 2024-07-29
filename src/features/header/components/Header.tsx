import { Link } from "react-router-dom";
import HeaderLeftCategory from "./header-left-category";
import HeaderRightCategory from "./header-right-category";

const Header = () => {
  return (
    <header className="w-ful  h-[80px]">
      <nav className="container flex w-full h-full justify-between py-[10px]">
        <HeaderLeftCategory />
        <Link to="/" className="h-full flex items-center">
          <h1 className="text-[1.5rem]">Mark Store</h1>
        </Link>
        <HeaderRightCategory />
      </nav>
    </header>
  );
};

export default Header;
