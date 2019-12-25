/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Icon, Card} from 'react-native-elements';
import Feed from './Feed';
import Second from './Second';
import 'react-native-gesture-handler';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
console.disableYellowBox = true;
const RootStack = createStackNavigator(
  {
    Home: {
      screen: Feed,
      navigationOptions: ({navigation}) => ({
        header: null,
      }),
    },

    Details: {
      screen: Second,
      navigationOptions: ({navigation}) => ({
        title: 'Comments',
        // headerLeft: <Icon name="menu" onPress={() => navigation.openDrawer()} />,
        headerTitleStyle: {
          fontSize: 24,
          fontWeight: '500',
          color: '#000',
        },
      }),
    },
  },
  {
    initialRouteName: 'Home',
  },
);
const AppContainer = createAppContainer(RootStack);
const App: () => React$Node = () => {
  return (
    <View style={{flex: 1}}>
      <AppContainer />
    </View>
  );
};


export default App;
