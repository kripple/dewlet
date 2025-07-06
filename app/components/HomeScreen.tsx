import { Button } from '@/app/components/Button';
import { useNavigation } from '@/app/hooks/useNavigation';
import { styles } from '@/app/style';
import { Text, View } from 'react-native';

export function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate('About')}
        accessibilityLabel="Learn more about Dewlet"
      >
        About
      </Button>
    </View>
  );
}
