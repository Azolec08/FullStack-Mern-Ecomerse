import { FeaturedType } from "@/shared/types";
import { Currency } from "@/shared/utils/currency";
import { Trash2 } from "lucide-react";

type DataProps = {
  data: FeaturedType;
};

const CardItem: React.FC<DataProps> = ({ data }) => {
  return (
    <div className="w-full ">
      <div className="flex gap-x-3 items-center ">
        <div className="flex ">
          <img
            src="https://images.pexels.com/photos/346746/pexels-photo-346746.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="w-[80px] h-[75px] "
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <h3 className="font-semibold text-[12]">{data.title}</h3>
          <p className="text-[12px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
          </p>
          <span>
            {data.price} x {Currency(20)}
          </span>
        </div>
        <button>
          <Trash2 size={20} className="text-red-500" />
        </button>
      </div>
    </div>
  );
};

export default CardItem;
