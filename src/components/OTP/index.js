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

import OTPTextInput from 'react-native-otp-textinput'

const OTP = (props) => {
  return (
    <ScrollView>
      <View
        style={{
          alignItems: 'center',
          marginTop: 80,
          marginHorizontal: 30,
          marginVertical: 20,
        }}>
        <Text style={{fontSize: 26, fontWeight: '700'}}> OTP </Text>
      </View>


      <View style={{marginHorizontal:30}}>
            <OTPTextInput />
         
        </View>

   

      <View style={styles.ButtonStyle}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Dashbord')}>
          <Text style={styles.loginTextStyle}>CONFIRM</Text>
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
    justifyContent:'center',
    marginVertical:40
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
export default OTP;
