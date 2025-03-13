import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = () => {
  useEffect(() => {
    // Check whetehr user is already logged in or not if logged in direct him to home page or direct him to authentication page
  }, []);

  return React.createElement(
      View,
      {style: styles.container},
      React.createElement(
        Text,
        {style: styles.text},
        'Hello, User! Please Wait..'
      )
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
