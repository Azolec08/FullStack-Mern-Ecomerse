import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "@/shared/store/cartSlices";
import { setQuantity } from "@/shared/store/productSlices";
import { RootState } from "@/shared/store/store";
import { SingleProductTypes } from "@/shared/types";
import { Currency } from "@/shared/utils/currency";
import { getFullImageUrl } from "@/shared/utils/url-helper";
import { Diff, Heart, ShoppingCart } from "lucide-react";

type dataProps = {
  data: SingleProductTypes | undefined;
};

const Cart = ({ data }: dataProps) => {
  const dispatch = useDispatch();
  const quantity = useSelector((state: RootState) => state.product.quantity);

  const handleDecrementQuantity = () => {
    dispatch(setQuantity(quantity > 1 ? quantity - 1 : 1));
  };

  const handleIncrementQuantity = () => {
    dispatch(setQuantity(quantity + 1));
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: data?.id,
        title: data?.attributes.title,
        desc: data?.attributes.desc,
        price: data?.attributes.price, // Convert to number
        img: getFullImageUrl(data?.attributes.img.data.attributes.url),
        quantity: quantity,
      })
    );
  };

  return (
    <div className="flex flex-col gap-y-4 w-full">
      <h1 className="text-[24px] font-bold">{data?.attributes.title}</h1>
      <div className="flex flex-col gap-y-2">
        <span>{data && <span>{Currency(data?.attributes?.price)}</span>}</span>
        <p className="w-[25rem]">{data?.attributes.desc}</p>
      </div>
      <div className="flex flex-col gap-y-4">
        <div className="flex gap-x-2 items-center">
          <button
            className="w-[30px] h-[30px] bg-slate-200"
            onClick={handleDecrementQuantity}
          >
            -
          </button>
          <span className="w-4 flex justify-center">{quantity}</span>
          <button
            className="w-[30px] h-[30px] bg-slate-200"
            onClick={handleIncrementQuantity}
          >
            +
          </button>
        </div>
        <div>
          <button
            className="flex items-center gap-x-3 px-5 h-[35px] bg-blue-500 p-1 text-white"
            onClick={handleAddToCart}
          >
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
