import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { SafeAreaView, View } from 'react-native';
import { Button, Divider, Text, TextInput } from 'react-native-paper';

import { styles } from './styles';
import DismissKeyboard from '../../../components/dismiss-keyboard';
import FormInput from '../../../components/form-input';

type FormValues = {
  email: string;
  clubName: string;
};

export default function ProfileScreen() {
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
              label="Club name"
              name="clubName"
              value="Mary Jane Berlin"
            />

            <FormInput
              label="Vereinsbeschreibung"
              name="description"
              numberOfLines={3}
            />

            <View style={styles.title}>
              <Text>Kontakte</Text>
              <Divider />
            </View>

            <FormInput
              label="E-mail"
              name="email"
              value="mary@jane.com"
              keyboardType="email-address"
              right={<TextInput.Icon icon="check" />}
            />

            <FormInput
              label="Telefonnummer"
              name="phoneNumber"
              left={<TextInput.Icon icon="phone" />}
              placeholder="z.B. +49 30 901820"
            />

            <FormInput
              label="Webseite"
              name="website"
              left={<TextInput.Icon icon="web" />}
              placeholder="z.B. maryjaneberlin.com"
            />

            {/* <FormInput
                label="Telegram"
                name="telefram"
                left={<TextInput.Icon icon="chat-outline" />}
              />

              <FormInput
                label="WhatsApp"
                name="whatsapp"
                left={<TextInput.Icon icon="chat-outline" />}
              />

              <View style={styles.title}>
                <Text>Groups</Text>
                <Divider />
              </View>

              <FormInput
                label="Telegram link"
                name="telefram"
                left={<TextInput.Icon icon="chat-outline" />}
                placeholder="e.g. t.me/maryjaneberlin"
              />

              <FormInput
                label="WhatsApp link"
                name="whatsapp"
                left={<TextInput.Icon icon="chat-outline" />}
                placeholder="e.g. https://chat.whatsapp/com/maryjaneberlin"
              /> */}

            <Button
              mode="contained"
              icon="account-check"
              onPress={onSubmit}
              loading={form.formState.isSubmitting}
              style={styles.submitButton}
            >
              Save
            </Button>
          </View>
        </SafeAreaView>
      </FormProvider>
    </DismissKeyboard>
  );
}
