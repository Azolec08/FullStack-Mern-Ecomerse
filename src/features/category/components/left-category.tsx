import { useSubCategories } from "@/shared/mutation/use-some-mutation";
import {
  setHandleMaxPrice,
  setHandleSort,
  setSelectedCats,
} from "@/shared/store/categorySlices";
import { RootState } from "@/shared/store/store";
import { SortTypes } from "@/shared/types";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import List from "./list";

const LeftCategory = () => {
  const state = useSelector((state: RootState) => state.category);
  const dispatch = useDispatch();

  const handleOnChangeMaxPrice = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    dispatch(setHandleMaxPrice(value));
  };

  const handleSortAsc = (sortOrder: string) => {
    dispatch(setHandleSort(sortOrder));
  };

  const handleSortDesc = (sortOrder: string) => {
    dispatch(setHandleSort(sortOrder));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.currentTarget.value); // Ensure it's a number
    const isChecked = e.target.checked;
    dispatch(
      setSelectedCats(
        isChecked
          ? [...state.selectedCats, value] // Add the category to the selected categories if checked
          : state.selectedCats.filter((item) => item !== value) // Remove it if unchecked
      )
    );
  };

  console.log(state.selectedCats);

  const { id } = useParams<{ id: string }>();
  const catId: number = id ? parseInt(id) : 1;

  const { data, isLoading, error } = useSubCategories(catId ?? null);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;

  return (
    <div className="flex min-h-[1000px] w-full">
      <div className="flex flex-col gap-y-4 w-[300px] container h-full sticky top-[80px] pb-7">
        <div className="flex w-full flex-col gap-y-2 items">
          <h1 className="font-semibold">Product Categories: {id}</h1>
          {data?.map((item: SortTypes) => (
            <div key={item.id} className="flex gap-x-2">
              <input
                type="checkbox"
                id={item.id?.toString()}
                value={item.id}
                onChange={handleChange}
              />
              <label htmlFor={item.id?.toString()}>
                {item.attributes.title}
              </label>
            </div>
          ))}
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
          {/* <button></button>
          <button></button> */}
        </div>
        <div className="flex w-full flex-col gap-y-2 items">
          <h1 className="font-semibold">Product Categories</h1>
          <div className="flex gap-x-2">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              checked={state.sort === "asc"} // Automatically check "asc"
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
              checked={state.sort === "desc"} // Automatically check "asc"
              onChange={() => handleSortDesc("desc")}
            />
            <label htmlFor="desc">Price(Highest first)</label>
          </div>
        </div>
      </div>
      <List
        catId={catId}
        maxPrice={state.maxPrice}
        sort={state.sort}
        subCats={state.selectedCats}
      />
    </div>
  );
};

export default LeftCategory;
