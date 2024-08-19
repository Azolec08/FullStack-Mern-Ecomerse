import { makeRequest } from "./makeRequest";

export const dataFetching = async (types: string) => {
  const response = await makeRequest.get(
    `/products?populate=*&filters[type][$eq]=${types}`
  );
  return response.data.data;
};

export const subCategories = async (catId: number) => {
  const response = await makeRequest.get(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );
  return response.data.data;
};
