import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '@/app/HomeScreen';

/**
 * Temporary silence unhelpful warnings
 * FIXME: remove when issue is resolved: https://github.com/expo/expo/issues/33248
 */
const consoleWarn = console.warn;
console.warn = (...args) => {
  const warning = 'props.pointerEvents is deprecated. Use style.pointerEvents';
  if (args[0].includes(warning)) return;
  consoleWarn(...args);
};

const RootStack = createNativeStackNavigator({
  screens: {
    Home: HomeScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export function App() {
  return <Navigation />;
}
