import React from 'react';
import Home from './src/screens/Home';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenRoutes from './src/constants/ScreenRoutes';
import ViewPost from './src/screens/ViewPost';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <React.Fragment>
      {/* <Provider store={store}> */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName={ScreenRoutes.home}>
          <Stack.Screen
            name={ScreenRoutes.home}
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={ScreenRoutes.viewpost}
            component={ViewPost}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {/* </Provider> */}
    </React.Fragment>
  );
}
