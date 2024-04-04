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
    primary: 'rgb(42, 107, 41)',
    onPrimary: 'rgb(255, 255, 255)',
    primaryContainer: 'rgb(172, 244, 161)',
    onPrimaryContainer: 'rgb(0, 34, 2)',
    secondary: 'rgb(83, 99, 78)',
    onSecondary: 'rgb(255, 255, 255)',
    secondaryContainer: 'rgb(214, 232, 206)',
    onSecondaryContainer: 'rgb(17, 31, 15)',
    tertiary: 'rgb(56, 101, 106)',
    onTertiary: 'rgb(255, 255, 255)',
    tertiaryContainer: 'rgb(188, 235, 240)',
    onTertiaryContainer: 'rgb(0, 32, 34)',
    error: 'rgb(186, 26, 26)',
    onError: 'rgb(255, 255, 255)',
    errorContainer: 'rgb(255, 218, 214)',
    onErrorContainer: 'rgb(65, 0, 2)',
    background: 'rgb(252, 253, 246)',
    onBackground: 'rgb(26, 28, 25)',
    surface: 'rgb(252, 253, 246)',
    onSurface: 'rgb(26, 28, 25)',
    surfaceVariant: 'rgb(222, 228, 216)',
    onSurfaceVariant: 'rgb(66, 73, 63)',
    outline: 'rgb(115, 121, 111)',
    outlineVariant: 'rgb(194, 200, 189)',
    shadow: 'rgb(0, 0, 0)',
    scrim: 'rgb(0, 0, 0)',
    inverseSurface: 'rgb(47, 49, 45)',
    inverseOnSurface: 'rgb(241, 241, 235)',
    inversePrimary: 'rgb(145, 216, 136)',
    elevation: {
      level0: 'transparent',
      level1: 'rgb(242, 246, 236)',
      level2: 'rgb(235, 241, 230)',
      level3: 'rgb(229, 237, 223)',
      level4: 'rgb(227, 236, 221)',
      level5: 'rgb(223, 233, 217)',
    },
    surfaceDisabled: 'rgba(26, 28, 25, 0.12)',
    onSurfaceDisabled: 'rgba(26, 28, 25, 0.38)',
    backdrop: 'rgba(44, 50, 42, 0.4)',
  },
};

export type Theme = typeof theme;

export const useTheme = () => usePaperTheme<Theme>();
