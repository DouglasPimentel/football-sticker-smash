import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './src/navigation/RootStackParamList';
import { theme } from './src/theme';

import GetStartedScreen from './src/screens/GetStartedScreen';
import MainScreen from './src/screens/MainScreen';
import SuccessScreen from './src/screens/SuccessScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="GetStarted" 
          component={GetStartedScreen}
          options={{
            title: "",
            statusBarStyle: "light",
            statusBarColor: theme.colors.balticSea,
            headerStyle: { backgroundColor: theme.colors.balticSea },
            headerTitleStyle: { color: theme.colors.desertStorm },
            headerShadowVisible: false,
          }} 
        />
        <Stack.Screen 
          name="Main"
          component={MainScreen}   
          options={{
            title: "",
            statusBarStyle: "light",
            statusBarColor: theme.colors.balticSea,
            headerStyle: { backgroundColor: theme.colors.balticSea },
            headerTitleStyle: { color: theme.colors.desertStorm },
            headerShadowVisible: false,
          }}        
        />
        <Stack.Screen 
          name="Success"
          component={SuccessScreen}   
          options={{
            title: "",
            statusBarStyle: "light",
            statusBarColor: theme.colors.balticSea,
            headerStyle: { backgroundColor: theme.colors.balticSea },
            headerTitleStyle: { color: theme.colors.desertStorm },
            headerShadowVisible: false,
          }}        
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
