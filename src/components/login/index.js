import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';

const Login = (props) => {
  return (
    <ScrollView>
      <View
        style={{
          alignItems: 'flex-start',
          marginTop: 120,
          marginHorizontal: 30,
          marginVertical: 20,
        }}>
        <Text style={{fontSize: 26, fontWeight: '700'}}>Login</Text>
      </View>

      <View
        style={{marginBottom: 10, marginHorizontal: 30, flexDirection: 'row'}}>
        <View style={{justifyContent:"center"}}>
          <Image
            source={require('../../images/email.png')}
            style={{height:20, width: 20}}
          />
        </View>

        <View style={{flex: 1}}>
          <TextInput
            style={styles.InputTextStyle}
            placeholder="Email"></TextInput>
        </View>
      </View>

      <View
        style={{marginBottom: 10, marginHorizontal: 30, flexDirection: 'row'}}>
        <View style={{justifyContent:"center"}}>
          <Image
            source={require('../../images/padlock.png')}
            style={{height:20, width: 20}}
          />
        </View>

        <View style={{flex: 1}}>
          <TextInput
            secureTextEntry
            style={styles.InputTextStyle}
            placeholder="Password"></TextInput>
        </View>
      </View>

      <View style={styles.ButtonStyle}>
        <TouchableOpacity>
          <Text style={styles.loginTextStyle} onPress={() => props.navigation.navigate('Dashbord')} >LOGIN</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity>
          <Text
            style={styles.TextStyleLogin}
            onPress={() => props.navigation.navigate('SignUp')}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  InputTextStyle: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    fontSize: 16,
    marginHorizontal:3,
  },

  ButtonStyle: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    padding: 10,
  },

  loginTextStyle: {
    fontSize: 16,
    backgroundColor: '#d8d8d8',
    padding: 9,
    paddingHorizontal: 30,
    color: 'grey',
    fontWeight: 'bold',
    borderRadius: 6,
    textAlign: 'center',
  },

  TextStyleLogin: {
    fontSize: 18,
    marginTop: 14,
    textAlign: 'center',
  },
});
export default Login;
