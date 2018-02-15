import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Icon } from 'native-base'
import UpperLetterCard from '../components/cards/upperLetterCard/UpperLetterCard'
import EStyleSheet from 'react-native-extended-stylesheet'

const TYPE_LETTER = [
  'Sample Letterhead',
  'Letter Writing Guide',
  'Page One Template',
  'Page Two Template'
]
const styles = EStyleSheet.create({
  paragraph: {
    flex: 1,
    paddingLeft: 1,
    paddingRight: 1
  },
  title: {
    fontSize: 18,
    marginTop: 5,
    marginBottom: 10,
    textAlign: 'center'
  },
  description: {
    marginBottom: 12,
    lineHeight: 23
  },
  letter: {
    flex: 1,
    flexDirection: 'column'
  },
  arrowStyle: {
    paddingLeft: 6,
    paddingBottom: 3,
    color: 'white'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 3,
    paddingRight: 3
  }
})

const description = `Father Sean Sheridan, TOR, has approved an official Franciscan University letter-writing style he would like all departments to adopt when writing University correspondence on electronic or printed University letterhead. Please review the sample letter and letter-writing instructions provided here for assistance.

We have provided an electronic letterhead template for your use. For print correspondence, we ask that you order official University letterhead on quality paper stock from Victoria Bell, Print Services Manager, Mail and Print Services Office (vbell@franciscan.edu/740-283-6354).`

class LetterHead extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: '',
    headerLeft: (
      <Icon
        style={styles.arrowStyle}
        ios="ios-arrow-back-outline"
        android="md-arrow-back"
        onPress={() => navigation.navigate('Home')}
      />
    )
  })
  render () {
    const { params } = this.props.navigation.state
    console.log(params ? params.title : 'no money')
    return (
      <ScrollView style={styles.container}>
        <View style={styles.paragraph}>
          <View>
            <Text style={styles.title}>{params.title}</Text>
          </View>
          <Text style={styles.description}>{description}</Text>
        </View>
        <View style={styles.letter}>
          {TYPE_LETTER.map((item, index) => {
            return <UpperLetterCard key={index} title={item} />
          })}
        </View>
      </ScrollView>
    )
  }
}

export default LetterHead
