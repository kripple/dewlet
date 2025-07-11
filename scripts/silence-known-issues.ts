/**
 * Temporary silence unhelpful warnings
 * FIXME: remove when issue is resolved: https://github.com/expo/expo/issues/33248
 *
 * To use, copy snippet into `node_modules/expo-router/entry.js`.
 *
 */
const consoleWarn = console.warn;
console.warn = (...args) => {
  const knownIssues = [
    'props.pointerEvents is deprecated. Use style.pointerEvents',
    `"shadow*" style props are deprecated. Use "boxShadow"`,
  ];
  if (knownIssues.some((warning) => args[0].includes(warning))) {
    return;
  } else {
    console.info(args[0]);
    consoleWarn(...args);
  }
};
