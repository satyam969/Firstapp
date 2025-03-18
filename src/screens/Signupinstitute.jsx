import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const InstituteSignup = ({navigation}) => {
 

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const URI = "http://10.0.2.2:5000";

    const handleSubmit = async () => {
        try {
            const response = await fetch(`${URI}/api/institutes`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, mail: email, password, phone, address })
            });

            const data = await response.json();

            if (response.ok) {
                Alert.alert(`Successfully registered`);
                console.log('Signup successful');
                navigation.navigate('Authentication');
            } else {
                console.log(data.message || 'Signup failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

 

    return (
        <View style={styles.container}>
         

            <TextInput style={styles.input} placeholder="Institute Name" value={name} onChangeText={setName} />
            <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
            <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
            <TextInput style={styles.input} placeholder="Phone" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
            <TextInput style={styles.input} placeholder="Address" value={address} onChangeText={setAddress} />

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
    buttonText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' }
});

export default InstituteSignup;
