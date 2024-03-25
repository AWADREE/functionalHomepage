import { Dispatch, SetStateAction } from "react";
import { ImageSourcePropType } from "react-native";

export type Category = {
  categoryName: string;
  id: number;
};

export type Props = {
  icon: ImageSourcePropType;
  activeIcon: ImageSourcePropType;
  name: string;
  focused: boolean;
};

export type Categories = Category[];
