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
  selectedCats: number[];
};

export type ProductTypes = {
  selectedImg: string;
  quantity: number;
  open: boolean;
};

export type SortTypes = {
  id?: number | string;
  attributes: {
    title: string;
  };
};

export type ImageData = {
  data: {
    attributes: {
      url: string;
    };
  };
};

export type SingleProductTypes = {
  id: number;
  attributes: {
    title: string;
    img: ImageData;
    img2: ImageData;
    // other fields
  };
};
