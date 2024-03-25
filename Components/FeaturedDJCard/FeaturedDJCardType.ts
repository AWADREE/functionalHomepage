type FeaturedDJ = {
  name: string;
  image: string;
  rating: number;
};
export type Props = {
  featuredDJ: FeaturedDJ;
  translateY: any;
  scale: any;
  myIndex: number;
  setIndex: (index: number) => void;
};
