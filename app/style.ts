import { StyleSheet } from 'react-native';

const colors = {
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
const layout = {
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

  pressable: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: layout.elementHeight / 2,
    alignItems: 'center',
    justifyContent: 'center',
    height: layout.elementHeight,
  },

  buttonPressable: {
    backgroundColor: colors.primary,
  },
  buttonPressed: {
    backgroundColor: colors.primaryPressed,
  },
  buttonText: {
    color: colors.background,
    fontWeight: '600',
    fontSize: 16,
  },

  linkPressable: {
    backgroundColor: 'transparent',
  },
  linkText: {
    color: colors.textSecondary,
    textDecorationLine: 'underline',
    fontWeight: '500',
    fontSize: 16,
  },
});
