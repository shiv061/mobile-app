import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native'
import Button from 'components/Button'
import { Entypo } from '@expo/vector-icons'
import { colors } from 'theme'
import Svg from '../../components/Svg'
import { fonts } from '../../theme/fonts'
import { AntDesign } from '@expo/vector-icons'
import { color } from 'react-native-reanimated'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.black,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
})

const Details = ({ route, navigation }) => {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
    </View>
  )
}

Details.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ from: PropTypes.string }),
  }),
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }),
}

Details.defaultProps = {
  route: { params: { from: '' } },
  navigation: { goBack: () => null },
}

export default Details
