import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Authentication from '../screens/Authenticaton';

const Stack = createNativeStackNavigator();
const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="authentication" component={Authentication} />
    </Stack.Navigator>
  );
};
export default MyStack;
