import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';
import { RootState } from '../redux/store';

const WelcomeScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <Text style={styles.header}>Welcome to Travel Sri Lanka, {user?.username}!</Text>

      {/* Content Section */}
      <View style={styles.content}>
        <Text style={styles.description}>
          Discover the beauty of Sri Lanka. From golden beaches to lush greenery, 
          explore the wonders of this tropical paradise.
        </Text>
        <Image
          source={ require('../assets/srilanka-tour-map.png')} 
          style={styles.image}
        />
      </View>

      {/* Bottom Navigation Bar */}
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Destination')} style={styles.navButton}>
          <Text style={styles.navText}>Destinations</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.navButton}>
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch(logout())} style={styles.navButton}>
          <Text style={styles.navText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginTop: 16,
  },
  content: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginVertical: 20,
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#fff',
  },
  navButton: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 16,
    color: '#007BFF',
    fontWeight: 'bold',
  },
});
