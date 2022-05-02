import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/login';
import Navigator from './routes/homeStack';
import { MemberContext } from './contexts/memberContext';
import 'react-native-gesture-handler';

export default function App() {
  // Hardcode member attributes.
  const data = [
    {id : 1, name : 'Melih', email : 'melihcengelli@gmail.com', address : 'Frinton-on-sea / 4 Golden Knowes Road', birthdate : '06/02/1996', entrancedate : '04/29/2022'},
    {id : 2, name : 'Cihan', email : 'cihansoysal@gmail.com', address : 'Cairnbeathie / 77 Circle Way', birthdate : '05/03/1996', entrancedate : '04/29/2022'},
    {id : 3, name : 'Berkay', email : 'berkaycelik@gmail.com', address : 'Stourpaine / 85 Broomfield Place', birthdate : '07/06/1996', entrancedate : '04/29/2022'},
    {id : 4, name : 'Ali Can', email : 'alicanbugday@gmail.com', address : 'Belsay /  55 Old Edinburgh Road', birthdate : '02/03/1996', entrancedate : '04/29/2022'},
    {id : 5, name : 'Onur', email : 'onurgokgoz@gmail.com', address : 'Throws / 85 High St', birthdate : '03/23/1996', entrancedate : '04/29/2022'},
    {id : 6, name : 'Hamit', email : 'hamitozgun@gmail.com', address : 'Chilton Trinity / 95 Shannon Way', birthdate : '07/04/1996', entrancedate : '04/29/2022'},
    {id : 7, name : 'Hakan', email : 'hakanevrankaya@gmail.com', address : 'Aldsworth / 36 Withers Close', birthdate : '02/07/1996', entrancedate : '04/29/2022'},
    {id : 8, name : 'Ömer', email : 'omerhergul@gmail.com', address : 'Brynberian / 61 George Street', birthdate : '01/09/1996', entrancedate : '04/29/2022'},

  ]
  // ID counter for giving unique ID number to new members.
  const idcounter = 8;
  return (
    // Context API provider for provide all member infos.
    <MemberContext.Provider value={{data,idcounter}}>
      <View style={styles.container}>
        <Navigator/>
      </View>
    </MemberContext.Provider>
  );
}

// Style Sheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
