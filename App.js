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

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
