import {
  createStaticNavigation,
  DefaultTheme,
  Theme,
} from '@react-navigation/native';
import RootStack from './navigators/root-stack';
import appTheme from '../theme/app-theme';

const MainNavigator = createStaticNavigation(RootStack);

const theme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: appTheme.colors.black,
  },
};

function AppNavigator() {
  return <MainNavigator theme={theme} />;
}

export default AppNavigator;
