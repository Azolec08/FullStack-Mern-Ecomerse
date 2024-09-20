import { makeRequest } from "./makeRequest";

export const dataFetching = async (types: string) => {
  const response = await makeRequest.get(
    `/products?populate=*&[filters][type][$eq]=${types}`
  );
  return response.data.data;
};

export const subCategories = async (catId: number) => {
  const response = await makeRequest.get(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );
  return response.data.data;
};

export const subCategoriesFilter = async (
  catId: number,
  subCats: number[],
  maxPrice: number,
  sort: string
) => {
  const response = await makeRequest.get(
    `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );
  return response.data.data;
};

export const singleProduct = async (catId: number) => {
  const response = await makeRequest.get(`/products/${catId}?populate=*`);
  return response.data.data;
};
