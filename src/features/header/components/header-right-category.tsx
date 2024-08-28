import { handleOpenCart } from "@/shared/store/productSlices";
import { RootState } from "@/shared/store/store";
import { Search, ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DataLinks } from "../constants";
import CartContainer from "./cart-container";

const HeaderRightCategory = () => {
  const dispatch = useDispatch();
  const openState = useSelector((state: RootState) => state.product.open);
  const handleCart = () => {
    dispatch(handleOpenCart());
  };

  const products = useSelector((state: RootState) => state.cart.products);
  return (
    <div className=" flex gap-x-5 items-center ">
      {DataLinks.map((data) => {
        return (
          <Link to={data.link} key={data.name} className="text-[#013237]">
            {data.name}
          </Link>
        );
      })}
      <div className="flex gap-x-3">
        <Search size={18} />
        <div className="relative">
          <ShoppingCart onClick={handleCart} className="cursor-pointer" />
          <span className="absolute text-[12px] bg-[#4ca771] px-[5px] text-white rounded-full -top-2 -right-2">
            {products.length}
          </span>
          {openState && <CartContainer />}
        </div>
      </div>
    </div>
  );
};

export default HeaderRightCategory;
