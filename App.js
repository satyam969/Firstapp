import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Profile from './src/screens/profile';
import Authentication from './src/screens/Authenticaton';

const App = ({ navigation }) => {
  const [info, setInfo] = useState(0);

  const user = {
    name: 'John Doe',
    role: 'student', // Change this to 'admin' or 'organization' for different behavior
  };

  useEffect(() => {
    setTimeout(() => {
      if (user.role === 'student') {
        setInfo(1); // Redirect to Profile if student
      } else {
        setInfo(0); // Stay on same page otherwise
      }
    }, 2000);
  }, []);

  if (info === 0 || !user) {
    return (
      <View style={styles.container}>
        {info ? (
          <Text style={styles.text}>Proceed To Login</Text>
        ) : (
          <Text style={styles.text}>Hello User, Please Wait</Text>
        )}
       <Text>{info && <Button
          title="Sign Up"
          onPress={() => navigation.navigate('Authentication')}
        />}</Text>
      </View>
    );
  }

  if (info === 1 && user.role === 'student') {
    return <Profile />;
  }

  return null;
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
