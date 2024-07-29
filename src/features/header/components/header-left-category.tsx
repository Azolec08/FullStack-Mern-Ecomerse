import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { DataProducts } from "../constants";

const HeaderLeftCategory = () => {
  return (
    <div className="flex gap-x-5 items-center ">
      <div className="flex items-center justify-center">
        <img src="/images/header/en.png" alt="" />
        <ChevronDown />
      </div>
      <div className="flex items-center justify-center">
        <span>PHP</span>
        <ChevronDown />
      </div>
      {DataProducts.map((data) => {
        return (
          <Link to={data.link} key={data.name}>
            {data.name}
          </Link>
        );
      })}
    </div>
  );
};

export default HeaderLeftCategory;
