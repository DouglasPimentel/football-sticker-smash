import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import { RootStackParamList } from '../navigation/RootStackParamList';
import { theme } from '../theme';

import CustomButton from '../components/CustomButton';

type SuccessScreenProps = NativeStackScreenProps<RootStackParamList, 'Success'>;

const SuccessScreen = ({ navigation }: SuccessScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.description}>Imagem salva na galeria!</Text>
      <View style={styles.buttonContainer}>
        <CustomButton 
          primary
          label="Voltar"
          onPress={() => navigation.push('Main')} 
        />
      </View>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingBottom: 80,
    paddingHorizontal: 10,
    backgroundColor: theme.colors.balticSea,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    marginTop: 25,
    fontSize: 22,
    color: theme.colors.desertStorm,
  },
  buttonContainer: {
    marginTop: 70,
  },
});

export default SuccessScreen;
