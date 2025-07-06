import { Button } from '@/app/components/Button';
import { useTypedNavigation } from '@/app/hooks/useNavigation';
import { styles } from '@/app/style';
import { View } from 'react-native';

export function NotFoundScreen() {
  const navigation = useTypedNavigation();

  return (
    <View style={styles.container}>
      <Button
        onPress={() => navigation.replace('Tabs')}
        accessibilityLabel="Navigate to home screen"
        variant="link"
      >
        Click here to return home.
      </Button>
    </View>
  );
}
