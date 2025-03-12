import React from 'react';  
import { View, Text, Button, StyleSheet } from 'react-native';  

const Profile = ({ navigation }) => {  
  const user = {  
    name: "John Doe",  
    email: "john.doe@example.com",  
    bio: "Software Developer at XYZ Company",  
  };  

  return (  
    <View style={styles.container}>  
      <Text style={styles.title}>Profile</Text>  
      <Text style={styles.label}>Name:</Text>  
      <Text style={styles.info}>{user.name}</Text>  

      <Text style={styles.label}>Email:</Text>  
      <Text style={styles.info}>{user.email}</Text>  

      <Text style={styles.label}>Bio:</Text>  
      <Text style={styles.info}>{user.bio}</Text>  

      <Button title="Go Back" onPress={() => navigation.goBack()} />  
    </View>  
  );  
};  

export default Profile;  

const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    padding: 20,  
    justifyContent: 'center',  
    alignItems: 'flex-start',  
    backgroundColor: '#f5f5f5',  
  },  
  title: {  
    fontSize: 28,  
    fontWeight: 'bold',  
    marginBottom: 20,  
  },  
  label: {  
    fontSize: 18,  
    fontWeight: '600',  
    marginVertical: 5,  
  },  
  info: {  
    fontSize: 16,  
    marginBottom: 15,  
    color: '#333',  
  },  
});  