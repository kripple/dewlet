import type { NavigationProp } from '@react-navigation/native';
import { useNavigation as useReactNavigation } from '@react-navigation/native';

export const useNavigation = useReactNavigation<
  NavigationProp<RootStackParamList>
>;
