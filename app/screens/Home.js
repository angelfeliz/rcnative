import React, { Component } from 'react'
import { View, ScrollView, WebView } from 'react-native'
// import { Container, Content, Card, CardItem, Body, Text } from 'native-base'
import genericCardData from '../data/genericCardData'
import GenericCard from '../components/cards/genericCard/GenericCard'

export default class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Home'
  })
  render () {
    return (
      <View>
        <WebView
          source={{ uri: 'https://github.com/facebook/react-native' }}
          style={{ marginTop: 20 }}
        />
        <ScrollView>
          <View>
            {genericCardData.map((item, index) => {
              return (
                <GenericCard
                  key={index}
                  title={item.title}
                  description={item.description}
                  link={item.link}
                />
              )
            })}
          </View>
        </ScrollView>
      </View>
    )
  }
}
