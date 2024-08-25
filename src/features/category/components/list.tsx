import CardComponent from "@/shared/components/card-components";
import { useSubCategoryFilter } from "@/shared/mutation/use-some-mutation";
import { FeaturedType } from "@/shared/types";

type TypesProps = {
  catId: number;
  maxPrice: number;
  sort: string;
  subCats: number[];
};

const List: React.FC<TypesProps> = ({
  catId,
  maxPrice,
  sort,
  subCats,
}: TypesProps) => {
  const {
    data: myData,
    isLoading,
    error,
  } = useSubCategoryFilter(catId, subCats, maxPrice, sort);

  if (isLoading) return <div className="w-full">Loading...</div>;
  if (error) return <div>Error</div>;

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
        {myData.map((item: FeaturedType) => {
          return <CardComponent key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default List;
