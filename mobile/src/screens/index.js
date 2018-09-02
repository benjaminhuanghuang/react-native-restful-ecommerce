
import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import React, { Component } from 'react';

import { theme } from '../constants/theme';

const AuthNavigator = createStackNavigator(
  {
    Login: {
      getScreen: () => require('./LoginScreen').default,
    },
  },
  {
    navigationOptions: {
      header: null,
    },
  },
);
const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      getScreen: () => require('./HomeScreen').default,
    }
  },
  {
    tabBarComponent: props => <TabBar {...props} />,
  },
);

const MainNavigator = createStackNavigator(
  {
    Tab: TabNavigator,
    // ShoppingCart: ShoppingCartNavigator,
  },
  {
    navigationOptions: {
      header: null,
    },
  },
);

const AppNavigator = createSwitchNavigator(
  {
    Splash: {
      getScreen: () => require('./SplashScreen').default,
    },
    // Auth: AuthNavigator,
    Main: MainNavigator,
  },
  {
    initialRouteName: 'Splash',
  },
);

class Navigation extends Component {
  state = {};
  render() {
    return (
      <AppNavigator />
    );
  }
}

export default Navigation;