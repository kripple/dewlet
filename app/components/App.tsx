import { Navigation, linking } from '@/app/components/Navigation';
import { Text, StatusBar } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { colors } from '@/app/style';

export function App() {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={colors.primaryLight} /> {/* TODO */}
      <SafeAreaView style={{ flex: 1 }}>
        <Navigation linking={linking} fallback={<Text>Loading...</Text>} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
