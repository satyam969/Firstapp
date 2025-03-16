import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const students=[
    {
      "name": "Aarav Sharma",
      "mail": "aarav.sharma@gmail.com",
      "phone": "9876543210",
      "dob": "2002-08-15",
      "gender": "Male",
      "institute": "67d653ea31036ddf962eface",
      "approved": false
    },
    {
      "name": "Ishita Patel",
      "mail": "ishita.patel@gmail.com",
      "phone": "8765432109",
      "dob": "2001-11-25",
      "gender": "Female",
      "institute": "67d653ea31036ddf962eface",
      "approved": false
    },
    {
      "name": "Rahul Verma",
      "mail": "rahul.verma@gmail.com",
      "phone": "7654321098",
      "dob": "2000-04-10",
      "gender": "Male",
      "institute": "67d653ea31036ddf962eface",
      "approved": false
    }
  ]

const Verificationpage = () => {

  return (
  <SafeAreaView style={styles.container}>
   <Text style={styles.title}> Students Asking For Approval :</Text>
   <FlatList
   data={students}
   keyExtractor={(item) => item.mail}
   renderItem={({item}) => (
    <View style={styles.card}>
     <Text style={styles.item}>{item.name}</Text>
     <Text style={styles.item}>{item.mail}</Text>
     <Text style={styles.item}>{item.phone}</Text>
     <Text style={styles.item}>{item.dob}</Text>
     <Text style={styles.item}>{item.gender}</Text>
     <Text style={styles.status}>{item.approved ? "Approved" : "Pending"}</Text>
     <TouchableOpacity style={styles.button} onPress={()=>{ 
        alert("Student verification done")
        item.approved=true
     }}>
        <Text style={styles.buttonText}>Verify</Text>
     </TouchableOpacity>
     </View>
   )}
   />
  </SafeAreaView>
  )
}

export default Verificationpage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        padding: 15
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 5,
        elevation: 5,
        marginVertical: 8,
        padding: 15,
        borderWidth: 1,
        borderColor: '#e0e0e0'
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15,
        color: '#333'
    },
    item: {
        fontSize: 16,
        color: '#555',
        marginVertical: 2
    },
    status: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ff6347',
        marginTop: 5
    },
    button: {
        backgroundColor: '#4CAF50',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignSelf: 'center',
        marginTop: 10
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    }
})