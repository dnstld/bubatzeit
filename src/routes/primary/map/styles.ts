import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 32,
  },
  marker: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: 'rgba(0,100,0, 0.3)',
    zIndex: 1,
  },
  selected: {
    backgroundColor: 'rgba(0,100,0, 1)',
  },
  bottomSheet: {
    flex: 1,
  },
});
