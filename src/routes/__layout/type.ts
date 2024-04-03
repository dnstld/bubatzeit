import { MaterialBottomTabScreenProps } from '@react-navigation/material-bottom-tabs';
import { NavigatorScreenParams } from '@react-navigation/native';

import { ParamList as DetailsParamList } from '../details/[id]/__layout/type';
import { ParamList as ClubsParamList } from '../clubs/__layout/type';
import { ParamList as HomeParamList } from '../home/__layout/type';
import { ParamList as MapParamList } from '../map/__layout/type';

export type ParamList = {
  Home: NavigatorScreenParams<HomeParamList>;
  Map: NavigatorScreenParams<MapParamList>;
  Clubs: NavigatorScreenParams<ClubsParamList>;
  Details: NavigatorScreenParams<DetailsParamList>;
};

export type ScreenProps<T extends keyof ParamList> =
  MaterialBottomTabScreenProps<ParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends ParamList {}
  }
}
