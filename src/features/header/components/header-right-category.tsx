import { handleOpenCart } from "@/shared/store/productSlices";
import { RootState } from "@/shared/store/store";
import { Heart, Search, ShoppingCart, UserRound } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DataLinks } from "../constants";
import CardCart from "./card-cart";

const HeaderRightCategory = () => {
  const dispatch = useDispatch();
  const openState = useSelector((state: RootState) => state.product.open);
  const handleCart = () => {
    dispatch(handleOpenCart());
  };
  return (
    <div className=" flex gap-x-5 items-center ">
      {DataLinks.map((data) => {
        return (
          <Link to={data.link} key={data.name}>
            {data.name}
          </Link>
        );
      })}
      <div className="flex gap-x-3">
        <Search size={18} />
        <UserRound size={18} />
        <Heart size={18} />
        <div className="relative">
          <ShoppingCart onClick={handleCart} className="cursor-pointer" />
          <span className="absolute text-[12px] bg-blue-600 px-[5px] text-white rounded-full -top-2 -right-2">
            0
          </span>
          {openState && <CardCart />}
        </div>
      </div>
    </div>
  );
};

export default HeaderRightCategory;
