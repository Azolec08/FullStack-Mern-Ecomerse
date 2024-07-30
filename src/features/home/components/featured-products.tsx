import CardComponent from "@/shared/components/card-components";
import { Datas } from "../constants";

type TypeProp = {
  types: string;
};

const FeaturedProducts: React.FC<TypeProp> = ({ types }) => {
  return (
    <section className="w-full py-10 container">
      <div className="flex flex-col md:flex-row justify-around w-full py-5">
        <h1>{types} Products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet modi
          autem pariatur?
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-evenly gap-x-9 w-full ">
        {Datas.map((data) => {
          return <CardComponent key={data.id} data={data} />;
        })}
      </div>
    </section>
  );
};

export default FeaturedProducts;
