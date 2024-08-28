import { Link } from "react-router-dom";
import { DataProducts } from "../constants";

const HeaderLeftCategory = () => {
  return (
    <div className="flex gap-x-5 items-center ">
      <Link to="/" className="flex items-center justify-center">
        <img
          src="/images/header/logo3.webp"
          alt=""
          className="rounded-full w-10"
        />
      </Link>
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
