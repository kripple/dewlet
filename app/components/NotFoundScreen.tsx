import { Button } from '@/app/components/Button';
import { useNavigation } from '@/app/hooks/useNavigation';
import { styles } from '@/app/style';
import { Text, View } from 'react-native';

export function NotFoundScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Not Found</Text>
      <Button
        onPress={() => navigation.replace('Home')}
        accessibilityLabel="Navigate to home screen"
        variant="link"
      >
        Return Home
      </Button>
    </View>
  );
}
