import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  MD3LightTheme,
  useTheme as usePaperTheme,
  adaptNavigationTheme,
} from 'react-native-paper';

const { LightTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

export const theme = {
  ...MD3LightTheme,
  ...LightTheme,

  colors: {
    ...MD3LightTheme.colors,
    ...LightTheme.colors,
    primary: 'rgb(77, 103, 6)',
  },
};

export type Theme = typeof theme;

export const useTheme = () => usePaperTheme<Theme>();
