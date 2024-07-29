import CardComponent from "./card-component";

type TypeProp = {
  types: string;
};

const FeaturedProducts: React.FC<TypeProp> = ({ types }) => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/9851626/pexels-photo-9851626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      img2: "https://images.pexels.com/photos/27251675/pexels-photo-27251675/free-photo-of-portrait-of-a-woman-dressed-in-beige.jpeg?auto=compress&cs=tinysrgb&w=600",
      isNew: true,
      title: "Long Sleeve",
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/8151691/pexels-photo-8151691.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Coat",
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/8441596/pexels-photo-8441596.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Hat",
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/27240725/pexels-photo-27240725/free-photo-of-woman-in-sunglasses-and-shirt-lying-down-on-couch.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Skirt",
      oldPrice: 19,
      price: 12,
    },
  ];

  return (
    <div className="w-[100vw] py-10">
      <div className="flex justify-around w-full py-5">
        <h1>{types} Products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet modi
          autem pariatur?
        </p>
      </div>
      <div className="flex items-center justify-center gap-x-9 ">
        {data.map((data) => {
          return <CardComponent key={data.id} data={data} />;
        })}
      </div>
    </div>
  );
};

export default FeaturedProducts;
