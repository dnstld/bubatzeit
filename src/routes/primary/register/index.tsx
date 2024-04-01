import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { SafeAreaView, View } from 'react-native';
import { Button } from 'react-native-paper';

import { styles } from './styles';
import DismissKeyboard from '../../../components/dismiss-keyboard';
import FormInput from '../../../components/form-input';

type FormValues = {
  email: string;
  clubName: string;
};

export default function RegisterScreen() {
  const form = useForm<FormValues>();

  const onSubmit = form.handleSubmit(async (data) => {
    console.log('Submitted Data:', data);
  });

  return (
    <DismissKeyboard>
      <FormProvider {...form}>
        <SafeAreaView style={styles.container}>
          <View style={styles.content}>
            <FormInput
              label="Email"
              name="email"
              keyboardType="email-address"
              rules={{
                pattern: {
                  value: /^[^\s@]+@[^\s@]+$/gi,
                  message: 'Insert a valid email',
                },
              }}
            />

            <FormInput
              label="Club name"
              name="clubName"
              keyboardType="default"
              rules={{
                maxLength: {
                  value: 50,
                  message: 'Too much characters',
                },
              }}
            />

            <Button
              mode="contained"
              icon="account-plus"
              onPress={onSubmit}
              loading={form.formState.isSubmitting}
              disabled={!form.formState.isDirty}
              style={styles.submitButton}
            >
              Register
            </Button>
          </View>
        </SafeAreaView>
      </FormProvider>
    </DismissKeyboard>
  );
}
