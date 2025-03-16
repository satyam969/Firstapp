import {Text, View} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './profile';
import ExamsDetail from './examsdetail';

const Tab = createBottomTabNavigator();  

const StudentHome = () => {
  return (
    <Tab.Navigator initialRouteName="Profile" screenOptions={{ headerShown: false, tabBarActiveTintColor: 'blue', }}> 
    <Tab.Screen      name="Profile" component={Profile}  options={{ tabBarIcon: () => <Text>👤</Text> }} />  
    
    <Tab.Screen  name="Exams" component={ExamsDetail} options={{ tabBarIcon: () => <Text>📚</Text> }}/>  
  </Tab.Navigator>  
  );
};

export default StudentHome