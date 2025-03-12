
import React, { useState } from 'react';  
import { Image, StyleSheet, Text, Button, TouchableOpacity, Alert, TouchableHighlight, Pressable, SafeAreaView, useColorScheme, FlatList, View, ScrollView, TextInput } from 'react-native';  
import { NavigationContainer } from '@react-navigation/native';



  // Screen component for the home screen





// Functional component for the app  
const App = () => {  
  // Get the color scheme (light/dark)  
  const theme = useColorScheme();  


  // state varibale 
  const [result, setResult] = useState('');  
  const [text,setText]=useState('');
  const[submit,setSubmit] = useState(false);

  const handleSubmit=()=>{
    setSubmit(true);
    setText('');
    setSubmit(false);
  }

  // Function to handle button press  
  const handlePress = () => {  
    // Generate a random number between 0 and 9  
    const randomNumber = Math.floor(Math.random() * 10);  

    // Set the result state with the random number  
    setResult(randomNumber);  
  };  

  // Function to handle the alert  
  const handleAlert = () => {  
    Alert.alert('Alert', `You pressed button with number ${result}`);  
  };  

  // Function to handle the touchable highlight  
  const handleHighlight = () => {  
    Alert.alert('Highlight', 'You touched the button');  
  };  

  // Function to handle the pressable  
  const handlePressable = () => {  
    Alert.alert('Pressable', 'You pressed the button');  
  };  

  // Function to handle the flat list
  
  // Phone me kon sa mode chl rha hai dark or white according  
  console.log(theme);  
  
  // Determine if dark mode is active  
  const isDarkMode = theme === 'dark';  
  const textColor = isDarkMode ? "black" : "white"; // Set text color based on the theme  
  
  // Array representing the data for reels  
  const reelsData = Array.from({ length: 10 }).map((_, index) => ({  
    id: index.toString(), // Unique key for each item  
    color: `hsl(${index * 36}, 70%, 50%)`, // Color for each reel  
    title: `Reel ${index + 1}` // Title for each reel  
  })); 
 

  return (  
    
    <NavigationContainer>

  
      

    <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? '#000' : '#fff' }]}>  
      {/* <NavigationContainer> */}

    

      <Text style={{ color: textColor }}>Hello</Text>  
      <Image  
        style={styles.image}  
        source={{ uri: "https://fastly.picsum.photos/id/484/200/200.jpg?hmac=3rqhoyJTHVOGelhVPMaglcnpAMl_V3cvNkHZDpSz6_g" }}   
      />  

      {/* Taking Input  */}

      <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }} placeholder="Type here" value={text} onChangeText={(text)=>{
        setText(text);
      }} />

      <Button title="submit" onPress={handleSubmit}></Button>
{/* agr submitted text ki value true ho  */}
     {submit? <Text>Result:{text} </Text>:""}

      {/* 3 tags for button */}  
      <Button title="Press" onPress={() => Alert.alert("Standard button pressed")} />  

      <TouchableOpacity style={styles.btn} onPress={() => Alert.alert("Button pressed")}>  
        <Text style={styles.buttonText}>Press Me</Text>  
      </TouchableOpacity>  

      <TouchableHighlight style={styles.btn} onPress={() => Alert.alert("Second button pressed")}>  
        <Text style={styles.buttonText}>Press Me</Text>  
      </TouchableHighlight>  

      {/* Pressable - mostly used, provides a lot of custom functionalities */}  
      <Pressable style={styles.btn} onPress={() => Alert.alert("Pressable pressed")}>  
        <Text style={styles.buttonText}>Press In</Text>  
      </Pressable>  

      {/* ScrollView to contain some scrollable text */}  
      <ScrollView contentContainerStyle={styles.scrollView}>  
        <Text style={{ color: textColor }}>Scrollable Text 1</Text>  
        <Text style={{ color: textColor }}>Scrollable Text 2</Text>  
        <Text style={{ color: textColor }}>Scrollable Text 3</Text>  
        <Text style={{ color: textColor }}>Scrollable Text 4</Text>  
        <Text style={{ color: textColor }}>Scrollable Text 5</Text>  
      </ScrollView>  

      {/* scrollview me saara data ek saath renedr ho jata hai jo hme nhi chhahiye hmesha so we use flatlist isme property hai 
      aur bhi bhot saari cheeze provide krta hai 
      jisse utna hi data render hoga jitna dikh rha hai 
      */}

      {/* FlatList to mimic Instagram Reels */}  
      <FlatList  
        data={reelsData} // Data to be rendered for reels  
        keyExtractor={item => item.id} // Unique key for each item  
        renderItem={({ item }) => (  
          <View style={[styles.reel, { backgroundColor: item.color }]}>  
            <Text style={styles.reelText}>{item.title}</Text>  
          </View>  
        )}  
        contentContainerStyle={styles.flatListContainer} // Style for the FlatList container  
      />  
   
    </SafeAreaView>  
    </NavigationContainer>

  );  
}  

// Styles for the component  
const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    justifyContent: 'center',  
    alignItems: 'center',  
  },  
  image: {  
    width: 200,  
    height: 200,  
  },  
  btn: {  
    padding: 10,  
    backgroundColor: "green",  
    marginVertical: 10,  
    borderRadius: 5,  
  },  
  buttonText: {  
    color: 'white', // Ensures button text is always readable  
    textAlign: 'center', // Center the text in the button  
  },  
  scrollView: {  
    flexGrow: 0, // Important to not let overflow   
    alignItems: 'flex-start', // Align items to start  
    marginVertical: 10, // Margin for spacing between ScrollView and FlatList  
  },  
  flatListContainer: {  
    flexGrow: 1, // Allows FlatList to expand  
    justifyContent: 'center',  
    alignItems: 'center',  
  },  
  reel: {  
    width: '90%', // Width of the reel  
    height: 200, // Height of the reel  
    justifyContent: 'center', // Center content vertically  
    alignItems: 'center', // Center content horizontally  
    marginVertical: 10, // Vertical margin between reels  
    borderRadius: 10, // Rounded corners  
  },  
  reelText: {  
    color: 'white', // Text color for reel title  
    fontSize: 24, // Font size for the title  
  },  
});  

// Exporting the App component  
export default App;  

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

// ek page se dusri page pe jaane wala
