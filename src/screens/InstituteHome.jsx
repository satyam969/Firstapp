import {Image, StyleSheet, Text, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import img from '../../assests/loginpage2.jpg';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../screens/instituteprofile'
import Verificationpage from './Verificationpage';
const Tab=createBottomTabNavigator();

const InstituteHome = () => {



  return (
   <Tab.Navigator initialRouteName='Profile' screenOptions={{ headerShown: false, tabBarActiveTintColor: 'red', }} >
<Tab.Screen 
  name='Profile' 
  component={Profile} 
  options={{ tabBarIcon: () => <Text>👤</Text> }} 
/>

<Tab.Screen 
  name='Verify' 
  component={Verificationpage} 
  options={{ tabBarIcon: () => <Text>🛡️</Text> }} 
/>
   </Tab.Navigator>
  );
};

export default InstituteHome
