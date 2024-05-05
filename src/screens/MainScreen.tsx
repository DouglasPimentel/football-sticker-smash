import React, { useState, useRef } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, View, Text, ImageURISource } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import { captureRef } from 'react-native-view-shot';
import { RootStackParamList } from '../navigation/RootStackParamList';
import { theme } from '../theme';

import ImageViewer from '../components/ImageViewer';
import CustomButton from '../components/CustomButton';
import CircleButton from '../components/CircleButton';
import IconButton from '../components/IconButton';
import TeamShieldPicker from '../components/TeamShieldPicker';
import TeamShieldList from '../components/TeamShieldList';
import TeamShieldSticker from '../components/TeamShieldSitcker';

type MainScreenProps = NativeStackScreenProps<RootStackParamList, 'Main'>;

const MainScreen = ({ navigation }: MainScreenProps) => {
  const [seletedImage, setSelectedImage] = useState<string | null>(null);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisibile, setIsModalVisible] = useState<boolean>(false);
  const [pickedTeamShield, setPickedTeamShield] = useState<ImageURISource | number | null>(null);
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const imageRef = useRef<View | null>(null);

  if (status === null) {
    requestPermission();
  }

  const pickerImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    }
  };

  const onReset = () => setShowAppOptions(false);

  const onAddSticker = () => setIsModalVisible(true);

  const onModalClose = () => setIsModalVisible(false);

  const onSaveImageAsync = async () => {
      try {
        const localUri = await captureRef(imageRef, {
          height: 440,
          quality: 1,
        });

        await MediaLibrary.saveToLibraryAsync(localUri);

        if (localUri) {
          navigation.push('Success');
        }
      } catch (error: unknown) {
        console.error(error);
      }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        <View ref={imageRef} collapsable={false}>
          <ImageViewer seletedImage={seletedImage} />
          {pickedTeamShield && (
            <TeamShieldSticker imageSize={40} stickerSource={pickedTeamShield} />
          )}
        </View>
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Resetar" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton
              icon="save-alt"
              label="Salvar"
              onPress={onSaveImageAsync}
            />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <CustomButton
            primary
            label="Escolha uma foto"
            onPress={pickerImageAsync}
          />
           <CustomButton
            label="Usar esta foto"
            onPress={() => setShowAppOptions(true)}
          />
        </View>
      )}
      <TeamShieldPicker isVisible={isModalVisibile} onClose={onModalClose}>
        <TeamShieldList onSelect={setPickedTeamShield} onCloseModal={onModalClose} />
      </TeamShieldPicker>
    </GestureHandlerRootView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.balticSea,
    alignItems: 'center',
  },
  imageContainer: {
    paddingTop: 90,
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: theme.colors.desertStorm,
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerContainer: {
    marginTop: 20,
    flex: 1 / 3,
    alignItems: 'center',
  },
});

export default MainScreen;
