import React from 'react';
import { TextInput } from 'react-native';
import { authStyles } from '../../styles/authStyles';

const CustomInput = ({
  placeholder,
  value,
  onChangeText,
  keyboardType = "default",
  secureTextEntry = false,
  autoCapitalize = "sentences"
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor="#999"
      style={authStyles.input}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      autoCapitalize={autoCapitalize}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default CustomInput;