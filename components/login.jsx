import React from "react";
import {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableWithoutFeedback } from 'react-native';


export default function Login({navigation}) {

    //Username state.
    const [username, setUsername] = useState('');
    //Password state.
    const [password, setPassword] = useState('');

    //Actimi club staff accounts. 
    const accounts = [
      {
        id : 1,
        username : 'admin',
        password : '123',
      },
      {
        id : 2,
        username : 'admin2',
        password : '12345',
      }
    ]
    // Control if last account in accounts.
    let lastControl = false;

    // Control function for validation.
    function loginControl(username,password){
      for (let i = 0; i < accounts.length; i++){
        // if accounts includes username input, pass to new section.
        if (username==accounts[i].username){
          // then password control.
          if (password==accounts[i].password){
            navigation.navigate('Home')
            lastControl=true;
          }
          else {
            alert('Invalid username or password.')
            lastControl=true;
          }
        // if accounts is not includes username input, show alert to user.
        } else if (i==accounts.length-1) {
            if (lastControl==false){
              alert("Invalid username or password")
            } 
        }
        
      }
    }
    // change state to new username text.
    function eventHandlerUsername(username){
      setUsername(username)
    }
    // change state to new password text.
    function eventHandlerPassword(password){
      setPassword(password)
    }

    return (
        <View style={styles.container}>
        <Image style={styles.actimilogo} source={require('../assets/logo.png')}></Image>
        <Text style={styles.titletext}>Username</Text>
        <TextInput
          style={styles.input}
          onChangeText={eventHandlerUsername}
          value={username}
        />
        <Text style={styles.titletext}>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          onChangeText={eventHandlerPassword}
        />
        <View style={styles.login}>
          <Text style={styles.infotext}>If you do not have an account, please contact</Text>
          <Text style={styles.infotext2}>ACTIMI HR.</Text>
        </View>
        <TouchableWithoutFeedback  onPress={() => loginControl(username,password)}>
          <View style={styles.button}>
              <Text style={styles.buttontext}>Login</Text>
          </View>
        </TouchableWithoutFeedback>

  
        <StatusBar style="auto" />
      </View>
      );
  }
  
  const styles = StyleSheet.create({
    container: {
        ...Platform.select({
          ios : {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#2E86C1',
            alignItems: 'center',
            justifyContent: 'center',
          },
          android : {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#2E86C1',
            alignItems: 'center',
            justifyContent: 'center',
          }
        })
      },
      input: {
        ...Platform.select({
          ios: {
            height: 50,
            width: 250,
            margin: 12,
            padding: 10,
            borderRadius : 25,
            borderColor:'#73AFD7',
            backgroundColor: '#73AFD7',
            color:'white',
            textAlign : 'center',
          },
          android : {
            height: 50,
            width: 250,
            margin: 12,
            padding: 10,
            borderRadius : 25,
            borderColor:'#73AFD7',
            backgroundColor: '#73AFD7',
            color:'white',
            textAlign : 'center',
          }
        })
      },
      infotext : {
        ...Platform.select({
          ios : {
            color:'#73AFD7'
          },
          android : {
            color:'#73AFD7',
            fontSize:8,
          }
        })
      },
      infotext2 : {
        ...Platform.select({
          ios : {
            marginLeft:5,
            color:'white',
          },
          android : {
            marginLeft:5,
            color:'white',
            fontSize:8,
          }
        })
      },
      button : {
        ...Platform.select({
          ios : {
            justifyContent:'center',
            textAlign:'center',
            alignItems:'center',
            borderRadius: 25,
            height: 50,
            width: 100,
            backgroundColor: 'white',
            marginTop:20,
          },
          android : {
            justifyContent:'center',
            textAlign:'center',
            alignItems:'center',
            borderRadius: 25,
            height: 40,
            width: 100,
            backgroundColor: 'white',
            marginTop:20,
          }
        })
      },
      login : {
        display: 'flex',
        flexDirection: 'row',
      },
      titletext : {
        ...Platform.select({
          ios : {
            color: 'white',
            fontSize: 20,
          },
          android : {
            color: 'white',
            fontSize: 12,
          }
        })
      },
      actimilogo : {
        ...Platform.select( {
          ios : {
            width: '100%',
            height: '20%',
            resizeMode: 'contain',
            marginBottom: 75,
          },
          android : {
            width:'100%',
            height:'20%',
            resizeMode: 'contain',
          }
        })
      },
      buttontext : {
        ...Platform.select({
          ios : {
            color:'#73AFD7',
            fontWeight:'bold',
            fontSize:20,
          },
          android : {
            color:'#73AFD7',
            fontWeight:'bold',
            fontSize:15,
            
            
          }
        })
      }
    });