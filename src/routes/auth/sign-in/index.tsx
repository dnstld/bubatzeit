import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { SafeAreaView, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { styles } from './styles';
import DismissKeyboard from '../../../components/dismiss-keyboard';
import { EmailInput } from '../../../components/email-input';
import { PasswordInput } from '../../../components/password-input';
import { ScreenProps as AuthScreenProps } from '../__layout/types';

type FormValues = {
  email: string;
  clubName: string;
};

export const SignIn = ({ navigation }: AuthScreenProps<'SignIn'>) => {
  const form = useForm<FormValues>();

  const onSubmit = form.handleSubmit(async (data) => {
    console.log('Submitted Data:', data);
    navigation.navigate('Primary', { screen: 'Home' });
  });

  const onPasswordForgotten = () => {
    navigation.navigate('PasswordForgotten');
  };

  return (
    <DismissKeyboard>
      <FormProvider {...form}>
        <SafeAreaView style={styles.container}>
          <View style={styles.content}>
            <Text>Anmeldenrung</Text>
            <EmailInput />
            <PasswordInput />

            <Button
              mode="contained"
              icon="login"
              onPress={onSubmit}
              loading={form.formState.isSubmitting}
              style={styles.submitButton}
            >
              Anmelden
            </Button>

            <Button onPress={onPasswordForgotten}>Password vergessen</Button>
          </View>
        </SafeAreaView>
      </FormProvider>
    </DismissKeyboard>
  );
};
