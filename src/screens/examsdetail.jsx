import React from 'react';
import { SafeAreaView, Text, FlatList, TouchableOpacity, StyleSheet, View } from 'react-native';

const examData = [
  { id: '1', name: 'Math Exam', date: '2025-03-15', location: 'Room 101' },
  { id: '2', name: 'Physics Exam', date: '2025-03-20', location: 'Room 202' },
  { id: '3', name: 'Chemistry Exam', date: '2025-03-25', location: 'Room 303' },
];

const ExamsDetail = ({ navigation }) => {
  const handleRegister = (exam) => {
    navigation.navigate('ExamRegistration', { exam });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => handleRegister(item)}>
      <Text style={styles.title}>{item.name}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.info}>📅 {item.date}</Text>
        <Text style={styles.info}>📍 {item.location}</Text>
      </View>
      <TouchableOpacity style={styles.registerButton} onPress={() => handleRegister(item)}>
        <Text style={styles.registerText}>Register Now</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Upcoming Exams</Text>
      <FlatList
        data={examData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#6200EE',
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    color: '#666',
  },
  registerButton: {
    backgroundColor: '#6200EE',
    paddingVertical: 8,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 10,
  },
  registerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ExamsDetail;