import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Icon, Card, Avatar} from 'react-native-elements';

export default class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userPicture: '',
      posts: [],
    };
  }
  componentDidMount() {
    this.fetchUserDetails();
    this.fetchPosts();
  }
  async fetchUserDetails() {
    const response = await fetch('https://panorbit.in/api/users.json');
    const myJson = await response.json();
    this.setState({userPicture: myJson.users[0].profilepicture});
  }
  async fetchPosts() {
    try {
      const response = await fetch('https://panorbit.in/api/posts.json');
      const myJson = await response.json();
      console.log(myJson, 'Posts');

      this.setState({posts: myJson.posts});
      console.log(this.state.posts.length, '33');
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    console.log(this.state.posts.length, '33');
    return (
      <View style={{padding: 10}}>
        <View
          style={{
            alignSelf: 'flex-start',
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 60,
            alignItems: 'center',
            width: '100%',
          }}>
          <View
            style={{
              alignSelf: 'flex-start',
              flexDirection: 'row',
              justifyContent: 'space-around',
              height: 60,
              alignItems: 'center',
            }}>
            <Image
              source={require('./assets/hamburger.png')}
              style={{width: 20, height: 20, marginRight: 10}}
            />
            <Image
              style={{width: 100, height: 50}}
              source={require('./assets/logo.jpg')}
            />
          </View>
          {this.state.userPicture !== '' && (
            <Avatar
              rounded
              size={30}
              source={{
                uri: this.state.userPicture,
              }}
            />
          )}
        </View>
        <ScrollView>
          {this.state.posts.length > 0 ? (
            this.state.posts.map((item, key) => {
              let Image_Http_URL = {uri: item.image};
              return (
                <View>
                  <View style={{flexDirection: 'row', marginVertical: 20}}>
                    <Avatar
                      rounded
                      size={20}
                      source={{
                        uri: this.state.userPicture,
                      }}
                    />
                    <Text>Post by Jason Fried</Text>
                  </View>

                  <Text style={{fontWeight: '700', fontSize: 14}}>
                    {' '}
                    {item.title}
                  </Text>
                  <Text style={{color: '#d9d9d9', fontSize: 10}}>
                    {item.time}
                  </Text>
                  <Card
                    containerStyle={{
                      padding: 0,
                      borderTopRightRadius: 25,
                      borderTopLeftRadius: 25,
                    }}>
                    <Image
                      style={{borderRadius: 25, height: 150, width: '100%'}}
                      source={Image_Http_URL}
                    />
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity style={{margin: 8}}>
                          <Image
                            style={{height: 25, width: 25}}
                            source={require('./assets/like.png')}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity style={{margin: 8}}>
                          <Image
                            style={{height: 25, width: 25}}
                            source={require('./assets/comment.png')}
                          />
                        </TouchableOpacity>
                      </View>

                      <TouchableOpacity
                        onPress={() =>
                          this.props.navigation.navigate('Details', {
                            itemId: item.postId,
                          })
                        }
                        style={{
                          margin: 8,
                          flexDirection: 'row',
                          justifyContent: 'space-around',
                          alignSelf: 'flex-end',
                        }}>
                        <Text>Add a comment</Text>
                        <Avatar
                          rounded
                          size={20}
                          source={{
                            uri: this.state.userPicture,
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                  </Card>
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
