
 import {createStore, applyMiddleware,compose} from 'redux';
 import {Provider} from 'react-redux'
 import allRedcers from './AppData/reducers/index'
 import thunk  from 'redux-thunk';
 
 
 const store=createStore(allRedcers,
     compose(applyMiddleware(thunk))
 );

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Index from './components/Index'
import About from './components/About'
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
       <Drawer.Navigator initialRouteName="Index">
        <Drawer.Screen name="Index" component={Index} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
      </Provider>
    </NavigationContainer>
  );
}