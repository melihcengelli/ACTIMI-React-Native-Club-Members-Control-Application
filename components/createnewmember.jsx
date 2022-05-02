import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableWithoutFeedback, Button, ScrollView } from 'react-native';
import DatePicker from 'react-native-datepicker'
import { LogBox } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { MemberContext } from "../contexts/memberContext";

export default function CreateNewMember() {
    const memberdata = useContext(MemberContext);

    const [name , setName] = useState('');
    const [mail , setMail] = useState('');
    const [address , setAddress] = useState('');
    LogBox.ignoreLogs(['componentWillReceiveProps has been renamed, and is not recommended for use.']); // Ignore log notification by message
    LogBox.ignoreLogs(['DatePickerIOS has been merged with DatePickerAndroid']); // Ignore log notification by message
    LogBox.ignoreLogs(['Animated: `useNativeDriver` was not specified.']); // Ignore log notification by message

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const [date2, setDate2] = useState(new Date());
    const [mode2, setMode2] = useState('date');
    const [show2, setShow2] = useState(false);

    const onChangeName = (nametext) => {
        setName(nametext)
        
    }
    const onChangeMail = (mailtext) => {
        setMail(mailtext)
    }
    const onChangeAddress = (addresstext) => {
        setAddress(addresstext)
    }

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
        setShow(!show)
      };
    
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };
    
    const showDatepicker = () => {
        showMode('date');
    };
    

    const onChange2 = (event, selectedDate2) => {
        const currentDate2 = selectedDate2;
        setDate2(currentDate2);
        setShow2(!show2)
    };
    
    
    const showMode2 = (currentMode2) => {
    setShow2(true);
    setMode2(currentMode2);
    };
    
    const showDatepicker2 = () => {
        showMode2('date');
    };
    

    const closeBirthdate2 = () => {
        setShow2(false);
    }
    const closeBirthdate = () => {
        setShow(false);
    }

    const testamac = () => {
        console.log(date.toLocaleString().split(',')[0])
        
    }

    const inputControl = () => {
        console.log(name,mail,address,date.toLocaleString().split(',')[0],date2.toLocaleString().split(',')[0])
        console.log(memberdata.idcounter)
        if (name!==('')){
            if (mail!==('')){
                if(address!==('')){
                    memberdata.data.push({id : memberdata.idcounter+1, name : name, email : mail, address : address, birthdate : date.toLocaleString().split(',')[0], entrancedate : date2.toLocaleString().split(',')[0]})
                    memberdata.idcounter=memberdata.idcounter+1;
                    alert('New member has created')
                }
                else {
                    alert('Address line is not be an empty.')
                }
            } else {
                alert('Mail line is not be an empty.')

            }
        } else {
            alert('Name line is not be an empty.')

        }
    }

    return (
        <ScrollView style={styles.main}>
            <View style={styles.container}>
                <View style={styles.inputarea}>
                    <Text style={styles.inputtext}>Name</Text>
                    <TextInput style={styles.createinput} value={name} onChangeText={onChangeName}/>
                </View>
                <View style={styles.inputarea}>
                    <Text style={styles.inputtext}>E-Mail</Text>
                    <TextInput style={styles.createinput} onChangeText={onChangeMail}/>
                </View>
                <View style={styles.inputarea}>
                    <Text style={styles.inputtext}>Address</Text>
                    <TextInput style={styles.createinput} onChangeText={onChangeAddress}/>
                </View>
                <View style={styles.inputarea}>
                    <Text style={styles.inputtext}>Birthdate</Text>
                    <TouchableWithoutFeedback onPress={showDatepicker}>
                        <View style={styles.datebutton}>
                            <Text style={styles.datebuttontext} onChangeText={testamac()}>{date.toLocaleString().split(',')[0]}</Text>
                        </View>
                    </TouchableWithoutFeedback>

                    {show && (
                        
                        <View style={styles.datetimer}>
                            <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={mode}
                            onChange={onChange}
                            style={styles.datetime}
                            />
                            <View style={styles.choicebutton}>
                                <Button onPress={() => closeBirthdate()} title="Choice"/>
                            </View>
                        </View>

                    )}
                </View>                                
                <View style={styles.inputarea}>
                    <Text style={styles.inputtext}>Entrance Date</Text>
                    <TouchableWithoutFeedback onPress={showDatepicker2}>
                        <View style={styles.datebutton}>
                            <Text style={styles.datebuttontext} onChangeText={testamac()}>{date2.toLocaleString().split(',')[0]}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    {show2 && (
                        <View style={styles.datetimer}>
                            <DateTimePicker
                            
                            testID="dateTimePicker"
                            value={date2}
                            mode={mode2}
                            onChange={onChange2}
                            style={styles.datetime}
                            />
                            <View style={styles.choicebutton}>
                                <Button onPress={() => closeBirthdate2()} title="Choice"/>
                            </View>
                        </View>

                    )}
                </View>                                
                <View style={styles.createbutton}>
                    <Text style={styles.createbuttontext} onPress={inputControl}>Create</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container : {
        ...Platform.select({
            ios : {
                flex : 1,
                display : 'flex',
                flexDirection : 'column',
                justifyContent : 'space-around',
                alignItems : 'center',

            },
            android : {
                flex : 1,
                display : 'flex',
                flexDirection : 'column',
                justifyContent : 'space-around',
                alignItems : 'center',

            }
        })
    },
    createinput : {
        ...Platform.select({
            ios : {
                backgroundColor : '#73AFD7',
                padding : 10,
                height : 50,
                borderRadius : 25,
                color : 'white',
                textAlign : 'center',
            },
            android : {
                backgroundColor : '#73AFD7',
                padding : 10,
                height : 50,
                borderRadius : 25,
                color : 'white',
                textAlign : 'center',
            }
        })
    },
    inputarea : {
        ...Platform.select({
            ios : {
                width : '75%',
                marginTop : 15,
                
            },
            android : {
                width : '75%',
                marginTop : 15,
            }
        })
    },
    inputtext : {
        ...Platform.select({
            ios :{
                marginLeft : 20,
                fontSize : 20,
                marginTop : 5,
                marginBottom : 5,
                color : 'white',
                
            },
            android : {
                marginLeft : 20,
                fontSize : 20,
                marginTop : 5,
                marginBottom : 5,
                color : 'white',
            }
        })
    },
    main : {
        ...Platform.select({
            ios : {
                flex : 1,
                backgroundColor : '#2E86C1',


            },
            android : {
                flex : 1,
                backgroundColor : '#2E86C1',

            }
        })
    },
    datetime : {
        ...Platform.select({
            ios : {
                width : '100%'
            },
            andoroid : {
                width : '100%'
            }
        })
    },
    datebutton : {
        ...Platform.select({
            ios : {
                backgroundColor : '#73AFD7',
                padding : 10,
                height : 50,
                borderRadius : 25,
                alignItems : 'center',
                justifyContent : 'center',
            },
            android : {
                backgroundColor : '#73AFD7',
                padding : 10,
                height : 50,
                borderRadius : 25,
                alignItems : 'center',
                justifyContent : 'center',
            }
        })
    },
    datebuttontext : {
        ...Platform.select({
            ios : {
                color : 'white',
                fontSize : 20,
            },
            android : {
                color : 'white',
                fontSize : 20,
            }
        })
    },
    createbutton : {
        ...Platform.select({
            ios : {
                backgroundColor : 'white',
                height : 50,
                width : 100,
                alignItems : 'center',
                justifyContent : 'center',
                marginTop : 30,
                borderRadius : 25,
            },
            android : {
                backgroundColor : 'white',
                height : 50,
                width : 100,
                alignItems : 'center',
                justifyContent : 'center',
                marginTop : 30,
                borderRadius : 25,
            }
        })
    },
    createbuttontext : {
        ...Platform.select({
            ios : {

                fontSize : 15,
                fontWeight : 'bold',
                color : '#73AFD7',
            },
            android : {
                fontSize : 15,
                fontWeight : 'bold',
                color : '#73AFD7',
            }
        })
    },
    choicebutton : {
        ...Platform.select({
            ios : {
                height : 50,
                backgroundColor : 'white',
                width : 100,
                borderRadius : 25,
                alignItems : 'center',
                justifyContent : 'center',
                
                
            },
            android : {
                height : 50,
                backgroundColor : 'white',
                width : 100,
                borderRadius : 25,
                alignItems : 'center',
                justifyContent : 'center',
            }
        })
    }, 
    datetimer : {
        ...Platform.select({
            ios : {
                alignItems : 'center',
            },
            andoroid :{
                alignItems : 'center',
            }
        })
    }



})