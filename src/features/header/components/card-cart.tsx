import { Datas } from "@/shared/constants";
import { Currency } from "@/shared/utils/currency";
import CardItem from "./card-item";

const CardCart = () => {
  return (
    <div className="w-full transition">
      <div className="z-50 flex  flex-col gap-y-4 absolute w-[400px]  py-5 bg-white container right-[-2rem] top-[3rem]">
        <h1 className="text-[18px] font-semibold ">Products in the cart</h1>
        {Datas?.map((data) => (
          <CardItem key={data.id} data={data} />
        ))}
        <div className="flex-col flex items-start gap-y-4 w-full">
          <div className="flex justify-between w-full">
            <h1 className=" text-[18px] uppercase font-semibold">subtotal</h1>
            <span>{Currency(1000)}</span>
          </div>
          <div className="flex flex-col items-start gap-y-2">
            <button className="bg-blue-600 text-[10px] text-white px-2 h-[30px]">
              Proceed to checkout
            </button>
            <button className="text-red-500">Reset Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCart;
