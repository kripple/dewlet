import { useNavigation } from '@/app/hooks/useNavigation';
import { styles } from '@/app/style';
import { Button } from '@react-navigation/elements';
import { Text, View } from 'react-native';

export function NotFoundScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Not Found</Text>
      <Button onPress={() => navigation.replace('Home')}>Return Home</Button>
    </View>
  );
}
