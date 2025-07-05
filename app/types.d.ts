declare type AppRoute = 'Home' | 'About';

type RouteParams = { from?: string } | undefined;

declare type RootStackParamList = {
  [route in AppRoute]: RouteParams;
};
