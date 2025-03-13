import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Profile from './src/screens/profile';
import Authentication from './src/screens/Authenticaton';

const App = () => {
  const [info, setInfo] = useState(0);


  const user = {
    name: 'John Doe',
    role: 'student', // Change this to 'admin' or 'organization' for different behavior
  };

  useEffect(() => {
    setTimeout(() => {
      if (user.role === 'student') {
        setInfo(0);
      }
    }, 2000);
  }, []);
  if(info===0)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello User, Please Wait</Text>
        <Authentication />
      </View>
    );
  if (info === 1 && user.role === 'student') {
    return <Profile />;
  }

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

