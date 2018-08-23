import React, { Component } from 'react';
import { axios, StyleSheet, AppRegistry, View, Text, Alert, TextInput, Button, FlatList } from 'react-native';

export default class FlexDimensionsBasics extends Component {
  constructor(props) {
    super(props);
    this.state = { texts: '' };
  }
  componentDidMount() {
    return fetch('https://api.androidhive.info/json/contacts.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function () {

        });

      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
        <Text>Hello my friend please Enter your name:</Text>
        <TextInput
          style={{ height: 40, width: '100%', marginBottom: 50 }}
          placeholder="Add your name here"
          onChangeText={(texts) => this.setState({ texts })}
        />
        <Button
          style={{ height: 40, width: '100%' }}
          onPress={this.shortpressed}
          title="Ok" />
          <Button
            title="Hello"
            onPress={{}}
          />
          <Button
            title="Hello"
            onPress={{}}
          />
          <Button
            title="Hello"
            onPress={{}}
          />

        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.name}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
  shortpressed() {

  }
  longPress() {
    Alert.alert('You hold clicked on button')
  }
}
function getMoviesFromApiAsync() {
  return fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.movies;
    })
    .catch((error) => {
      console.error(error);
    });
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => FlexDimensionsBasics);
