import { Avatar, Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from './styles';
import WeedSvg from '../weed-svg';

type Props = {
  type?: 'icon' | 'text';
  title: string;
  subtitle?: string;
  showDots?: boolean;
  imageUri?: string;
};

const getInitials = (title: string) => {
  const words = title.trim().split(' ');
  if (words.length === 1) {
    return title.charAt(0).toUpperCase();
  } else {
    return words[0].charAt(0).toUpperCase() + words[1].charAt(0).toUpperCase();
  }
};

export default function CardTitle({
  title,
  subtitle,
  showDots = false,
  type = 'text',
  imageUri = '',
}: Props) {
  return (
    <Card.Title
      title={title}
      titleStyle={styles.title}
      titleVariant="titleMedium"
      subtitle={subtitle}
      subtitleStyle={styles.subtitle}
      subtitleVariant="bodySmall"
      left={() =>
        imageUri?.length > 0 ? (
          <Avatar.Image size={42} source={{ uri: imageUri }} />
        ) : type === 'icon' ? (
          <Avatar.Icon size={42} icon={() => <WeedSvg size={24} />} />
        ) : (
          <Avatar.Text
            size={42}
            label={getInitials(title)}
            labelStyle={styles.avatar}
          />
        )
      }
      right={() => showDots && <Icon name="dots-vertical" size={24} />}
    />
  );
}
