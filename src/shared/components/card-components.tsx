import { Currency } from "@/shared/utils/currency";
import { Link } from "react-router-dom";
import { FeaturedType } from "../types/index";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface DataProps {
  item: FeaturedType;
}

const CardComponent = ({ item }: DataProps) => {
  return (
    <Link to={`/product/${item.id}`}>
      <Card >
        <CardHeader>
          <CardTitle>{item.attributes.title}</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent className="relative group w-full">
          {item.attributes.isNew && (
            <span className="text-[8px] font-medium p-1 bg-blue-400 text-white absolute top-2 z-20">
              New Season
            </span>
          )}
          <img
            src={
              import.meta.env.VITE_REACT_APP_UPLOAD_URL +
              item?.attributes?.img?.data?.attributes?.url
            }
            alt=""
            className="w-full h-[180px] md:h-[250px] lg:h-[220px]"
          />

          <img
            src={
              import.meta.env.VITE_REACT_APP_UPLOAD_URL +
              item?.attributes?.img2?.data?.attributes?.url
            }
            alt=""
            className="w-full h-[180px] md:h-[250px] lg:h-[220px] px-6 absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition"
          />
        </CardContent>
        <CardFooter className="gap-x-3">
          <h3 className="text-gray-400 line-through">
            {Currency(item?.attributes.oldPrice || item?.attributes.price * 2)}
          </h3>
          <h3>{Currency(item?.attributes.price)}</h3>
          {/* <h3 className="text-[12px]">
            {data.attributes.createdAt.replace("T", "-").slice(0, 16)}
          </h3> */}
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CardComponent;
