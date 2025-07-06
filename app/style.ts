import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#047857',
  primaryPressed: '#035d4c',
  secondary: '#65a30d',
  background: '#f0fdf4',
  surface: '#d1fae5',
  textPrimary: '#1b4332',
  textSecondary: '#4b5563',
  accent: '#d9ed92',
  error: '#b91c1c',
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
