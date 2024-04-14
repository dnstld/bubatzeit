import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IconButton } from 'react-native-paper';

import { ParamList } from './types';
import { PasswordForgot as PasswordForgotScreen } from '../password-forgot';
import { Register as RegisterScreen } from '../register';
import { ResetPassword as ResetPasswordScreen } from '../reset-password';
import { SignIn as SignInScreen } from '../sign-in';
import { SignOut as SignOutScreen } from '../sign-out';

const Stack = createNativeStackNavigator<ParamList>();

export const Auth = () => {
  return (
    <Stack.Navigator id="Auth" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignOut" component={SignOutScreen} />
      <Stack.Screen name="PasswordForgot" component={PasswordForgotScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
    </Stack.Navigator>
  );
};
