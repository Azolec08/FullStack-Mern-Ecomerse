import CardComponent from "@/shared/components/card-components";
import { Datas } from "../constants";

const List = () => {
  return (
    <div className="w-full flex flex-col gap-y-10 ">
      <div className="-full">
        <img
          src="https://images.pexels.com/photos/3965557/pexels-photo-3965557.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="w-full h-[200px] object-cover"
        />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {Datas.map((data) => {
          return <CardComponent key={data.id} data={data} />;
        })}
      </div>
    </div>
  );
};

export default List;
