import React from 'react'
import {
  View,
  Text,
  ImageBackground,
  TouchableWithoutFeedback
} from 'react-native'
import styles from './styles'

const ImageBanner = props => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require('../../../assets/Sts-Cosmas-and-Damian-hero.jpg')}
        >
          <View style={styles.innerView}>
            <Text style={{ fontSize: 40 }}>go</Text>
          </View>
        </ImageBackground>
        <View style={styles.overlay} />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default ImageBanner

/*
  <ImageBackground
          //style={styles.image}
          //source={require('../../../assets/Sts-Cosmas-and-Damian-hero.jpg')}
        >

        </ImageBackground>
        */
