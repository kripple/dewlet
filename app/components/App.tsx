import { Navigation, linking } from '@/app/components/Navigation';
import { Text, StatusBar } from 'react-native';

export function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Navigation linking={linking} fallback={<Text>Loading...</Text>} />
    </>
  );
}
