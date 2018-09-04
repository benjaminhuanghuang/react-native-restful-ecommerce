import React from 'react';
import { ActivityIndicator, UIManager } from 'react-native';
import { UtilityThemeProvider, Box } from 'react-native-design-utility';
import { Provider } from 'mobx-react/native';

import { store } from './src/stores';
import { theme } from './src/constants/theme';
import { images, tabBarIcons } from './src/constants/images';
import { cacheImages } from './src/utils/cacheImages';

import Navigation from './src/screens';

export default class App extends React.Component {
  state = {
    isReady: false,
  };

  componentDidMount() {
    this.cacheAssets();
  }

  cacheAssets = async () => {
    const imagesAssets = cacheImages([
      ...Object.values(images),
      ...Object.values(tabBarIcons.active),
      ...Object.values(tabBarIcons.inactive),
    ]);

    await Promise.all([...imagesAssets]);

    this.setState({ isReady: true });
  };

  render() {
    if (!this.state.isReady) {
      return (
        <Box f={1} center bg="white">
          <ActivityIndicator size="large" />
        </Box>
      );
    }

    return (
      <Provider {...store}>
        <UtilityThemeProvider theme={theme}>
          <Navigation></Navigation>
        </UtilityThemeProvider>
      </Provider>
    );
  }
}

