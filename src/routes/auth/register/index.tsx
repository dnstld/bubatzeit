import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { SafeAreaView, View } from 'react-native';
import { Button } from 'react-native-paper';

import { styles } from './styles';
import AuthHeader from '../../../components/auth-header';
import { ClubNameInput } from '../../../components/club-name-input';
import DismissKeyboard from '../../../components/dismiss-keyboard';
import { EmailInput } from '../../../components/email-input';
import { NewPasswordInput } from '../../../components/new-password-input';
import { ScreenProps as AuthScreenProps } from '../__layout/types';

type FormValues = {
  email: string;
  clubName: string;
};

export const Register = ({ navigation }: AuthScreenProps<'Register'>) => {
  const form = useForm<FormValues>();

  const onSubmit = form.handleSubmit(async (data) => {
    console.log('Submitted Data:', data);
    navigation.navigate('Primary', { screen: 'Home' });
  });

  return (
    <DismissKeyboard>
      <FormProvider {...form}>
        <SafeAreaView style={styles.container}>
          <View style={styles.content}>
            <AuthHeader title="Registrierung" />

            <EmailInput />
            <ClubNameInput />
            <NewPasswordInput email="contato@denistoledo.com.br" />

            <Button
              mode="contained"
              icon="account-plus"
              onPress={onSubmit}
              loading={form.formState.isSubmitting}
              style={styles.submitButton}
            >
              Registrieren
            </Button>
          </View>
        </SafeAreaView>
      </FormProvider>
    </DismissKeyboard>
  );
};
