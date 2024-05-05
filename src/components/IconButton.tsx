import { StyleSheet, Pressable, Text, GestureResponderEvent } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '../theme';

type IconButtonProps = {
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
  onPress: (event: GestureResponderEvent) => void;
};

const IconButton = ({ icon, label, onPress }: IconButtonProps) => {
  return (
    <Pressable onPress={onPress}>
      <MaterialIcons style={styles.icon} name={icon} size={25} color={theme.colors.desertStorm} />
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconButtonLabel: {
    marginTop: 12,
    color: theme.colors.white,
  },
  icon: {
    textAlign: 'center',
  },
});

export default IconButton;
