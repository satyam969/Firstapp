
import { useState } from 'react'
import { Alert, Button, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Profile from './profile'



const Home=({navigation})=>{

  const handleAlert=()=>{
    const randomNumber=Math.floor(Math.random()*100)
    setResult(randomNumber)
  }


  const handlePress=()=>{
    const randomNumber=Math.floor(Math.random()*100)
    setResult(randomNumber)
  }

  const[result,setResult]=useState('');

  const [text,setText]=useState('');

  const handleSubmit=()=>{
    console.log(text)
    setResult('')
    setText('')
    Alert.alert('Alert', 'You pressed the button!')
  }
  const submit=text.trim().length > 0;
   return (
      <View>
        <Text style={styles.title}>Welcome to the App</Text>
        <Text style={styles.subtitle}>Click the button to generate a random number</Text>

        <Button title="Profile"  onPress={()=> navigation.navigate("Profile")}></Button>
  
        <Button title="Press me" onPress={handlePress} />
  
        <Text style={styles.result}>{result}</Text>
  
        <TouchableOpacity onPress={handleAlert}>
          <Text style={styles.button}>Show Alert</Text>
        </TouchableOpacity>
  
        <TextInput
          style={styles.input} 
          placeholder="Enter your text here" 
          onChangeText={setText} 
          value={text}
        />
  
        <Pressable 
          onPress={handleSubmit} 
          style={[
            styles.button,
            submit && styles.submitButton,
          ]}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </Pressable>
      </View>
    )
  }
  
  

export default Home

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    marginBottom: 20,
  },
  subtitle: {
    marginBottom: 20,
  },
  result: {
    marginBottom: 20,
    fontSize: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#000000',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
