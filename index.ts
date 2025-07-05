import { App } from '@/app/components/App';
import { registerRootComponent } from 'expo';

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

registerRootComponent(App);
