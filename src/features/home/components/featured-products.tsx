import CardComponent from "@/shared/components/card-components";
import { FeaturedType } from "@/shared/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type TypeProp = {
  types: string;
};

const FeaturedProducts: React.FC<TypeProp> = ({ types }) => {
  // Define the query function
  const fetchProducts = async () => {
    const res = await axios.get(
      `${
        import.meta.env.VITE_REACT_APP_API_URL
      }/products?populate=*&filters[type][$eq]=${types}`,
      {
        headers: {
          Authorization: `bearer ${import.meta.env.VITE_REACT_APP_API_TOKEN}`,
        },
      }
    );
    return res.data.data;
  };
  const {
    data: myData,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products", types],
    queryFn: fetchProducts,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <section className="w-full py-10 container">
      <div className="flex flex-col md:flex-row justify-around w-full py-5">
        <h1>{types} Products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet modi
          autem pariatur?
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-evenly gap-x-9 w-full">
        {myData.map((data: FeaturedType) => (
          <CardComponent key={data.id} data={data} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
