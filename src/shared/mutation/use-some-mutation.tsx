import { useQuery } from "@tanstack/react-query";
import { dataFetching, subCategories } from "../hooks/fetch-products";

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
