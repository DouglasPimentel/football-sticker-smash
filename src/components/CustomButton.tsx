import { StyleSheet, View, Pressable, Text, GestureResponderEvent } from 'react-native';
import { theme } from '../theme';

type CustomButtonProps = {
  primary?: boolean;
  label: string;
  onPress: (event: GestureResponderEvent) => void;
};

const CustomButton = ({ primary, label, onPress }: CustomButtonProps) => {
  return (
    <View style={styles.buttonContainer}>
       <Pressable style={[styles.button, primary ? styles.button : styles.buttonSecondary]} onPress={onPress}>
          <Text style={[styles.buttonLabel, primary ? styles.buttonLabel : styles.buttonSecondaryLabel]}>{label}</Text>
        </Pressable>
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
  buttonPrimary: {
    backgroundColor: theme.colors.algaeGreen,
  },
  buttonPrimaryLabel: {
    color: theme.colors.balticSea,
  },
  buttonSecondary: {
    backgroundColor: theme.colors.balticSea,
  },
  buttonSecondaryLabel: {
    color: theme.colors.desertStorm,
  },
});

export default CustomButton;
