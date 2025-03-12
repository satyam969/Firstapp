import React from 'react';  
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, Image, Button } from 'react-native';  
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // Import Tab Navigator  
import img from '../../assests/loginpage2.jpg';  


const ExamResults = () => (  
  <View style={styles.container}>  
    <Text style={styles.title}>Exam Results</Text>  
    <Text>No results available.</Text>  
 
  </View>  
);  


const ProfilePage=()=>{

  
const user = {  
  name: "John Doe",  
  email: "john.doe@example.com",  
  bio: "Software Developer at XYZ Company",  
  institute: "NIT Jamshedpur",  
  status: "Approved",  
  exams: [  
    { id: "1", name: "Mathematics", score: 85, date: "2022-05-15" },  
    { id: "2", name: "Physics", score: 90, date: "2022-06-01" },  
    { id: "3", name: "Chemistry", score: 95, date: "2022-06-15" },  
    { id: "4", name: "Biology", score: 92, date: "2022-06-25" },  
  ],  
};  


return(    
    <View style={styles.container}>  
      <Text style={styles.title}>Profile</Text>   
      <Image style={{height:200,width:200}} source={img} />   
      <Text style={styles.label}>Name:</Text>  
      <Text style={styles.info}>{user.name}</Text>  

     

      <Text style={styles.label}>Email:</Text>  
      <Text style={styles.info}>{user.email}</Text>  

      <Text style={styles.label}>Bio:</Text>  
      <Text style={styles.info}>{user.bio}</Text>  

      <Text style={styles.label}>Institute:</Text>  
      <Text style={styles.info}>{user.institute}</Text>  

      <Text style={styles.label}>Status:</Text>  
      <Text style={styles.info}>{user.status}</Text>  

      <Button title="Logout" onPress={() => Alert.alert('Logged out')} />


      <FlatList
  data={user.exams || []}
  keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
  renderItem={({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemLabel}>{item.name || 'N/A'}</Text>
      <Text style={styles.itemInfo}>Score: {item.score?.toString() || 'N/A'}</Text>
      <Text style={styles.itemInfo}>Date: {item.date || 'N/A'}</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => Alert.alert('Going to exam page')}
      >
        <Text style={styles.buttonText}>Details</Text>
      </TouchableOpacity>
    </View>
  )}
  contentContainerStyle={{ paddingBottom: 20 }}
/>

    
    </View>  
)
  
}

const Tab = createBottomTabNavigator();  

const Profile = ({ navigation }) => {  
 
  
  return (  
 
    <Tab.Navigator initialRouteName="ProfilePage" screenOptions={{ headerShown: false }}> 
      <Tab.Screen name="ProfilePage" component={ProfilePage} />  
      
      <Tab.Screen name="Exam Results" component={ExamResults} />  
    </Tab.Navigator>  
 
  );  
};  
const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    padding: 20,  
    justifyContent: 'flex-start',  
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
  item: {  
    marginVertical: 10,  
    padding: 15,  
    backgroundColor: '#fff',  
    borderRadius: 5,  
    shadowColor: '#000',  
    shadowOpacity: 0.1,  
    shadowRadius: 5,  
    elevation: 2,  
    width: '100%', 
  },  
  itemLabel: {  
    fontSize: 16,  
    fontWeight: '600',  
  },  
  itemInfo: {  
    fontSize: 14,  
    color: '#666',  
    marginVertical: 2,  
  },  
});  

export default Profile;  