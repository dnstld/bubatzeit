import { Image, View } from 'react-native';
import { Text } from 'react-native-paper';

import { styles } from './styles';

type Props = {
  title: string;
  subtitle?: string;
};

export default function AuthHeader({ title, subtitle }: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={require('/Users/denistoledo/Documents/playground/online/bubatzeit/assets/images/illustration.png')}
      />
      <Text variant="headlineSmall">{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
}
