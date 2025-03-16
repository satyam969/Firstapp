import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, Image, Button } from 'react-native';
import img from '../../assests/loginpage2.jpg';

const Profile = () => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Software Developer at XYZ Company',
    institute: 'NIT Jamshedpur',
    status: 'Approved',
    exams: [
      { id: '1', name: 'Mathematics', score: 85, date: '2022-05-15' },
      { id: '2', name: 'Physics', score: 90, date: '2022-06-01' },
      { id: '3', name: 'Chemistry', score: 95, date: '2022-06-15' },
      { id: '4', name: 'Biology', score: 92, date: '2022-06-25' },
    ],
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileCard}>
        <Image style={styles.image} source={img} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.infoText}>{user.institute}</Text>
        <Text style={[styles.status, user.status === 'Approved' && styles.approvedStatus]}>
          {user.status}
        </Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.info}>{user.email}</Text>

        <Text style={styles.label}>Bio:</Text>
        <Text style={styles.info}>{user.bio}</Text>
      </View>

      <Button title="Logout" color="#D32F2F" onPress={() => Alert.alert('Logged out')} />

      <Text style={styles.pastExamsTitle}>Past Exams</Text>
      <FlatList
        data={user.exams || []}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.examCard}>
            <Text style={styles.examName}>{item.name}</Text>
            <Text style={styles.examInfo}>Score: {item.score}</Text>
            <Text style={styles.examInfo}>Date: {item.date}</Text>
            <TouchableOpacity style={styles.btn} onPress={() => Alert.alert('Going to exam page')}>
              <Text style={styles.buttonText}>Details</Text>
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 20,
  },
  profileCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#6200EE',
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  infoText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  status: {
    fontSize: 14,
    padding: 5,
    borderRadius: 5,
    textAlign: 'center',
    backgroundColor: '#FFCDD2',
    color: '#D32F2F',
  },
  approvedStatus: {
    backgroundColor: '#C8E6C9',
    color: '#388E3C',
  },
  detailsContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  info: {
    fontSize: 15,
    color: '#555',
    marginBottom: 10,
  },
  pastExamsTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  examCard: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  examName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  examInfo: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  btn: {
    marginTop: 10,
    backgroundColor: '#6200EE',
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
});