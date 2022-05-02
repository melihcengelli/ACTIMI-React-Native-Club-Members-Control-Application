import React from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableWithoutFeedback } from 'react-native';


export default function Home({navigation}) {
    return (
        <View style={styles.container}>
            <Image style={styles.actimilogo} source={require('../assets/logo.png')}></Image>
            <TouchableWithoutFeedback  onPress={() => navigation.navigate('AllMembers')}>
                <View style={styles.homebuttons}>
                    <Text style={styles.homebuttontext}>All Members</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback  onPress={() => navigation.navigate('CreateNewMember')}>
                <View style={styles.homebuttons}>
                        <Text style={styles.homebuttontext}>Create New Member</Text>
                </View>
            </TouchableWithoutFeedback>


        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        ...Platform.select({
            ios: {
                flex : 1,
                display : 'flex',
                flexDirection : 'column',
                justifyContent : 'space-around',
                alignItems : 'center',
                textAlign : 'center',
                backgroundColor : '#2E86C1',


            },
            android : {
                flex : 1,
                display : 'flex',
                flexDirection : 'column',
                justifyContent : 'space-around',
                alignItems : 'center',
                textAlign : 'center',
                backgroundColor : '#2E86C1',
            }
    
        })
    },
    homebuttons : {
        ...Platform.select({
            ios : {
                height : '10%',
                width : '40%',
                justifyContent : 'space-around',
                alignItems : 'center',
                textAlign : 'center',
                backgroundColor : '#73AFD7',
                borderRadius : 25,
                
            },
            android : {
                height : '10%',
                width : '40%',
                justifyContent : 'space-around',
                alignItems : 'center',
                textAlign : 'center',
                backgroundColor : '#73AFD7',
                borderRadius : 25,
            }
        })
    },
    actimilogo : {
        ...Platform.select( {
          ios : {
            width: '100%',
            height: '20%',
            resizeMode: 'contain',
          },
          android : {
            width:'100%',
            height:'20%',
            resizeMode: 'contain',
          }
        })
    },
    homebuttontext : {
        ...Platform.select({
            ios : {
                color : 'white',
            },
            android : {
                color : 'white',
            }
        })
    }


})