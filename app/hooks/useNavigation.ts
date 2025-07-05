import { useNavigation as useReactNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export const useNavigation = useReactNavigation<
  NativeStackNavigationProp<RootStackParamList>
>;
