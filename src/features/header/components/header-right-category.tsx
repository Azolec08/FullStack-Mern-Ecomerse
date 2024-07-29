import { Heart, Search, ShoppingCart, UserRound } from "lucide-react";
import { Link } from "react-router-dom";
import { DataLinks } from "../constants";

const HeaderRightCategory = () => {
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
          <ShoppingCart size={18} />
          <span className="absolute text-[12px] bg-blue-600 px-[5px] text-white rounded-full -top-2 -right-2">
            0
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeaderRightCategory;
