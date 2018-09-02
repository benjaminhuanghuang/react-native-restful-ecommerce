import React, { Component } from 'react';
import { Box, Text } from 'react-native-design-utility';
import { TouchableOpacity, Alert, Animated } from 'react-native';

// import OnboardingLogo from '../commons/OnboardingLogo';
// import LoginButton from '../commons/LoginButton';
// import { FacebookApi } from '../api/Facebook';
// import { GoogleApi } from '../api/Google';

const BoxAnimated = Animated.createAnimatedComponent(Box);

// @inject('authStore')
class LoginScreen extends Component {


  render() {
    return (
      <Box f={1} center bg="white">
        <Text>Log in</Text>
      </Box>
    );
  }
}

export default LoginScreen;