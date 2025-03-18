import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Profile from './src/screens/profile';
import Authentication from './src/screens/Authenticaton';
import Loader from './src/components/Loader';
import StudentHome from './src/screens/StudentHome';
import InstituteHome from './src/screens/InstituteHome';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Signup from './src/screens/SignupStudent';
import Signupinstitute from './src/screens/Signupinstitute';


const App = () => {
  const [info, setInfo] = useState(0);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [role, setRole] = useState('');
  const Stack = createNativeStackNavigator();
  useEffect(() => {
    async function checkLoginStatus() {
      try {
        // const data = await fetch('/api/user');
        const token =await AsyncStorage.getItem('authToken')
        const role=await AsyncStorage.getItem('role')

        console.log(token,role);
        // if(success)
        setUser('user');
        setRole(role);

        if(token)
        setAuthenticated(false);
    
        //make call to store user details in redux and store refresh  tokein in asyncstorage

        // else
        // setAuthenticated(false)
      } catch (error) {
        // setAuthenticated(false)
      } finally {
        setLoading(false);
      }
    }
    checkLoginStatus();
  }, []);
  if (loading) return <Loader></Loader>;
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!authenticated ? (
           <>
           <Stack.Screen name="Authentication" component={Authentication} />
           <Stack.Screen name="StudentRegister" component={Signup} />
           <Stack.Screen name="InstituteRegister" component={Signupinstitute} />
         </>
        ) : role === 'student' ? (
          <Stack.Screen name="StudentHome" component={StudentHome} />
        ) : (
          <Stack.Screen name="InstituteHome" component={InstituteHome} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
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
