import React, { useState } from 'react';
import { View, Text,TextInput, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';

   

const Forget = (props) => {

  
  return (
    <ScrollView>
      <View>
        <Image
          source={require('../../images/lgoo.png')}
          style={{height: 150, width: null}}
          resizeMode="contain"
        />
      </View>

      <View style={{alignItems: 'center', marginTop:20}}>
      <Text style={{fontSize: 26}}>Dashboard</Text>
      </View>

   
      <View style={styles.ButtonStyle}>
        <TouchableOpacity>
          <Text style={styles.loginTextStyle}>Go to Static</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ButtonStyle}>
        <TouchableOpacity>
          <Text style={styles.loginTextStyle}>Go to Static</Text>
        </TouchableOpacity>
      </View>
  

     </ScrollView>
  );
}

const styles = StyleSheet.create({
    InputTextStyle: {
       
        borderBottomColor:'#000',
        borderBottomWidth:1,
        fontSize:16,
        marginBottom:10,
        marginHorizontal:30,
    },

    ButtonStyle: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 10,
        marginTop:10,
      },

      loginTextStyle: {
        fontSize: 16,
        backgroundColor: 'black',
        padding: 14,
        borderRadius: 30,
        color: 'white',
        fontWeight: 'bold',
        width:250,
        textAlign:'center',
        elevation:9,
      },
  
  });
export default Forget;
