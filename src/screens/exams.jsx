import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"


const exams = () => {
    const exam={
        "name": "Advanced Mathematics",
        "conducting_institute": "652a1b3f8f4a3b2f10a9d5c1",
        "date": "2025-03-20",
        "time": "10:00 AM",
        "duration": 180,
        "totalMarks": 100,
        "description": "This exam covers topics from calculus, linear algebra, and differential equations."
      };
      
  return (
   <SafeAreaView>
    
<Text style={styles.title}>Exam :{exam.name}</Text>

<Text style={styles.subtitle}>Institute : {exam.conducting_institute}</Text>

<Text style={styles.subtitle}>Date : {exam.date}</Text>

<Text style={styles.subtitle}>Time : {exam.time}</Text>

<Text style={styles.subtitle}>Duration : {exam.duration} minutes</Text>

<Text style={styles.subtitle}>Total Marks : {exam.totalMarks}</Text>

<Text style={styles.subtitle}>Description : {exam.description}</Text>


   </SafeAreaView>
  )
}

export default exams


const styles=StyleSheet.create({
    title:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:10
    },
    subtitle:{
        fontSize:16,
        marginBottom:5
    }

 
})