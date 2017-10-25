import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Main from './src/Main'
import Router from './Router'

export default class App extends Component<{}> {
  render() {
    return (
      <Router />
    );
  }
}

