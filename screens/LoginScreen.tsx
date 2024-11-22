import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const LoginScreen = ({ navigation }: { navigation: any }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      setError('Please enter both username and password');
    } else if (password.length < 6) {
      setError('Password must be at least 6 characters long');
    } else {
      setError(''); // Clear error
      navigation.navigate('Home'); 
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Image Section */}
      <View style={styles.imageContainer}>
        <Image 
          source={require('../assets/th.jpeg')} // Ensure you update with the correct image path
          style={styles.image}
        />
      </View>

      <Text style={styles.welcomeText}>Welcome, Chef!</Text>
      <Text style={styles.headingText}>Sign in to your account</Text>

      {/* Error Message */}
      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      {/* Username Input with Profile Icon */}
      <View style={styles.inputContainer}>
        <Icon name="person-outline" size={20} color="#555" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      {/* Password Input with Lock Icon */}
      <View style={styles.inputContainer}>
        <Icon name="lock-closed-outline" size={20} color="#555" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          secureTextEntry
          onChangeText={setPassword}
        />
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Already have an account text */}
      <TouchableOpacity onPress={() => Alert.alert('Sign Up', 'Redirect to Sign Up')}>
        <Text style={styles.signupText}>Don’t have an account? Sign up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: 16, 
    backgroundColor: '#fff' 
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 75, // Circular image
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: 'black',
    textAlign: 'center',
    marginBottom: 10,
  },
  headingText: {
    fontSize: 18,
    marginVertical: 10,
    textAlign: 'center',
    color: '#666',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 5,
    marginBottom: 15,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  signupText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#007BFF',
  },
});

export default LoginScreen;
