import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { authStyles } from '../../styles/authStyles';

const CustomButton = ({
  title,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[authStyles.mainButton]}
      onPress={onPress}
    >
      <Text style={[authStyles.mainButtonText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;