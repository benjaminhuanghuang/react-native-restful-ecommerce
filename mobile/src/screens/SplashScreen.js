import React, { Component } from 'react';
import { Box, Text } from 'react-native-design-utility';

import OnboardingLogo from '../commons/OnboardingLogo';
// import { NavigationService } from '../api/NavigationService';

// @inject('authStore')
class SplashScreen extends Component {
  state = {};

  componentDidMount() {
    this.checkAuth();
  }

  checkAuth_bk = async () => {
    await this.props.authStore.setupAuth();
  };

  checkAuth = () => {
    setTimeout(() => {
      this.props.navigation.navigate('Auth');
    }, 3000);
  };

  render() {
    return (
      <Box f={1} center>
        <OnboardingLogo />
      </Box>
    );
  }
}

export default SplashScreen;