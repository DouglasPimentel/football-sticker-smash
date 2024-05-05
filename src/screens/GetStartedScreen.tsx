import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, SafeAreaView, View, Image, ImageSourcePropType } from 'react-native';
import { RootStackParamList } from '../navigation/RootStackParamList';
import { theme } from '../theme';

import CustomButton from '../components/CustomButton';

type GetStartedScreenProps = NativeStackScreenProps<RootStackParamList, 'GetStarted'>;

const GetStartedScreen = ({ navigation }: GetStartedScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image style={styles.image} source={require('../../assets/images/image-get-started.jpg')} />
      </View>
      <View style={styles.contentWrapper}>
        <Text style={styles.title}>Football Sticker Smash.</Text>
        <Text style={styles.description}>Adicione o escudo de seus times favoridos em suas fotos.</Text>
      </View>
      <CustomButton primary onPress={() => navigation.push('Main')} label="Começar Agora" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingBottom: 80,
    paddingHorizontal: 10,
    backgroundColor: theme.colors.balticSea,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 320,
    height: 440,
    marginBottom: 50,
    borderRadius: 18,
  },
  contentWrapper: {
    marginBottom: 45,
  },
  title: {
    fontSize: 36,
    color: theme.colors.desertStorm,
    fontWeight: '700',
  },
  description: {
    marginTop: 25,
    fontSize: 16,
    color: theme.colors.desertStorm,
  }
});

export default GetStartedScreen;
