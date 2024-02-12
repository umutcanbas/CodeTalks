import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FlashMessage from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';

import Login from './Pages/Auth/Login/Login';
import Sing from './Pages/Auth/Singin/Sing';
import Channels from './Pages/Channels/Channels';
import Messages from './Pages/Messages/Messages';
import colors from './Style/color';

const Stack = createNativeStackNavigator();

const App = () => {
  const [userSession, setUserSession] = React.useState();
  const logOut = (
    <TouchableOpacity
      style={{
        backgroundColor: colors.darkblue,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
        borderRadius: 50,
      }}
      onPress={() => auth().signOut()}>
      <Text style={{color: 'black', fontWeight: 'bold'}}>out</Text>
    </TouchableOpacity>
  );

  React.useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  }, []);

  return (
    <NavigationContainer>
      {!userSession ? (
        <Stack.Navigator>
          <Stack.Screen
            name="LoginPage"
            component={Login}
            options={{title: 'Login', headerShown: false}}
          />
          <Stack.Screen
            name="SingPage"
            component={Sing}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="ChannelPage"
            component={Channels}
            options={{
              title: 'Odalar',
              headerTintColor: colors.blue,
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerRight: () => logOut,
            }}
          />
          <Stack.Screen
            name="MessagePage"
            component={Messages}
            options={{
              title: 'Mesajlar',
              headerTintColor: colors.blue,
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerRight: () => logOut,
            }}
          />
        </Stack.Navigator>
      )}

      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default App;
