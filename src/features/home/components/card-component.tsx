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
        <CardContent>
          <img src={data.img} alt="" className="w-[180px] h-[180px]" />
        </CardContent>
        <CardFooter>
          <p>{Currency(data.price)}</p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CardComponent;
