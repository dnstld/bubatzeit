import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { ParamList as AuthParamList } from '../auth/__layout/types';
import { ParamList as PrimaryParamList } from '../primary/__layout/types';
import { ParamList as ProfileParamList } from '../profile/__layout/types';

export type ParamList = {
  Auth: NavigatorScreenParams<AuthParamList>;
  Primary: NavigatorScreenParams<PrimaryParamList>;
  Details: { id: string };
  Profile: NavigatorScreenParams<ProfileParamList>;
};

export type ScreenProps<T extends keyof ParamList> = NativeStackScreenProps<
  ParamList,
  T
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends ParamList {}
  }
}
