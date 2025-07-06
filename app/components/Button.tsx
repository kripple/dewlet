import { colors, layout } from '@/app/style';
import type { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, type PressableProps } from 'react-native';

export function Button({
  children,
  variant,
  ...props
}: PressableProps & { children: ReactNode; variant?: 'button' | 'link' }) {
  const pressableStyle: PressableProps['style'] =
    variant === 'link'
      ? () => [styles.pressable, styles.linkPressable]
      : ({ pressed }) => [
          styles.pressable,
          styles.buttonPressable,
          pressed && styles.buttonPressed,
        ];
  const textStyle = variant === 'link' ? styles.linkText : styles.buttonText;

  return (
    <Pressable {...props} style={pressableStyle}>
      <Text style={textStyle}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
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
