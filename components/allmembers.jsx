import React, {useContext, useEffect, useState} from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableWithoutFeedback, ScrollView, Pressable, Modal, Alert } from 'react-native';
import { MemberContext } from "../contexts/memberContext";

export default function AllMembers({navigation}) {
    const memberdata = useContext(MemberContext);
    const [modalVisible, setModalVisible] = useState(false);
    const [test,setTest] = useState({});

    const [changingName, setChangingName] = useState();
    const [changingMail, setChangingMail] = useState();
    const [changingAddress, setChangingAddress] = useState();
    const [changingBirthdate, setChangingBirthdate] = useState();
    const [changingEntrance, setChangingEntrance] = useState();

    const modelset = (member) => {
        setModalVisible(true)
        setTest(member)
    }

    const changeName = (e) => {
        setChangingName(e)
        console.log(e)
    } 

    const changeMail = (e) => {
        setChangingMail(e)
        console.log(e)
    }

    const changeAddress = (e) => {
        setChangingAddress(e)
        console.log(e)
    }

    const changeBirthdate = (e) => {
        setChangingBirthdate(e)
        console.log(e)
    }

    const changeEntrance = (e)=>{
        setChangingEntrance(e)
        console.log(e)
    }

    const changeInfo = (id) => {
        
        if (changingName!==undefined) {
            if (changingMail!==undefined) {
                if (changingAddress!==undefined) {
                    if (changingBirthdate!==undefined){
                        if (changingEntrance!==undefined){
                            console.log(changingName,changingMail,changingAddress,id,changingBirthdate, changingEntrance)

                            for (let i = 0; i < memberdata.data.length; i++) {
                                if (memberdata.data[i].id==id) {
                                    memberdata.data[i].name=changingName
                                    memberdata.data[i].email=changingMail
                                    memberdata.data[i].address=changingAddress
                                    memberdata.data[i].birthdate=changingBirthdate
                                    memberdata.data[i].entrancedate=changingEntrance
                                    alert('Member updated')
                                }
                            }

                        } else {
                            alert('Entrance line is not be an empty.')
                        }
                    } else {
                        alert('Birthdate line is not be an empty.')
                    }
                } else {
                    alert('Address line is not be an empty.')
                }
            } else {
                alert('Mail line is not be an empty.')
            }
        } else {
            alert('Name line is not be an empty.')
        }

        

    }

    const deleteMember = (id) => {
        console.log(id)
        for (let i = 0; i < memberdata.data.length; i++) {
            if (memberdata.data[i].id==id) {
                //alert('Member '+memberdata.data[i].name+' has deleted')
                Alert.alert(
                    "User Deleted",
                    `${memberdata.data[i].name} user has deleted.`,
                    [
                      { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                  );
                memberdata.data.splice(i,1)
                navigation.navigate('Home')
            }
        }
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                    <View style={styles.modalView}>

                        <Text style={styles.modalText}>Edit Member {test.name}</Text>
                        <TextInput>Member ID {test.id}</TextInput>
                        <Text>Name</Text>
                        <View style={styles.modalTextInputView}>
                            <TextInput style={styles.modalTextInput} onChangeText={changeName} placeholder={test.name}></TextInput>
                        </View>
                        <Text>E-Mail</Text>
                        <View style={styles.modalTextInputView}>
                            <TextInput style={styles.modalTextInput} onChangeText={changeMail} placeholder={test.email}></TextInput>
                        </View>
                        <Text>Address</Text>

                        <View style={styles.modalTextInputView}>
                            <TextInput style={styles.modalTextInput} onChangeText={changeAddress} placeholder={test.address}></TextInput>
                        </View>
                        <Text>Birthdate</Text>

                        <View style={styles.modalTextInputView}>
                            <TextInput style={styles.modalTextInput} onChangeText={changeBirthdate} placeholder={test.birthdate}></TextInput>
                        </View>
                        <Text>Entrance Date</Text>

                        <View style={styles.modalTextInputView}>
                            <TextInput style={styles.modalTextInput} onChangeText={changeEntrance} placeholder={test.entrancedate}></TextInput>
                        </View>
                              
                                
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => changeInfo(test.id)}
                            >
                            <Text style={styles.textStyle}>Update All Data</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                            >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                    </View>
                </Modal>
            </View>

            <Text style={styles.datalenght}>{memberdata.data.length} members found.</Text>

            {memberdata.data.map(member => (
                <View style={styles.memberinfo} key={member.id}>
                    
                    <View style={styles.memberinfoleft}>
                        <Text style={styles.memberinfotext}>Member ID : {member.id}</Text>
                        <Text style={styles.memberinfotext}>Name : {member.name}</Text>
                        <Text style={styles.memberinfotext}>E-mail : {member.email}</Text>
                        <Text style={styles.memberinfotext}>Address : {member.address}</Text>
                        <Text style={styles.memberinfotext}>Birthdate : {member.birthdate}</Text>
                        <Text style={styles.memberinfotext}>Entrance Date : {member.entrancedate}</Text>
                    </View>
                    <View style={styles.memberinforight}>
                        <Pressable
                            style={[styles.button, styles.buttonOpen]}
                            onPress={() => modelset(member)}
                        >
                            <Text style={styles.textStyle}>Edit Member</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonOpen]}
                            onPress={() => deleteMember(member.id)}
                        >
                            <Text style={styles.textStyle}>Delete Member</Text>
                        </Pressable>
                    </View>
                </View>
            ))
            
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container : {
        ...Platform.select({
            ios : {
                flex : 1,
                backgroundColor : '#2E86C1',
                

            },
            andorid : {
                flex : 1,
                backgroundColor : '#2E86C1'
            }
        })
    },
    memberinfo : {
        ...Platform.select({
            ios : {
                display : 'flex',
                flexDirection : 'row',
                justifyContent : 'space-between',
                backgroundColor : '#73AFD7',
                marginTop : 7,
                marginBottom : 7,
                marginLeft : 15,
                marginRight : 15,
                borderRadius : 10,
            },
            android : {
                display : 'flex',
                flexDirection : 'column',
                justifyContent : 'space-between',
                backgroundColor : '#73AFD7',
                marginTop : 7,
                marginBottom : 7,
                marginLeft : 15,
                marginRight : 15,
                borderRadius : 10,
            }
        })
    },
    memberinfotext : {
        ...Platform.select({
            ios : {
                marginLeft : 10,
                marginRight : 5,
                marginBottom : 5,
                marginTop : 5,
                color : 'white',
            },
            android : {
                marginLeft : 10,
                marginRight : 5,
                marginBottom : 5,
                marginTop : 5,
                color : 'white',
                fontSize : 9,
                
            }
        })
    },
    datalenght : {
        ...Platform.select({
            ios : {
                color : 'white',
                textAlign : 'center',
                marginTop : 10,
            },
            android : {
                color : 'white',
                textAlign : 'center',
                marginTop : 10,
            }
        })
    },
    memberinforight : {
        ...Platform.select({
            ios : {
                flex : 1,
                display : 'flex',
                flexDirection : 'column',
                alignItems : 'center',
                justifyContent : 'space-around',
                

                
            },
            andorid : {
                flex : 1,
                display : 'flex',
                flexDirection : 'column',
                alignItems : 'center',
                justifyContent : 'space-around',
                

            }
        })
    },
    memberinfoleft : {
        ...Platform.select({
            ios : {
                flex : 3,
            },
            andorid : {
                flex : 3,
                
            }
        })
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
          ...Platform.select({
              ios : {
                borderRadius: 20,
                padding: 10,
                elevation: 2,
            },
              android : {
                borderRadius: 20,
                padding: 10,
                elevation: 2,
                alignItems : 'center',
                marginTop : 10,
                marginBottom : 10,
                marginLeft : 15,
                marginRight : 15,
              }
          })
      },
      buttonOpen: {
        backgroundColor: "#2E86C1",
      },
      buttonClose: {
        backgroundColor: "#2E86C1",
      },
    textStyle: {
        ...Platform.select({
            ios : {
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
            },
            andorid : {
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
                fontSize : 5,
                alignItems : 'center',
                justifyContent : 'center',        
            }
        })
    },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    modalTextInput : {
        ...Platform.select({
            ios : {
                margin : 10,
                color : 'white',
                
            },
            android : {
                margin : 10,
                color : 'white',
                
            }
        })
    },
    modalTextInputView : {
        ...Platform.select({
            ios : {
                backgroundColor : 'grey',
                borderRadius : 25,
                marginTop : 5,
                marginBottom : 5,
                color: 'white',

            },
            android : {
                backgroundColor : 'grey',
                borderRadius : 25,
                marginTop : 5,
                marginBottom : 5,
                color: 'white',
            }
        })
    }

})