import EStyleSheet from 'react-native-extended-stylesheet'

const styles = EStyleSheet.create({
  container: {
    // flexDirection: 'column',
    // flex: 1,
    height: '8rem',
    marginLeft: '1rem',
    marginRight: '1rem'
  },
  image: {
    width: undefined,
    height: undefined,
    flex: 1,
    // alignSelf: 'stretch',
    // resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
    // justifyContent: 'flex-end',
    // alignItems: 'flex-start',
  },
  innerView: {
    backgroundColor: 'transparent'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(21, 109, 2, 0.5)'
  }
})

export default styles
