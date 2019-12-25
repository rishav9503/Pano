import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Icon, Card, Avatar, ListItem} from 'react-native-elements';
export default class Second extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
  }
  componentDidMount() {
    this.fetchComments();
  }

  async fetchComments() {
    try {
      const response = await fetch('https://panorbit.in/api/comments.json');
      const myJson = await response.json();
      console.log(myJson, 'comm');
      this.setState({comments: myJson.comments});

      //   this.setState({posts: myJson.posts});
      console.log(this.state.comments, '33');
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <View>
        <ScrollView>
          {this.state.comments.length > 0 ? (
            this.state.comments.map((item, key) => {
              let Image_Http_URL = {uri: item.image};
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
      </View>
    );
  }
}
