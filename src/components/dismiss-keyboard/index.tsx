import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';

import { styles } from './styles';

export default function DismissKeyboard({ children }) {
  return (
    <TouchableWithoutFeedback
      style={styles.container}
      onPress={Keyboard.dismiss}
    >
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        {children}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
