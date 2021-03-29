import React, { Component } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import { Actions } from 'react-native-router-flux';


import AppBase from '../base_components/AppBase';
import PrimaryText from '../base_components/PrimaryText';
import BR from '../base_components/BR';
import TextInput from '../base_components/TextInput';
import RoundButton from '../base_components/RoundButton';
import TextButton from '../base_components/TextButton';

class SignupComponent extends Component {
  render() {
    const {
      loading, onSignupSubmit,
      onEmailChange, onPasswordChange,
      onUsernameChange, onFirstNameChange,
      onLastNameChange, onConfirmPasswordChange,
      registerError, disableSignUp,
      registerMessage,
    } = this.props;

    if (registerMessage && registerMessage.success) {
      Actions.replace('loginScreen', {
        loginError: {
          message: 'Sign Up successful',
        },
      });
    }

    return (
      <AppBase
        style={{
          justifyContent: 'flex-start',
        }}
      >
        <PrimaryText bold size={26}>Sign Up</PrimaryText>
        <BR size={20} />
        {registerError && <PrimaryText>{registerError.message}</PrimaryText>}
        {registerMessage && <PrimaryText>{JSON.stringify(registerMessage)}</PrimaryText>}
        <BR size={50} />

        <TextInput
          autoCorrect={false}
          onChangeText={debounce(onEmailChange, 500)}
          style={{
            width: '80%',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
          underlineColorAndroid="#B9B9B9"
          placeholder="Email"
          defaultValue="test@gmail.com"
        />
        <BR />
        <TextInput
          autoCorrect={false}
          onChangeText={debounce(onUsernameChange, 500)}
          style={{
            width: '80%',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
          underlineColorAndroid="#B9B9B9"
          placeholder="Username"
          defaultValue="test123"
        />
        <BR />
        <TextInput
          autoCorrect={false}
          onChangeText={debounce(onFirstNameChange, 500)}
          style={{
            width: '80%',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
          underlineColorAndroid="#B9B9B9"
          placeholder="First Name"
          defaultValue="Stan"
        />
        <BR />
        <TextInput
          autoCorrect={false}
          onChangeText={debounce(onLastNameChange, 500)}
          style={{
            width: '80%',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
          underlineColorAndroid="#B9B9B9"
          placeholder="Last Name"
          defaultValue="Wong"
        />
        <BR />
        <TextInput
          autoCorrect={false}
          onChangeText={debounce(onPasswordChange, 500)}
          style={{
            width: '80%',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
          underlineColorAndroid="#B9B9B9"
          secureTextEntry
          placeholder="Password"
          defaultValue="password"
        />
        <BR />
        <TextInput
          autoCorrect={false}
          onChangeText={debounce(onConfirmPasswordChange, 500)}
          style={{
            width: '80%',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
          underlineColorAndroid="#B9B9B9"
          secureTextEntry
          placeholder="Confirm Password"
          defaultValue="password"
        />
        <BR />
        <RoundButton
          title="Sign Up"
          disabled={disableSignUp}
          loading={loading}
          onPress={onSignupSubmit}
        />

      </AppBase>
    );
  }
}

SignupComponent.defaultProps = {
  registerMessage: null,
  registerError: null,
};

SignupComponent.propTypes = {
  disableSignUp: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  registerMessage: PropTypes.object,
  registerError: PropTypes.object,
  onEmailChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onSignupSubmit: PropTypes.func.isRequired,
};

export default SignupComponent;