import { handleCarousel } from "@/shared/store/counterSlices.";
import { RootState } from "@/shared/store/store";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataImage } from "../constants";

const Slider = () => {
  const dispatch = useDispatch();
  const currentSlide = useSelector(
    (state: RootState) => state.counter.currentSlide
  );

  const handleUsePrevCarousel = useCallback(() => {
    dispatch(handleCarousel(currentSlide === 0 ? 2 : currentSlide - 1));
  }, [dispatch, currentSlide]);

  const handleUseNextCarousel = useCallback(() => {
    dispatch(handleCarousel(currentSlide === 2 ? 0 : currentSlide + 1));
  }, [dispatch, currentSlide]);

  return (
    <div className="flex relative w-full overflow-x-hidden">
      <div
        className="flex transition-transform duration-500 "
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {DataImage.map((data) => (
          <div key={data.image} className="w-[100vw]">
            <img
              src={data.image}
              alt="home-carousel-image"
              className="w-full h-[100vh] object-cover"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-16 right-[45%] flex gap-x-10">
        <button
          onClick={handleUsePrevCarousel}
          className="hover:text-green-500 transition border-2 p-1 border-black"
        >
          <ArrowLeft />
        </button>
        <button
          onClick={handleUseNextCarousel}
          className="hover:text-green-500 transition border-2 p-1 border-black"
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Slider;
