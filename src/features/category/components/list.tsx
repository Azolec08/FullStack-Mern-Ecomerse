import CardComponent from "@/shared/components/card-components";
import { Datas } from "../constants";

const List = () => {
  return (
    <div className="w-full flex flex-col gap-y-10 ">
      <div className="grid grid-cols-3 gap-2">
        {Datas.map((data) => {
          return <CardComponent key={data.id} data={data} />;
        })}
      </div>
    </div>
  );
};

export default List;
