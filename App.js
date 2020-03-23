import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { observer } from 'mobx-react';
import Feed from './src/feed';
import Detail from './src/detail';

import Screen1 from './src/screens/drawer/screen1';
import Screen2 from './src/screens/drawer/screen2';
import Screen3 from './src/screens/drawer/screen3';

import Tab1 from './src/screens/tabs/Tab1';
import Tab2 from './src/screens/tabs/Tab2';
import Tab3 from './src/screens/tabs/Tab3';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();

const createHomeStack = () =>
<>
<StatusBar barStyle="light-content" />
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        children={createDrawer}
        options={{
          title: "My Feed",
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white"
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          title: "Detail Screen",
          headerStyle: { backgroundColor: "blue" },
          headerTintColor: "white"
        }}
      />
      <Stack.Screen name="Bottom Tabs" children={createBottomTabs} />
      <Stack.Screen name="Top Tabs" children={createTopTabs} />
    </Stack.Navigator>
    </>;

const createDrawer = () =>
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Contacts" component={Screen1} />
      <Drawer.Screen name="Favorites" component={Screen2} />
      <Drawer.Screen name="Settings" component={Screen3} />
    </Drawer.Navigator>;

const createTopTabs = (props) => 
<>
  <StatusBar barStyle="dark-content" />
  <MaterialTopTabs.Navigator>
    <MaterialTopTabs.Screen
      name="Tab 1"
      component={Tab1}
      options={{ title: props.route.params.name }}
    />
    <MaterialTopTabs.Screen name="Tab 2" component={Tab2} />
    <MaterialTopTabs.Screen name="Tab 3" component={Tab3} />
  </MaterialTopTabs.Navigator>
</>

 const createBottomTabs = () =>  <>
 <StatusBar barStyle="dark-content" />
 <MaterialBottomTabs.Navigator>
   <MaterialBottomTabs.Screen
     name="Tab 1"
     style={{ marginBottom: 16 }}
     component={Tab1}
     options={{
       tabBarLabel: 'Home',
       tabBarIcon: () => (
         <Icon style={[{ color: 'white' }]} size={25} name={'home'} />
       ),
     }}
   />
   <MaterialBottomTabs.Screen name="Tab 2" component={Tab2}
     options={{
       tabBarLabel: 'Profile',
       tabBarIcon: () => (
         <Icon style={[{ color: 'white' }]} size={25} name={'human'} />
       )
     }}
   />
   <MaterialBottomTabs.Screen name="Tab 3" component={Tab3}
     options={{
       tabBarLabel: 'Map',
       tabBarIcon: () => (
         <Icon style={[{ color: 'white' }]} size={25} name={'map'} />
       ),
     }}
   />
 </MaterialBottomTabs.Navigator>
 </>

const App = observer(() =>  
  <NavigationContainer>
    {createHomeStack()}
  </NavigationContainer>);

export default App;

App.defaultProps = {
};
App.propTypes = {
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen'
  }
});
