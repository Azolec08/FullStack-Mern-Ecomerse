import { useQuery } from "@tanstack/react-query";
import {
  dataFetching,
  singleProduct,
  subCategories,
  subCategoriesFilter,
} from "../hooks/fetch-products";

import { SingleProductTypes } from "../types";

export const useFetchQuery = (types: string) => {
  return useQuery({
    queryKey: ["products", types],
    queryFn: () => dataFetching(types),
  });
};

export const useSubCategories = (catId: number) => {
  return useQuery({
    queryKey: ["sub-categories", catId],
    queryFn: () => subCategories(catId),
  });
};

export const useSubCategoryFilter = (
  catId: number,
  subCats: number[],
  maxPrice: number,
  sort: string
) => {
  return useQuery({
    queryKey: ["products", catId, subCats, maxPrice, sort],
    queryFn: () => subCategoriesFilter(catId, subCats, maxPrice, sort),
  });
};

export const useSingleProduct = (catId: number) => {
  return useQuery<SingleProductTypes>({
    queryKey: ["products", catId],
    queryFn: () => singleProduct(catId),
  });
};
