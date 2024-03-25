import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  MD3LightTheme,
  PaperProvider,
  adaptNavigationTheme,
} from 'react-native-paper';

import Root from './routes/__layout';
import { styles } from './styles';

const client = new ApolloClient({
  uri: 'http://192.168.178.21:4000/',
  cache: new InMemoryCache(),
});

const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: 'green',
  },
};

const { LightTheme } = adaptNavigationTheme({
  reactNavigationLight: DefaultTheme,
});

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheetModalProvider>
        <PaperProvider theme={theme}>
          <ApolloProvider client={client}>
            <NavigationContainer theme={LightTheme}>
              <StatusBar style="auto" />
              <Root />
            </NavigationContainer>
          </ApolloProvider>
        </PaperProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
