import { MaterialBottomTabScreenProps } from '@react-navigation/material-bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';

import {
  ParamList as RootParamList,
  ScreenProps as RootScreenProps,
} from '../../__layout/types';

export type ParamList = {
  Home: undefined;
  Map: undefined;
  Clubs: undefined;
};

export type ScreenProps<T extends keyof ParamList> = CompositeScreenProps<
  MaterialBottomTabScreenProps<ParamList, T>,
  RootScreenProps<keyof RootParamList>
>;
