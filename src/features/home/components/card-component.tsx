import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { FeaturedType } from "@/shared/types";
import { Currency } from "@/shared/utils/currency";
import { Link } from "react-router-dom";

interface DataProps {
  data: FeaturedType;
}

const CardComponent = ({ data }: DataProps) => {
  return (
    <Link to={`/product/${data.id}`}>
      <Card>
        <CardHeader>
          <CardTitle>{data.title}</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent className="relative group">
          {data.isNew && (
            <span className="text-[8px] font-medium p-1 bg-blue-400 text-white absolute  top-2 z-20">
              New Season
            </span>
          )}
          <img
            src={data.img}
            alt=""
            className="w-full h-[250px] lg:w-[180px] lg:h-[180px] "
          />
          {data.img2 && (
            <img
              src={data.img2}
              alt=""
              className="w-full lg:w-[180px] lg:h-[180px] top-0 opacity-0 absolute group-hover:opacity-100 transition "
            />
          )}
        </CardContent>
        <CardFooter className="gap-x-3">
          <h3 className="text-gray-400 line-through">{Currency(data.price)}</h3>
          <h3>{Currency(data.price)}</h3>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CardComponent;
