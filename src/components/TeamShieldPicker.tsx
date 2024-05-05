import React, { PropsWithChildren } from 'react';
import { StyleSheet, Modal, View, Pressable, Text, GestureResponderEvent } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { theme } from '../theme';

type TeamShieldPicker = PropsWithChildren & {
  isVisible: boolean;
  onClose: (event: GestureResponderEvent) => void;
}

const TeamShieldPicker = ({ children, isVisible, onClose }: TeamShieldPicker) => {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Escolha um adesivo</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" size={22} color={theme.colors.balticSea} />
          </Pressable>
        </View>
        {children}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    width: '100%',
    height: '20%',
    backgroundColor: theme.colors.balticSea,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: 'absolute',
    bottom: 0,
  },
  titleContainer: {
    height: '16%',
    backgroundColor: theme.colors.algaeGreen,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: theme.colors.balticSea,
    fontSize: 16,
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
    paddingVertical: 20,
  },
});

export default TeamShieldPicker;
