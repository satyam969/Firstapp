import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  Alert,
  TouchableHighlight,
  Pressable,
  SafeAreaView,
  useColorScheme,
  FlatList,
  View,
  ScrollView,
  TextInput,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import loginurl from './assests/loginpageimg.jpg';

import Profile from './src/screens/profile';

const Stack = createNativeStackNavigator();

const App = ({navigation}) => {
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');
  const [submit, setSubmit] = useState(false);

  const handleSubmit = () => {
    setSubmit(true);
    setText('');
    setSubmit(false);
  };

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: '#fff'}]}>
      <Image style={styles.image} source={loginurl} />

      <TextInput
        style={{
          marginTop: 2,
          height: 40,
          width: 400,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
          borderRadius: 10,
        }}
        placeholder="User Name"
        value={text}
        onChangeText={text => {
          setText(text);
        }}
      />

      <TextInput
        style={{
          marginTop: 2,
          height: 40,
          width: 400,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
          borderRadius: 10,
        }}
        placeholder="password"
        value={password}
        onChangeText={text => {
          setPassword(text);
        }}
      />

      <Button title="Log In" onPress={handleSubmit}></Button>

      <Text>Don't Have A Account?</Text>
      <Button
        title="Signup"
        onPress={() => Alert.alert('Standard button pressed')}
      />

      <TouchableOpacity
        style={styles.btn}
        onPress={() => Alert.alert('Button pressed')}>
        <Text style={styles.buttonText}>Google</Text>
      </TouchableOpacity>

      <Pressable
        style={styles.btn}
        onPress={() => Alert.alert('Pressable pressed')}>
        <Text style={styles.buttonText}>Apple</Text>
      </Pressable>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.buttonText}>Go to Profile</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 400,
    height: 300,
    resizeMode: 'cover',
    borderWidth: 2,
    borderCurve: 5,
    borderRadius: 10,
  },
  btn: {
    padding: 10,
    backgroundColor: 'green',
    width: 100,
    marginVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

const APPNAVIGATOR = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={App} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Exporting the App component
export default APPNAVIGATOR;

// In React Native, styles are written in JavaScript objects, not in CSS.
// Why is a JavaScript object used for styling?
// Ya toh inline ya phir internal styling, stylesheet best way hai.

// Why only use stylesheet?
// Because when the application loads, the stylesheet loads only once,
// but a JS object reloads every time the page changes, thus we do not use that.

// If there is any property that changes when a button is pressed,
// then we can mix inline and stylesheet styles to achieve the desired effect.
// Dikkat ye hai ki CSS toh ek hi bar load hoga.

// NAVIGATION /Stack Navigation
