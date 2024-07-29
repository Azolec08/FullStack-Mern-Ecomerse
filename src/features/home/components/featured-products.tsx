import { Datas } from "../constants";
import CardComponent from "./card-component";

type TypeProp = {
  types: string;
};

const FeaturedProducts: React.FC<TypeProp> = ({ types }) => {
  return (
    <section className="w-full py-10 container">
      <div className="flex justify-around w-full py-5">
        <h1>{types} Products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet modi
          autem pariatur?
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:flex items-center justify-center gap-x-9 w-full ">
        {Datas.map((data) => {
          return <CardComponent key={data.id} data={data} />;
        })}
      </div>
    </section>
  );
};

export default FeaturedProducts;
