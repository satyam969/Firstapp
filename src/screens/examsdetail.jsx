import React from 'react';
import { SafeAreaView, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

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
      <Text>Date: {item.date}</Text>
      <Text>Location: {item.location}</Text>
      <Text style={styles.registerText}>Register</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
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
    padding: 20,
  },
  item: {
    backgroundColor: '#e0e0e0',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerText: {
    marginTop: 5,
    color: '#6200EE',
    fontWeight: 'bold',
  },
});

export default ExamsDetail;
