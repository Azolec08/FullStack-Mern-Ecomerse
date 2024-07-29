export type CounterState = {
  value: number;
  open: boolean;
  name: string;
  currentSlide: number;
};

export type FeaturedType = {
  id: number;
  title: string;
  img: string;
  img2?: string;
  isNew?: boolean;
  oldPrice: number;
  price: number;
};
