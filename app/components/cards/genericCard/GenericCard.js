import React from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import styles from './styles'

const GenericCard = props => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <View style={styles.cardBoard}>
          <Text style={styles.titleCard}>{props.title}</Text>
          <View style={styles.description}>
            <Text style={styles.descriptionCard}>{props.description}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default GenericCard
