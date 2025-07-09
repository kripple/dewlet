import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#34d399',
  primaryPressed: '#10b981',
  primaryLight: '#bbf3da',
  background: '#f3f4f6',
  textPrimary: '#333333',
  textSecondary: '#555555',
  error: '#e11d48',
};

export const layout = {
  elementHeight: 44,
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  text: {
    color: colors.textPrimary,
  },
});
