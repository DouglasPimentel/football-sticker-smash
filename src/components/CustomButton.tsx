import { StyleSheet, View, Pressable, Text, GestureResponderEvent } from 'react-native';
import { theme } from '../theme';

type CustomButtonProps = {
  primary?: boolean;
  label: string;
  onPress: () => void;
};

const CustomButton = ({ primary, label, onPress }: CustomButtonProps) => {
  return (
    <View style={styles.buttonContainer}>
      {primary ? (
        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
      ) : (
        <Pressable style={styles.buttonSecondary} onPress={onPress}>
          <Text style={styles.buttonSecondaryLabel}>{label}</Text>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    padding: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.colors.algaeGreen,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLabel: {
    fontSize: 18,
    color: theme.colors.balticSea,
    fontWeight: '700',
  },
  buttonSecondary: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.colors.balticSea,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSecondaryIcon: {
    paddingRight: 8,
  },
  buttonSecondaryLabel: {
    fontSize: 18,
    color: theme.colors.desertStorm,
    fontWeight: '700',
  },
});

export default CustomButton;
