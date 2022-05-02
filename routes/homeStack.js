import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../components/login';
import Home from '../components/home';
import AllMembers from '../components/allmembers';
import CreateNewMember from '../components/createnewmember';
import EditMembers from '../components/editmembers';

const screens = {
    Login : {
        screen : Login,
        navigationOptions: {
            headerShown: false,
          },
    },
    Home : {
        screen : Home,
        navigationOptions: {
            headerTitle: '',
            headerStyle: {
                backgroundColor: '#2E86C1',
            },
            headerTintColor: 'white',
        },
        
    },
    AllMembers : {
        screen : AllMembers,
        navigationOptions: {
            headerTitle: 'All Members',
            headerStyle: {
                backgroundColor: '#2E86C1',
            },
            headerTintColor: 'white',
        },

    },
    CreateNewMember : {
        screen : CreateNewMember,
        navigationOptions: {
            headerTitle: 'Create Member',
            headerStyle: {
                backgroundColor: '#2E86C1',
            },
            headerTintColor: 'white',
        },

    },
    EditMembers : {
        screen : EditMembers
    }

}
const settings = {
    initialRouteName : 'Login',
    
}





const HomeStack = createStackNavigator(screens,settings)

export default createAppContainer(HomeStack);