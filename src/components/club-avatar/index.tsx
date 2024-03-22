import { Avatar, Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from './styles';

type Props = {
  title: string;
  address: {
    street: string;
    postalCode: string;
  };
  showDots?: boolean;
};

const getInitials = (title: string) => {
  const words = title.trim().split(' ');
  if (words.length === 1) {
    return title.charAt(0).toUpperCase();
  } else {
    return words[0].charAt(0).toUpperCase() + words[1].charAt(0).toUpperCase();
  }
};

export default function ClubAvatar({
  title,
  address: { street, postalCode },
  showDots = true,
}: Props) {
  return (
    <Card.Title
      title={title}
      titleStyle={styles.title}
      subtitle={`${street}, ${postalCode}`}
      subtitleStyle={styles.subtitle}
      subtitleVariant="bodySmall"
      left={() => (
        <Avatar.Text
          size={42}
          label={getInitials(title)}
          labelStyle={styles.avatar}
        />
      )}
      right={() => showDots && <Icon name="dots-vertical" size={24} />}
    />
  );
}
