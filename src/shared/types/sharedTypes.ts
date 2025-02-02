export interface ClassNameProp {
  className?: string;
}

export type Review = {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
};

export type GalleryImage = {
  thumb: string;
  original: string;
};

export type Camper = {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: string;
  engine: string;
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;
  gallery: GalleryImage[];
  reviews: Review[];
};

export type Filter = {
  location: string;
  AC: '' | boolean;
  transmission: '' | 'automatic' | 'manual';
  kitchen: '' | boolean;
  TV: '' | boolean;
  bathroom: '' | boolean;
  form: '' | 'alcove' | 'fullyIntegrated' | 'panelTruck';
};

export type CampersParams = {
  page: number;
  limit: number;
  location: string;
  form: string;
  transmission: string;
  kitchen: string | boolean;
  TV: string | boolean;
  AC: string | boolean;
  bathroom: string | boolean;
};

export type CampersResponse = {
  total: number;
  items: Camper[];
};
