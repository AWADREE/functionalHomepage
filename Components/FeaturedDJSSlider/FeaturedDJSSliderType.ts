export type Props = {};

type FeaturedDJ = {
  image: string;
  name: string;
  rating: number;
};

export type FeaturedDJS = FeaturedDJ[];

type ViewableItemType = {
  index: number;
  isViewable: boolean;
  item: FeaturedDJ;
  key: string;
};

export type ViewableItemsType = ViewableItemType[];
