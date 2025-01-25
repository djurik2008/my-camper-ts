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
  [key: string]: boolean | string | number | object[];
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
