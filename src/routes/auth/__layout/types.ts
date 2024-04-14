import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import {
  ParamList as PrimaryParamList,
  ScreenProps as PrimaryScreenProps,
} from '../../__layout/types';

export type ParamList = {
  SignIn: undefined;
  SignOut: undefined;
  PasswordForgot: undefined;
  Register: undefined;
  ResetPassword: undefined;
};

export type ScreenProps<T extends keyof ParamList> = CompositeScreenProps<
  NativeStackScreenProps<ParamList, T>,
  PrimaryScreenProps<keyof PrimaryParamList>
>;
