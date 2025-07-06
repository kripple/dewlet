import { styles } from '@/app/style';
import type { ReactNode } from 'react';
import { Pressable, Text, type PressableProps } from 'react-native';

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
