// Import libraries for making component
import React from 'react';
import { Text, View } from 'react-native';

// Make a registerComponent
const Header = () => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Albums!</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A5F5F5'
  },
  textStyle: {
    fontSize: 20
  }
};
// Make the component available to other parts of the app
export default Header;
