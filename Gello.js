import React, { Component } from 'react';
import { axios, StyleSheet, AppRegistry, View, Text, Alert, TextInput, Button, FlatList } from 'react-native';

export default class FlexDimensionsBasics extends Component {
  constructor(props) {
    super(props);
    this.state = { texts: '' };
  }

  render() {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
      </View>
    );
  }

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
