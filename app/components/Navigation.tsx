import { AboutScreen } from '@/app/components/AboutScreen';
import { HomeScreen } from '@/app/components/HomeScreen';
import { NotFoundScreen } from '@/app/components/NotFoundScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Linking from 'expo-linking';

export const linking = {
  enabled: 'auto' as const,
  prefixes: [Linking.createURL('/'), 'https://app.example.com'],
  // filter: (url: string) => !url.includes('+expo-auth-session'),
};

const tabs = {
  // 'Home' must be listed first so that 'auto' linking (above) uses it as root
  Home: {
    screen: HomeScreen,
    options: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
        <Ionicons
          name={focused ? 'home-sharp' : 'home-outline'}
          color={color}
          size={24}
        />
      ),
    },
  },

  About: {
    screen: AboutScreen,
    options: {
      tabBarLabel: 'About',
      tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
        <Ionicons
          name={focused ? 'information-circle' : 'information-circle-outline'}
          color={color}
          size={24}
        />
      ),
    },
  },
};
type Tab = keyof typeof tabs;

const Tabs = createBottomTabNavigator<typeof tabs>({
  screens: tabs,
  screenOptions: {
    headerShown: false, // use screens (Stack) header instead
  },
});

const screens = {
  Tabs,
  NotFound: {
    screen: NotFoundScreen,
    linking: { path: '*' },
    options: { title: 'Page Not Found' },
  },
};
type AdditionalScreens = Exclude<keyof typeof screens, 'Tabs'>;

const Stack = createNativeStackNavigator<typeof screens>({
  initialRouteName: 'Tabs',
  screenOptions: { title: 'Dewlet' },
  screens,
});

export const Navigation = createStaticNavigation(Stack);

export type StackParamList = {
  Tabs:
    | {
        screen: Tab;
        params?: undefined;
      }
    | undefined;
} & {
  [screen in AdditionalScreens]: undefined;
};
