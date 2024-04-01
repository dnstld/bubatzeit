import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { SafeAreaView, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

import { styles } from './styles';
import DismissKeyboard from '../../../components/dismiss-keyboard';
import FormInput from '../../../components/form-input';

type FormValues = {
  email: string;
  clubName: string;
};

export default function SignInScreen() {
  const form = useForm<FormValues>();
  const [secureTextEntry, setSecureTextEntry] = useState(true);

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
              label="Password"
              name="password"
              secureTextEntry={secureTextEntry}
              right={
                <TextInput.Icon
                  icon="eye"
                  onPress={() => setSecureTextEntry(!secureTextEntry)}
                />
              }
            />

            <Button
              mode="contained"
              icon="login"
              onPress={onSubmit}
              loading={form.formState.isSubmitting}
              style={styles.submitButton}
            >
              Sign in
            </Button>
          </View>
        </SafeAreaView>
      </FormProvider>
    </DismissKeyboard>
  );
}
