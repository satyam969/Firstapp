/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

const fun = () => {
  return React.createElement(
    NavigationContainer,
    null,
    React.createElement(App),
  );
};
AppRegistry.registerComponent(appName, () => fun);
