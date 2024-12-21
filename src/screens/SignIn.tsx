import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import { loginUser } from '../api/apiService';

const SignInScreen = ({ navigation }: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const user = await loginUser(username, password);
      dispatch(login(user));
      navigation.navigate('Welcome');
      Alert.alert(
        'Login Successful',
        'You have successfully logged in!',
        [{ text: 'OK', onPress: () => navigation.navigate('Welcome') }]
      );
    } catch (error) {
      alert('Invalid credentials!');
    }
  };

  return (
    <View style={styles.container}>
      
      <Text style={styles.header}>Welcome {'\n'}to{'\n'} Travel Sri Lanka</Text>

      
      <Image
        source={{ uri: 'https://www.srilanka.travel/images/logo.png' }} // Replace with your desired image URL
        style={styles.logo}
      />

      {/* Login Form */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={handleLogin} />
      </View>


      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.signupText}>
          Don't have an account? <Text style={styles.signupLink}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'times',
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 75,
  },
  input: {
    width: '100%',
    padding: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 20,
  },
  signupText: {
    marginTop: 10,
    fontSize: 14,
    color: '#555',
  },
  signupLink: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
});
