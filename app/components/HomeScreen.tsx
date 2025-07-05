import { useNavigation } from '@/app/hooks/useNavigation';
import { Button } from '@react-navigation/elements';
import { StyleSheet, Text, View } from 'react-native';

export function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Button onPress={() => navigation.navigate('About')}>About</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#25292e',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
  },
});
