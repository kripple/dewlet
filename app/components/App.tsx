import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AboutScreen } from '@/app/components/AboutScreen';
import { HomeScreen } from '@/app/components/HomeScreen';

const screens = {
  Home: {
    screen: HomeScreen,
  },
  About: AboutScreen,
} as const;

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screenOptions: { title: 'Dewlet' },
  screens,
});

const Navigation = createStaticNavigation(RootStack);

export function App() {
  return <Navigation />;
}
