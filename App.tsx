import { StatusBar } from 'expo-status-bar';
import { Badge, PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <Badge>Open up App.tsx to start working on your app!</Badge>
      <StatusBar style="auto" />
    </PaperProvider>
  );
}
