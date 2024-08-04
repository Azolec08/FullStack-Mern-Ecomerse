import { handleMaxPrice, handleSort } from "@/shared/store/categorySlices";
import { RootState } from "@/shared/store/store";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import List from "./list";

const LeftCategory = () => {
  const state = useSelector((state: RootState) => state.category);
  const dispatch = useDispatch();

  const handleOnChangeMaxPrice = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    dispatch(handleMaxPrice(value));
  };

  const handleSortAsc = (sortOrder: string) => {
    dispatch(handleSort(sortOrder));
  };

  const handleSortDesc = (sortOrder: string) => {
    dispatch(handleSort(sortOrder));
  };

  const catId = useParams();

  return (
    <div className="flex min-h-[1000px] w-full">
      <div className="flex flex-col gap-y-4 w-[300px] container h-full sticky top-[80px] pb-7">
        <div className="flex w-full flex-col gap-y-2 items">
          <h1 className="font-semibold">Product Categories</h1>
          <div className="flex gap-x-2">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Hat</label>
          </div>
          <div className="flex gap-x-2">
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="2">Tshirt</label>
          </div>
        </div>
        <div>
          <h1 className="font-semibold">Filter by price</h1>
          <div className="flex">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={handleOnChangeMaxPrice}
            />
            <span>{state.maxPrice}</span>
          </div>
        </div>
        <div className="flex w-full flex-col gap-y-2 items">
          <h1 className="font-semibold">Product Categories</h1>
          <div className="flex gap-x-2">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={() => handleSortAsc("asc")}
            />
            <label htmlFor="asc">Price(Lowest first)</label>
          </div>
          <div className="flex gap-x-2">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={() => handleSortDesc("desc")}
            />
            <label htmlFor="desc">Price(Highest first)</label>
          </div>
        </div>
      </div>
      <List catId={catId} maxPrice={state.maxPrice} sort={state.sort} />
    </div>
  );
};

export default LeftCategory;
