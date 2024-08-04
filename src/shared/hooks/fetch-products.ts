import axios from "axios";

export const dataFetching = async (types: string) => {
  const response = await axios.get(
    `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/products?populate=*&filters[type][$eq]=${types}`,
    {
      headers: {
        Authorization: `bearer ${import.meta.env.VITE_REACT_APP_API_TOKEN}`,
      },
    }
  );
  console.log(response);
  return response.data.data;
};
