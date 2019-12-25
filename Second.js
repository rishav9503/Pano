import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {Icon, Card, Avatar, ListItem} from 'react-native-elements';
export default class Second extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      isLoading: false,
    };
  }
  componentDidMount() {
    this.fetchComments();
  }

  async fetchComments() {
   
    try {
        this.setState({isLoading: true});
     
      const response = await fetch('https://panorbit.in/api/comments.json');
      const myJson = await response.json();
      console.log(myJson, 'comm');
      this.setState({comments: myJson.comments, isLoading: false});

      this.setState({isLoading: false});
    } catch (error) {
      console.log(error);
      this.setState({isLoading: false});
    }
  }
  render() {
    return (
      <View>
        <ScrollView>
          {!this.state.isLoading && this.state.comments.length > 0 ? (
            this.state.comments.map((item, key) => {
              return (
                <View>
                  <ListItem
                    key={key}
                    leftAvatar={{source: {uri: item.profilePicture}}}
                    subtitle={item.body}
                    bottomDivider
                  />
                </View>
              );
            })
          ) : (
            <Text>Nothing to show</Text>
          )}
        </ScrollView>
        {this.state.isLoading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#111111" />
          </View>
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  loadingContainer: {
    opacity: 0.7,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    // bottom: 0,
    alignItems: 'center',
    zIndex: 1,
  },
});
