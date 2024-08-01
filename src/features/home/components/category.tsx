import { Link } from "react-router-dom";
const Category = () => {
  return (
    <section className="w-full min-h-[500px] lg:h-[500px] flex items-center justify-center">
      <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-1 container">
        <div className="w-full h-full grid grid-cols-2 gap-1">
          <div className="flex flex-col gap-1 h-full w-full">
            <Link to="/category/1" className="relative group w-full h-full">
              <img
                src="https://images.pexels.com/photos/3865911/pexels-photo-3865911.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="h-[220px] object-cover w-full"
              />
              <button className="absolute w-[100px] flex items-center justify-center  font-semibold bg-gray-200 h-[30px] m-auto  p-[10px] bottom-0 right-0 top-0 group-hover:text-white transition left-0 group-hover:bg-blue-600">
                Sale
              </button>
            </Link>
            <Link to="/category/2" className="relative  w-full h-full group">
              <img
                src="https://images.pexels.com/photos/972804/pexels-photo-972804.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="h-[220px] object-cover w-full"
              />
              <button className="absolute w-[100px] flex items-center justify-center  font-semibold bg-gray-200 h-[30px] m-auto  p-[10px] bottom-0 right-0 top-0 group-hover:text-white transition left-0 group-hover:bg-blue-600">
                Women
              </button>
            </Link>
          </div>
          <div className="w-full  bg-slate-300">
            <Link to="/category/3" className="relative h-full w-full group">
              <img
                src="https://images.pexels.com/photos/7679732/pexels-photo-7679732.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="h-[440px] object-cover  w-full"
              />
              <button className="absolute w-[100px] text-[14px] flex items-center justify-center  font-semibold bg-gray-200 h-[30px] m-auto  p-[10px] bottom-0 right-0 top-0 group-hover:text-white transition left-0 group-hover:bg-blue-600">
                New Season
              </button>
            </Link>
          </div>
        </div>

        {/* Barrrieeerrrrr */}
        <div className=" w-full  grid grid-rows-2 gap-1">
          <div className="flex  gap-1 ">
            <Link to="/category/4" className="relative  w-full h-full group">
              <img
                src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="h-[220px] object-cover w-full"
              />
              <button className="absolute w-[100px] flex items-center justify-center  font-semibold bg-gray-200 h-[30px] m-auto  p-[10px] bottom-0 right-0 top-0 group-hover:text-white transition left-0 group-hover:bg-blue-600">
                Men
              </button>
            </Link>
            <Link to="/category/5" className="relative  w-full h-full group">
              <img
                src="https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="h-[220px] object-cover w-full"
              />
              <button className="absolute w-[100px]  flex items-center justify-center  font-semibold bg-gray-200 h-[30px] m-auto  p-[10px] bottom-0 right-0 top-0 group-hover:text-white transition left-0 group-hover:bg-blue-600">
                Accessories
              </button>
            </Link>
          </div>
          <div className="w-full h-full ">
            <Link to="/category/6" className="relative h-full w-full group">
              <img
                src="https://images.pexels.com/photos/609771/pexels-photo-609771.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="h-[220px] object-cover w-full"
              />
              <button className="absolute w-[100px] flex items-center justify-center  font-semibold bg-gray-200 h-[30px] m-auto  p-[10px] bottom-0 right-0 top-0 group-hover:text-white transition left-0 group-hover:bg-blue-600">
                Shoes
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
