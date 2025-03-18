import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = ({navigation}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [instituteSearch, setInstituteSearch] = useState('');
    const [institute, setInstitute] = useState('');
    const [institutes, setInstitutes] = useState([]);
    const [filteredInstitutes, setFilteredInstitutes] = useState([]);
  

    const URI = "http://10.0.2.2:5000";

    useEffect(() => {
        const fetchInstitutes = async () => {
            try {
                const response = await fetch(`${URI}/api/institutes`);
                const data = await response.json();
                if (response.ok) {
                    setInstitutes(data);
                    setFilteredInstitutes(data); 
                } else {
                    console.log('Failed to fetch institutes:', data.message);
                }
            } catch (error) {
                console.error('Error fetching institutes:', error.message);
            }
        };
        fetchInstitutes();
    }, []);

    
    useEffect(() => {
        const filtered = institutes.filter((inst) =>
            inst.name.toLowerCase().includes(instituteSearch.toLowerCase())
        );
        setFilteredInstitutes(filtered);
    }, [institutes,instituteSearch]);

   
    const formatDate = (dob) => {
        const parts = dob.split('/');
        if (parts.length === 3) {
            return `${parts[2]}-${parts[1]}-${parts[0]}`;
        }
        return dob;
    };

    const handleSubmit = async () => {
        const formattedDob = formatDate(dob);

        try {
            const response = await fetch(`${URI}/api/students/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name,
                    mail: email,
                    password,
                    phone,
                    dob: formattedDob,
                    gender,
                    institute
                })
            });

            const data = await response.json();

            if (response.ok) {
              Alert.alert('Successfully registered');
                navigation.navigate('Authentication');
                console.log('Signup successful');
            } else {
                console.log(data.message || 'Signup failed');
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    };


    return (
        <View style={styles.container}>
         
            <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
            <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
            <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
            <TextInput style={styles.input} placeholder="Phone" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
            <TextInput style={styles.input} placeholder="Date of Birth (DD/MM/YYYY)" value={dob} onChangeText={setDob} />
            <TextInput style={styles.input} placeholder="Gender" value={gender} onChangeText={setGender} />

          
            <TextInput
                style={styles.input}
                placeholder="Search Institute"
                value={instituteSearch}
                onChangeText={setInstituteSearch}
            />

           
            <FlatList
                data={filteredInstitutes}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.instituteItem}
                        onPress={() => {
                            setInstitute(item._id);
                            setInstituteSearch(item.name); 
                        }}
                    >
                        <Text>{item.name}</Text>
                    </TouchableOpacity>
                )}
                style={styles.instituteList}
            />

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', backgroundColor: '#FFFFFF', padding: 20 },
    input: { padding: 15, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, marginBottom: 15, backgroundColor: '#F9F9F9' },
    button: { backgroundColor: '#6200EE', padding: 15, borderRadius: 8, alignItems: 'center' },
    buttonText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
    instituteList: { maxHeight: 150, marginBottom: 10 },
    instituteItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor: '#F0F0F0'
    }
});

export default Signup;
