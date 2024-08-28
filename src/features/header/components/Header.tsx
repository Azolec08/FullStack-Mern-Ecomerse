import { Sidebar } from "@/shared/components/ui/sidebar";
import { handleOpenCart } from "@/shared/store/productSlices";
import { RootState } from "@/shared/store/store";
import { ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import CartContainer from "./cart-container";
import HeaderLeftCategory from "./header-left-category";
import HeaderRightCategory from "./header-right-category";

const Header = () => {
  const openState = useSelector((state: RootState) => state.product.open);
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.cart.products);

  const handleCart = () => {
    dispatch(handleOpenCart());
  };
  return (
    <header className="w-full h-[80px] sticky top-0 z-30 bg-[#eaf9e7]">
      <nav className="hidden lg:flex container w-full h-full justify-between py-[10px] ">
        <HeaderLeftCategory />
        <div className="h-full flex items-center">
          <h1 className="text-[1.3rem]">Food and Fashion Hub</h1>
        </div>
        <HeaderRightCategory />
      </nav>
      <div className="flex w-full h-full items-center justify-between lg:hidden container">
        <div className="flex gap-x-2">
          <img
            src="/images/header/logo3.webp"
            className="rounded-full w-10"
            alt=""
          />
        </div>
        <div className="flex gap-x-4">
          <Sidebar />
          <div className="relative">
            <span className="absolute text-[12px] bg-[#4ca771] px-[5px] text-white rounded-full -top-2 -right-1">
              {products.length}
            </span>
            <ShoppingCart
              onClick={handleCart}
              className="text-[#4ca771] cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className=" lg:hidden ">{openState && <CartContainer />}</div>
    </header>
  );
};

export default Header;
