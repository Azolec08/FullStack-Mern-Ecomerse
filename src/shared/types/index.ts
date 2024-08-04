export type CounterState = {
  value: number;
  open: boolean;
  name: string;
  currentSlide: number;
};

export interface FeaturedType {
  id: number;
  attributes: {
    title: string;
    description?: string;
    isNew: boolean;
    img: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    img2: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    oldPrice?: number;
    price: number;
  };
}

export type CategoryTypes = {
  maxPrice: number;
  sort: string;
};

export type ProductTypes = {
  selectedImg: number;
  quantity: number;
  open: boolean;
};
