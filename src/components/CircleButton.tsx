import { StyleSheet, View, Pressable, GestureResponderEvent } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '../theme';

type CircleButton = {
  onPress: (event: GestureResponderEvent) => void;
};

 const CircleButton = ({ onPress }: CircleButton) => {
  return (
    <View style={styles.circleButtonContainer}>
      <Pressable style={styles.circleButton} onPress={onPress}>
        <MaterialIcons name="add" size={38} color={theme.colors.balticSea} />
      </Pressable>
    </View>
  );
 };

 const styles = StyleSheet.create({
  circleButtonContainer: {
    width: 84,
    height: 84,
    marginHorizontal: 60,
    borderWidth: 4,
    borderColor: theme.colors.algaeGreen,
    borderRadius: 42,
    padding: 3,
  },
  circleButton: {
    backgroundColor: theme.colors.desertStorm,
    borderRadius: 42,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

 export default CircleButton;
