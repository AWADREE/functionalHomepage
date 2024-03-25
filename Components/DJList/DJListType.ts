export type Props = {};

type Categories = string[];

type DJ = {
  image: string;
  name: string;
  age: number;
  place: string;
  rating: number;
  anth: string;
  categories: Categories;
};

export type DJS = DJ[];
