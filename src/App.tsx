import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import SignInScreen from './screens/SignIn';
import SignUpScreen from './screens/SignUp';
import WelcomeScreen from './screens/Welcome';
import DestinationScreen from './screens/Destinations';
import ProfileScreen from './screens/Profile';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignIn">
          {/* Sign-In Screen */}
          <Stack.Screen 
            name="SignIn" 
            component={SignInScreen} 
            options={{ title: 'Sign In' }} 
          />

          {/* Sign-Up Screen */}
          <Stack.Screen 
            name="SignUp" 
            component={SignUpScreen} 
            options={{ title: 'Sign Up' }} 
          />

          {/* Welcome Screen */}
          <Stack.Screen 
            name="Welcome" 
            component={WelcomeScreen} 
            options={{ title: 'Welcome' }} 
          />

          {/* Destination Screen */}
          <Stack.Screen 
            name="Destination" 
            component={DestinationScreen} 
            options={{ title: 'Destinations' }} 
          />

          {/* Profile Screen */}
          <Stack.Screen 
            name="Profile" 
            component={ProfileScreen} 
            options={{ title: 'Profile' }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
