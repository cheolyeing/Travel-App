import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeIcon from './assets/images/icon_home';
import MyIcon from './assets/images/icon_my';

import Home from './src/component/Home';
import My from './src/component/My';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{tabBarIcon: ({color}) => <HomeIcon color={color} />}} />
        <Tab.Screen name="My" component={My} options={{tabBarIcon: ({color}) => <MyIcon color={color} />}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default App;
