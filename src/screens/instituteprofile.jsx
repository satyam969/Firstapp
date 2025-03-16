import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import img from '../../assests/loginpage2.jpg';

const Institute = () => {

  const institute = {
    "name": "National Institute Of Tech",
    "mail": "satyamtiwari87@gmail.com",
    "phone": "9876543210",
    "address": "123 Tech Street, Innovation City"
  }

  const approvedstudent = [
    { "name": "Neha Singh", "mail": "neha.singh@gmail.com", "phone": "9123456789", "dob": "2001-02-14", "gender": "Female", "approved": true },
    { "name": "Vikram Mehta", "mail": "vikram.mehta@gmail.com", "phone": "8234567890", "dob": "2000-07-21", "gender": "Male", "approved": true },
    { "name": "Ananya Iyer", "mail": "ananya.iyer@gmail.com", "phone": "7345678901", "dob": "2002-12-01", "gender": "Female", "approved": true },
    { "name": "Karan Malhotra", "mail": "karan.malhotra@gmail.com", "phone": "6456789012", "dob": "2003-03-30", "gender": "Male", "approved": true },
    { "name": "Meera Das", "mail": "meera.das@gmail.com", "phone": "5567890123", "dob": "2001-10-08", "gender": "Female", "approved": true }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={img} />
      <View style={styles.instituteCard}>
        <Text style={styles.title}>{institute.name}</Text>
        <Text style={styles.info}>📧 {institute.mail}</Text>
        <Text style={styles.info}>📞 {institute.phone}</Text>
        <Text style={styles.info}>🏠 {institute.address}</Text>
      </View>

      <Text style={styles.subTitle}>Approved Students</Text>
      <FlatList
        data={approvedstudent}
        keyExtractor={(item) => item.mail}
        renderItem={({ item }) => (
          <View style={styles.studentCard}>
            <Text style={styles.studentName}>{item.name}</Text>
            <Text style={styles.studentDetails}>📧 {item.mail}</Text>
            <Text style={styles.studentDetails}>📞 {item.phone}</Text>
            <Text style={styles.studentDetails}>🎂 {item.dob}</Text>
            <Text style={styles.studentDetails}>🧑‍🎓 {item.gender}</Text>
            <Text style={styles.studentApproved}>{item.approved ? '✅ Approved' : '❌ Not Approved'}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Institute;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
    padding: 15,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 15,
    marginBottom: 20,
  },
  instituteCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2a2a72',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginVertical: 15,
    color: '#4a4e69',
  },
  info: {
    fontSize: 16,
    color: '#4a4e69',
    marginVertical: 4,
  },
  studentCard: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    marginVertical: 8,
  },
  studentName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  studentDetails: {
    fontSize: 14,
    color: '#4a4e69',
    marginVertical: 2,
  },
  studentApproved: {
    marginTop: 5,
    textAlign: 'center',
    paddingVertical: 5,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    color: '#fff',
    fontWeight: 'bold',
  },
});