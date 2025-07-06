import type { StackParamList } from '@/app/components/Navigation';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { useNavigation } from '@react-navigation/native';

export const useTypedNavigation = useNavigation<
  NativeStackNavigationProp<StackParamList>
>;
