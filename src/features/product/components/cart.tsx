import { useDispatch, useSelector } from "react-redux";

import { setQuantity } from "@/shared/store/productSlices";
import { RootState } from "@/shared/store/store";
import { Currency } from "@/shared/utils/currency";
import { Diff, Heart, ShoppingCart } from "lucide-react";

interface dataProps {
  title: string | undefined;
}

const Cart = ({ title }: dataProps) => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.product);

  const handleDecrementQuantity = () => {
    dispatch(setQuantity(state.quantity > 1 ? state.quantity - 1 : 1));
  };

  const handleIncrementQuantity = () => {
    dispatch(setQuantity(state.quantity + 1));
  };

  return (
    <div className="flex flex-col gap-y-4 w-full">
      <h1 className="text-[24px] font-bold">{title}</h1>
      <div className="flex flex-col gap-y-2">
        <span>{Currency(25)}</span>
        <p className="w-[25rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
          consequatur sequi quas expedita corrupti atque sunt autem eaque omnis
          tempore? Quas?
        </p>
      </div>
      <div className="flex flex-col gap-y-4">
        <div className="flex gap-x-2 items-center">
          <button
            className="w-[30px] h-[30px] bg-slate-200"
            onClick={handleDecrementQuantity}
          >
            -
          </button>
          <span className="w-4 flex justify-center">{state.quantity}</span>
          <button
            className="w-[30px] h-[30px] bg-slate-200"
            onClick={handleIncrementQuantity}
          >
            +
          </button>
        </div>
        <div>
          <button className="flex items-center gap-x-3 px-5 h-[35px] bg-blue-500 p-1 text-white">
            <ShoppingCart />
            ADD TO CART
          </button>
        </div>
        <div className="flex gap-x-4">
          <div className="flex items-center gap-x-2 text-blue-600">
            <Heart size={18} /> ADD TO WISHLIST
          </div>
          <div className="flex items-center gap-x-2 text-blue-600">
            <Diff size={18} />
            ADD TO COMPARE
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full ">
        <small>Vendor: Polo</small>
        <small>Product Type: Polo</small>
        <small>Tag: T-Shirt, Women, Top</small>
      </div>
      <hr />
      <div className=" w-full flex flex-col ">
        <small className="uppercase">Description</small>
        <small className="uppercase">addistional information</small>
        <small className="uppercase">FAQ</small>
      </div>
    </div>
  );
};

export default Cart;
