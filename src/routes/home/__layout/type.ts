import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import {
  ParamList as RootParamList,
  ScreenProps as RootScreenProps,
} from '../../__layout/type';

export type ParamList = {
  Primary: undefined;
  SignIn: undefined;
  SignOut: undefined;
  Register: undefined;
  Profile: undefined;
  Location: undefined;
  ResetPassword: undefined;
  PasswordForgotten: undefined;
};

export type ScreenProps<T extends keyof ParamList> = CompositeScreenProps<
  NativeStackScreenProps<ParamList, T>,
  RootScreenProps<keyof RootParamList>
>;
