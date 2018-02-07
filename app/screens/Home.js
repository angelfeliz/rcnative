import React, { Component } from 'react'
import { View } from 'react-native'
// import { Container, Content, Card, CardItem, Body, Text } from 'native-base'
import ImageBanner from '../components/banners/imageBanner/ImageBanner'

export default class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Home'
  })
  render () {
    return (
      <View>
        <ImageBanner />
      </View>
    )
  }
}
