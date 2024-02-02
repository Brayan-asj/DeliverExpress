import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    // Simulación de inicio de sesión
    if (username === 'UTD' && password === '1234') {
      // Autenticación y redireccionamiento a otra Screen
      console.log('Inicio de sesión exitoso');
      navigation.navigate('Platillos disponibles');
    } else {
      // Autenticación fallida
      console.log('Credenciales incorrectas');
    }
  };

  const handleSocialLogin = (provider) => {
    // Inicio de sesión con una red social
    console.log(`Iniciar sesión con ${provider}`);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
      />

      <Text style={styles.label}>Nombre de usuario:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese su nombre de usuario"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />

      <Text style={styles.label}>Contraseña:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese su contraseña"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Si prefieres puedes iniciar sesión con:</Text>

      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity
          style={[styles.socialButton, { backgroundColor: '#1877F2' }]} 
          onPress={() => handleSocialLogin('Facebook')}
        >
          <Image
            source={require('../assets/facebook.png')} 
            style={styles.socialButtonIcon}
          />
          <Text style={styles.socialButtonText}>Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.socialButton, { backgroundColor: '#EA4335' }]} 
          onPress={() => handleSocialLogin('Gmail')}
        >
          <Image
            source={require('../assets/gmail.png')} 
            style={styles.socialButtonIcon}
          />
          <Text style={styles.socialButtonText}>Gmail</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.socialButton, { backgroundColor: '#0072C6' }]} 
          onPress={() => handleSocialLogin('Outlook')}
        >
          <Image
            source={require('../assets/outlook.png')} 
            style={styles.socialButtonIcon}
          />
          <Text style={styles.socialButtonText}>Outlook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  logo: {
    width: 150,
    height: 175,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: '#FF6347',
    padding: 12,
    borderRadius: 4,
    marginBottom: 8,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    fontSize: 14,
    marginVertical: 8,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  socialButton: {
    width: 75,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 8,
  },
  socialButtonIcon: {
    width: 32,
    height: 32,
    marginBottom: 8,
  },
  socialButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
