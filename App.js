import React, {useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './src/components/login';
import SignUp from './src/components/signup';
import Forget from './src/components/forget';
import OTP from './src/components/OTP';
import Splash from "./src/components/splash"

const Stack = createStackNavigator();

// useEffect(() => {
//   effect
//   // return () => {
//   //   cleanup
//   // }
// }, [input])

function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  if (loading) {
    return <Splash/>
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen name="SignUp" component={SignUp}   options={{
            headerTitleAlign: 'center',
          }} />
        <Stack.Screen name="One Time Password" component={OTP}   options={{
            headerTitleAlign: 'center',
          }} />
        <Stack.Screen name="Dashbord" component={Forget}   options={{
            headerTitleAlign: 'center',
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
