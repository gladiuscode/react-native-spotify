import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StaticParamList } from '@react-navigation/native';
import InitialScreen from '@/features/auth/ui/screens/initial/initial.screen';
import HomeScreen from '@/features/home/ui/screen/home/home.screen';
import LoginScreen from '@/features/auth/ui/screens/login/login.screen';

const isSignedIn = false;

// TODO: Add real auth flow.
const RootStack = createNativeStackNavigator({
  screens: {
    [InitialScreen.screenName]: {
      if: () => !isSignedIn,
      screen: InitialScreen,
      options: {
        headerShown: false,
      },
    },
    [LoginScreen.screenName]: {
      if: () => !isSignedIn,
      screen: LoginScreen,
      options: {
        headerShown: false,
      },
    },
    [HomeScreen.screenName]: {
      if: () => isSignedIn,
      screen: HomeScreen,
      options: {
        headerShown: false,
      },
    },
  },
});

export type RootStackParamList = StaticParamList<typeof RootStack>;

export default RootStack;
