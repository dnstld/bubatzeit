import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import {
  ParamList as RootParamList,
  ScreenProps as RootScreenProps,
} from '../../__layout/type';

export type ParamList = {
  Primary: undefined;
  Details: undefined;
};

export type ScreenProps<T extends keyof ParamList> = CompositeScreenProps<
  NativeStackScreenProps<ParamList, T>,
  RootScreenProps<keyof RootParamList>
>;
