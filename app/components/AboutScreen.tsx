import { StyleSheet, Text, View } from 'react-native';

export function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Screen</Text>
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
