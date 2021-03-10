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
    <View style={styles.logo}>
      <Svg
        name="netflix"
        width={100}
        height={100}
        style={{ alignSelf: 'center' }}
      />
    </View>

    <ScrollView>
      <View
        style={{
          width: 80,
          height: 40,
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: -1,
        }}
      />
      <View style={{ marginVertical: 20 }}>
        <Text style={{ color: 'white', fontSize: 20, margin: 10 }}>
          Netflix Original
        </Text>
        <ScrollView horizontal>
          {data['original'].map((ori) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                <Svg name={`${ori.title}`} width={135} height={180} />
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      </View>
      <View style={{ marginVertical: 10 }}>
        <Text style={{ color: 'white', fontSize: 20, margin: 10 }}>
          Popular on Netflix
        </Text>
        <ScrollView horizontal>
          {data['popular'].map((ori) => {
            return (
              <TouchableOpacity>
                <Svg name={`${ori.title}`} width={135} height={180} />
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      </View>
      <View style={{ marginVertical: 10 }}>
        <Text style={{ color: 'white', fontSize: 20, margin: 10 }}>
          Trending now
        </Text>
        <ScrollView horizontal>
          {data['trending'].map((ori) => {
            return (
              <TouchableOpacity>
                <Svg name={`${ori.title}`} width={135} height={180} />
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      </View>
      <View style={{ marginVertical: 10 }}>
        <Text style={{ color: 'white', fontSize: 20, margin: 10 }}>Action</Text>
        <ScrollView horizontal>
          {data['original'].map((ori) => {
            return (
              <TouchableOpacity>
                <Svg name={`${ori.title}`} width={135} height={180} />
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      </View>
      <View style={{ marginVertical: 10 }}>
        <Text style={{ color: 'white', fontSize: 20, margin: 10 }}>
          Trending now
        </Text>
        <ScrollView horizontal>
          {data['trending'].map((ori) => {
            return (
              <TouchableOpacity>
                <Svg name={`${ori.title}`} width={135} height={180} />
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      </View>
      <View style={{ marginVertical: 10 }}>
        <Text style={{ color: 'white', fontSize: 20, margin: 10 }}>
          Popular on Netflix
        </Text>
        <ScrollView horizontal>
          {data['popular'].map((ori) => {
            return (
              <TouchableOpacity>
                <Svg name={`${ori.title}`} width={135} height={180} />
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      </View>
    </ScrollView>
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
