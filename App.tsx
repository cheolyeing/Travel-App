import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeIcon from './assets/images/icon_home.svg';
import MyIcon from './assets/images/icon_my.svg';

import Home from './src/components/Home';
import My from './src/components/My';

import {AreaContextProvider} from './src/contexts/AreaContext';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AreaContextProvider>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} options={{tabBarIcon: ({color}) => <HomeIcon color={color} />}} />
          <Tab.Screen name="My" component={My} options={{tabBarIcon: ({color}) => <MyIcon color={color} />}} />
        </Tab.Navigator>
      </AreaContextProvider>
    </NavigationContainer>
  );
};
export default App;
