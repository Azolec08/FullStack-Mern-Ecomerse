import { removeItem } from "@/shared/store/cartSlices";
import { Product } from "@/shared/types";
import { Currency } from "@/shared/utils/currency";
import { Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
type DataProps = {
  data: Product;
};

const CardItem: React.FC<DataProps> = ({ data }) => {
  const dispatch = useDispatch();

  const handleDeleteItem = () => {
    dispatch(removeItem(data.id));
  };

  return (
    <div className="w-full ">
      <div className="flex gap-x-3 items-center ">
        <div className="flex ">
          <img src={data.img} alt="" className="w-[80px] h-[75px] " />
        </div>
        <div className="flex flex-col gap-y-1">
          <h3 className="font-semibold text-[12]">{data.title}</h3>
          <p className="text-[12px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
          </p>
          <span>
            {data.quantity} x {Currency(data.price)}
          </span>
        </div>
        <button onClick={handleDeleteItem}>
          <Trash2 size={20} className="text-red-500" />
        </button>
      </div>
    </div>
  );
};

export default CardItem;
