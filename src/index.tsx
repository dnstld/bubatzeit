import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PaperProvider } from 'react-native-paper';

import Root from './routes/__layout';
import { styles } from './styles';

const client = new ApolloClient({
  uri: 'http://192.168.178.21:4000/',
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheetModalProvider>
        <PaperProvider>
          <ApolloProvider client={client}>
            <NavigationContainer>
              <StatusBar style="auto" />
              <Root />
            </NavigationContainer>
          </ApolloProvider>
        </PaperProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
