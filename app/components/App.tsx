import { Navigation, linking } from '@/app/components/Navigation';
import { Text } from 'react-native';

export function App() {
  return <Navigation linking={linking} fallback={<Text>Loading...</Text>} />;
}
