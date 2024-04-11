import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { SafeAreaView, View } from 'react-native';
import {
  Button,
  Divider,
  Text,
  TextInput as RNTextInput,
} from 'react-native-paper';

import { styles } from './styles';
import { ClubNameInput } from '../../../components/club-name-input';
import DismissKeyboard from '../../../components/dismiss-keyboard';
import { EmailInput } from '../../../components/email-input';
import { TextInput } from '../../../components/text-input';
import { ScreenProps as ProfileScreenProps } from '../__layout/types';

type FormValues = {
  email: string;
  clubName: string;
};

export const Club = ({ navigation }: ProfileScreenProps<'Club'>) => {
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
            <ClubNameInput value="Mary Jane Berlin" />

            <TextInput
              label="Vereinsbeschreibung"
              maxLength={300}
              multiline
              numberOfLines={3}
            />

            <View style={styles.title}>
              <Text>Kontakte</Text>
              <Divider />
            </View>

            <EmailInput
              value="mary@jane.com"
              left={<RNTextInput.Icon icon="email" />}
            />

            <TextInput
              label="Telefonnummer"
              left={<RNTextInput.Icon icon="phone" />}
              placeholder="z.B. +49 30 901820"
            />

            <TextInput
              label="Webseite"
              left={<RNTextInput.Icon icon="web" />}
              placeholder="z.B. maryjaneberlin.com"
            />

            {/* <TextInput
                label="Telegram"
                name="telefram"
                left={<TextInput.Icon icon="chat-outline" />}
              />

              <TextInput
                label="WhatsApp"
                name="whatsapp"
                left={<TextInput.Icon icon="chat-outline" />}
              />

              <View style={styles.title}>
                <Text>Groups</Text>
                <Divider />
              </View>

              <TextInput
                label="Telegram link"
                name="telefram"
                left={<TextInput.Icon icon="chat-outline" />}
                placeholder="e.g. t.me/maryjaneberlin"
              />

              <TextInput
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
};
