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
    primary: 'rgb(64, 105, 12)',
    onPrimary: 'rgb(255, 255, 255)',
    primaryContainer: 'rgb(192, 242, 135)',
    onPrimaryContainer: 'rgb(15, 32, 0)',
    secondary: 'rgb(174, 50, 8)',
    onSecondary: 'rgb(255, 255, 255)',
    secondaryContainer: 'rgb(255, 219, 209)',
    onSecondaryContainer: 'rgb(59, 9, 0)',
    tertiary: 'rgb(139, 80, 0)',
    onTertiary: 'rgb(255, 255, 255)',
    tertiaryContainer: 'rgb(255, 220, 190)',
    onTertiaryContainer: 'rgb(45, 22, 0)',
    error: 'rgb(186, 26, 26)',
    onError: 'rgb(255, 255, 255)',
    errorContainer: 'rgb(255, 218, 214)',
    onErrorContainer: 'rgb(65, 0, 2)',
    background: 'rgb(253, 252, 245)',
    onBackground: 'rgb(27, 28, 24)',
    surface: 'rgb(253, 252, 245)',
    onSurface: 'rgb(27, 28, 24)',
    surfaceVariant: 'rgb(225, 228, 213)',
    onSurfaceVariant: 'rgb(68, 72, 61)',
    outline: 'rgb(117, 121, 108)',
    outlineVariant: 'rgb(197, 200, 186)',
    shadow: 'rgb(0, 0, 0)',
    scrim: 'rgb(0, 0, 0)',
    inverseSurface: 'rgb(48, 49, 44)',
    inverseOnSurface: 'rgb(242, 241, 234)',
    inversePrimary: 'rgb(164, 213, 110)',
    elevation: {
      level0: 'transparent',
      level1: 'rgb(244, 245, 233)',
      level2: 'rgb(238, 240, 226)',
      level3: 'rgb(232, 236, 219)',
      level4: 'rgb(230, 234, 217)',
      level5: 'rgb(227, 231, 212)',
    },
    surfaceDisabled: 'rgba(27, 28, 24, 0.12)',
    onSurfaceDisabled: 'rgba(27, 28, 24, 0.38)',
    backdrop: 'rgba(46, 50, 40, 0.4)',
  },
};

export type Theme = typeof theme;

export const useTheme = () => usePaperTheme<Theme>();
