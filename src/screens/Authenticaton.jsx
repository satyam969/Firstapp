import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

const Authentication = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const URI = "http://10.0.2.2:5000";


  const handleSubmit = async () => {
      try {
          const response = await fetch(`${URI}/api/students/login`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  mail: email,
                  password: password,
              }),
          });
  
       const data = await response.json();

     

          console.log(data);
  
          if (response?.ok) {
              await AsyncStorage.setItem('authToken', data.token); 
              await AsyncStorage.setItem('role',data.role);
              
           


              console.log('Login successful!');
          } else {
              console.log("token not found");  
          }
  
      } catch (error) {
          console.error('Error:', error.message);
      }
  };

  const handleStudentSignup = () => {
    navigation.navigate('StudentRegister');
  };

  const handleInstituteSignup = () => {
    navigation.navigate('InstituteRegister');
  };
  
  

  return (
    <View style={styles.container}>
      <Image source={require('../../assests/loginpage2.jpg')} style={styles.image} />
      <Text style={styles.title}>Welcome to Our App</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText} >Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.googleButton]}>
        <Text style={styles.buttonText}>Login with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.signupButton]} onPress={handleStudentSignup}>
        <Text style={styles.buttonText}>Sign Up as Student</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.signupButton]} onPress={handleInstituteSignup}>
        <Text style={styles.buttonText}>Sign Up as Institute</Text>
      </TouchableOpacity>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 250,
    marginBottom: 30,
    borderRadius: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 15,
    width: '90%',
    backgroundColor: '#F9F9F9',
  },
  button: {
    backgroundColor: '#6200EE',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    width: '90%',
    alignItems: 'center',
  },
  googleButton: {
    backgroundColor: '#DB4437',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupText: {
    marginTop: 15,
    color: '#6200EE',
    fontSize: 16,
  },
});

export default Authentication;