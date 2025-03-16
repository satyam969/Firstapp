import {StyleSheet, Text, View} from 'react-native';

const Loader = () => {
  return (
    <View style={style.container}>
      <Text style={style.text}>Fetching Data...</Text>
    </View>
  );
};
const style = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'blue',
    alignContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Loader;
