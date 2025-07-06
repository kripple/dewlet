import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AboutScreen } from '@/app/components/AboutScreen';
import { HomeScreen } from '@/app/components/HomeScreen';
import { NotFoundScreen } from '@/app/components/NotFoundScreen';
import { Text } from 'react-native';

import * as Linking from 'expo-linking';

const linking = {
  enabled: 'auto' as const,
  prefixes: [Linking.createURL('/'), 'https://app.example.com'],
  filter: (url: string) => !url.includes('+expo-auth-session'),
};

const screens = {
  Home: HomeScreen, // must be listed first
  About: AboutScreen,
};

const Tabs = createBottomTabNavigator({
  screens,
  screenOptions: {
    headerShown: false, // use Stack header instead
  },
});

const Stack = createNativeStackNavigator({
  initialRouteName: 'Tabs',
  screenOptions: { title: 'Dewlet' },
  screens: {
    Tabs,
    NotFound: {
      screen: NotFoundScreen,
      linking: { path: '*' },
      options: { title: 'Not Found' },
    },
  },
});
const Navigation = createStaticNavigation(Stack);

export function App() {
  return (
    <>
      <Navigation linking={linking} fallback={<Text>Loading...</Text>} />
    </>
  );
}
