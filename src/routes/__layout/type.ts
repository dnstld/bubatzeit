import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type ParamsList = {
  Home: undefined;
  Map: undefined;
  Clubs: undefined;
};

export type ScreenProps<T extends keyof ParamsList> = BottomTabScreenProps<
  ParamsList,
  T
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends ParamsList {}
  }
}
