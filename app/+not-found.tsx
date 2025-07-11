import { Stack } from 'expo-router';
import { View } from 'react-native';
import { styles } from '@/constants/styles';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Page Not Found' }} />
      <View style={styles.container}>{/* content goes here */}</View>
    </>
  );
}
