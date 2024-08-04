import { useQuery } from "@tanstack/react-query";
import { dataFetching } from "../hooks/fetch-products";

export const useFetchQuery = (types: string) => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => dataFetching(types),
  });
};
