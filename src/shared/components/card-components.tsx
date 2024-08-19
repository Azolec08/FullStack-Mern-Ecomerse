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
  data: FeaturedType;
}

const CardComponent = ({ data }: DataProps) => {
  return (
    <Link to={`/product/${data.id}`}>
      <Card>
        <CardHeader>
          <CardTitle>{data.attributes.title}</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent className="relative group w-full">
          {data.attributes.isNew && (
            <span className="text-[8px] font-medium p-1 bg-blue-400 text-white absolute top-2 z-20">
              New Season
            </span>
          )}
          <img
            src={
              import.meta.env.VITE_REACT_APP_UPLOAD_URL +
              data?.attributes?.img?.data?.attributes?.url
            }
            alt=""
            className="w-full h-[180px] md:h-[250px] lg:h-[220px]"
          />

          <img
            src={
              import.meta.env.VITE_REACT_APP_UPLOAD_URL +
              data?.attributes?.img2?.data?.attributes?.url
            }
            alt=""
            className="w-full h-[180px] md:h-[250px] lg:h-[220px] px-6 absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition"
          />
        </CardContent>
        <CardFooter className="gap-x-3">
          <h3 className="text-gray-400 line-through">
            {Currency(data?.attributes.oldPrice || data?.attributes.price * 2)}
          </h3>
          <h3>{Currency(data?.attributes.price)}</h3>
          {/* <h3 className="text-[12px]">
            {data.attributes.createdAt.replace("T", "-").slice(0, 16)}
          </h3> */}
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CardComponent;
