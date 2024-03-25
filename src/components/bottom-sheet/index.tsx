import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import { useMemo, useRef } from 'react';
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

export default function CardTitle({ children }: Props) {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['75%'], []);

  return (
    <BottomSheetModal ref={bottomSheetModalRef} snapPoints={snapPoints}>
      <BottomSheetView style={styles.bottomSheet}>{children}</BottomSheetView>
    </BottomSheetModal>
  );
}
