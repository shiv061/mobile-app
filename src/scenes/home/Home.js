import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native'
import Svg from 'components/Svg'
import { colors } from 'theme'
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler'
import { data } from '../../theme/images'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.black,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  logo: {
    width: '100%',
    position: 'absolute',
    top: 15,
    zIndex: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
})

const Home = ({ navigation }) => (
  <SafeAreaView style={styles.root}>
    <StatusBar barStyle="dark-content" />
  </SafeAreaView>
)

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Home.defaultProps = {
  navigation: { navigate: () => null },
}

export default Home
