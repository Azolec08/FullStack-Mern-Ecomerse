import {
  handleSelectedImgOne,
  handleSelectedImgTwo,
} from "@/shared/store/productSlices";
import { RootState } from "@/shared/store/store";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./cart";
const Product = () => {
  const state = useSelector((state: RootState) => state.product);
  const dispatch = useDispatch();
  const images = [
    "https://images.pexels.com/photos/346746/pexels-photo-346746.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3965557/pexels-photo-3965557.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  const handleOneImg = useCallback(() => {
    dispatch(handleSelectedImgOne());
  }, [dispatch]);

  const handleTwoImg = useCallback(() => {
    dispatch(handleSelectedImgTwo());
  }, [dispatch]);

  return (
    <section className="flex h-[550px]  container gap-x-5 flex-wrap w-full">
      <div className="flex flex-col gap-y-2">
        <div></div>
        <img
          src={images[0]}
          alt=""
          className="w-[100px] h-[100px] object-fit"
          onClick={handleOneImg}
        />
        <img
          src={images[1]}
          alt=""
          className="w-[100px] h-[100px] object-fit"
          onClick={handleTwoImg}
        />
      </div>
      <div className="">
        <img
          src={images[state.selectedImg]}
          alt=""
          className="h-[500px] w-[500px] object-fit"
        />
      </div>
      <div className="">
        <Cart />
      </div>
    </section>
  );
};

export default Product;
