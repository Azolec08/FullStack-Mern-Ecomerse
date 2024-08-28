import { useSingleProduct } from "@/shared/mutation/use-some-mutation";
import {
  handleSelectedImgOne,
  handleSelectedImgTwo,
} from "@/shared/store/productSlices";
import { RootState } from "@/shared/store/store";
import { ImageData } from "@/shared/types";
import { getFullImageUrl } from "@/shared/utils/url-helper";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Cart from "./cart";

const Product = () => {
  const { id } = useParams<{ id: string }>();
  const catId: number = id ? parseInt(id) : 1;

  const state = useSelector((state: RootState) => state.product);
  const dispatch = useDispatch();

  const handleOneImg = useCallback(() => {
    dispatch(handleSelectedImgOne());
  }, [dispatch]);

  const handleTwoImg = useCallback(() => {
    dispatch(handleSelectedImgTwo());
  }, [dispatch]);

  const { data, isLoading, error } = useSingleProduct(catId);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;

  const selectedImageData = data?.attributes[
    state.selectedImg as keyof typeof data.attributes
  ] as ImageData;

  return (
    <section className="flex min-h-[550px]  container gap-x-5 flex-wrap w-full">
      <div className="flex flex-col gap-y-2">
        {data?.attributes?.img?.data?.attributes?.url && (
          <img
            src={getFullImageUrl(data?.attributes.img.data?.attributes?.url)}
            alt="Product Image"
            className="w-[100px] h-[100px] object-fit cursor-pointer"
            onClick={handleOneImg}
          />
        )}
        {data?.attributes?.img2?.data?.attributes?.url && (
          <img
            src={getFullImageUrl(data?.attributes.img2.data?.attributes?.url)}
            alt="Product Image2"
            className="w-[100px] h-[100px] object-fit cursor-pointer"
            onClick={handleTwoImg}
          />
        )}
      </div>
      <div className="h-[500px] w-[500px]">
        <img
          src={getFullImageUrl(selectedImageData.data?.attributes?.url)}
          alt=""
          className="h-full w-full "
        />
      </div>
      <div className="">
        <Cart data={data} />
      </div>
    </section>
  );
};

export default Product;
