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
  const from = route?.params?.from
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: 25,
          top: 40,
          width: 30,
          height: 30,
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 15,
        }}
        onPress={() => navigation.goBack()}
      >
        <Entypo name="cross" size={24} color="white" />
      </TouchableOpacity>
      <View>
        <Svg
          name="back"
          width="100%"
          height={210}
          style={{ backgroundColor: 'black', opacity: 0.5 }}
        />
        <View
          style={{ flexDirection: 'row', position: 'absolute', top: '80%' }}
        >
          <View>
            <Svg name="card1" width={140} height={150} />
          </View>
          <View style={{ flex: 1 }}>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                marginTop: 20,
              }}
            >
              <View style={{ marginRight: 30 }}>
                <Text style={{ color: '#4BEF79' }}>91% Match</Text>
                <Text style={{ color: 'white', marginTop: 6 }}>TV - MA</Text>
              </View>
              <View>
                <Text style={{ color: 'white' }}>2 Seasons</Text>
                <Text style={{ color: 'white', marginTop: 6 }}>2018</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'space-between',
                paddingRight: 30,
              }}
            >
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Svg name="thumb" width={22} height={22} />
                <Text style={{ color: 'white', fontSize: 12, marginTop: 8 }}>
                  Add
                </Text>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Svg name="plus" width={22} height={22} />
                <Text style={{ color: 'white', fontSize: 12, marginTop: 8 }}>
                  Rate
                </Text>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Svg name="share" width={22} height={22} />
                <Text style={{ color: 'white', fontSize: 12, marginTop: 8 }}>
                  Share
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View
          style={{
            marginTop: '35%',
            width: '90%',
            height: 45,
            backgroundColor: colors.pink,
            marginHorizontal: 20,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}
        >
          <Svg name="play" width={26} height={26} />
          <Text
            style={{
              color: 'white',
              marginLeft: 10,
              fontWeight: 'bold',
              fontSize: 20,
            }}
          >
            PLAY
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          margin: 10,
          marginHorizontal: 20,
          marginTop: 90,
        }}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            lineHeight: 25,
            textAlign: 'justify',
          }}
        >
          A look at the personal and professional lives of a group of women who
          perform for a wrestling organization in Los Angeles during the 1980s.
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row' }}>
          <Svg
            name="circle1"
            width={50}
            height={50}
            style={{ marginHorizontal: 8, marginLeft: 25 }}
          />
          <Svg
            name="circle2"
            width={50}
            height={50}
            style={{ marginHorizontal: 8 }}
          />
          <Svg
            name="circle3"
            width={50}
            height={50}
            style={{ marginHorizontal: 8 }}
          />
          <Svg
            name="circle4"
            width={50}
            height={50}
            style={{ marginHorizontal: 8 }}
          />
        </View>
      </View>
      <View style={{ flex: 2 }}>
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
            <Text style={{ color: 'white', marginRight: 20, fontSize: 18 }}>
              Episodes
            </Text>
            <Text style={{ color: 'white', fontSize: 18 }}>
              Trailers & More
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              height: 1,
              backgroundColor: '#5B5B5B',
              marginTop: 5,
            }}
          />
          <View
            style={{
              width: 80,
              height: 3,
              backgroundColor: '#E50914',
              marginLeft: 17,
              position: 'absolute',
              marginTop: 24,
            }}
          />
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                  fontWeight: 'bold',
                  marginHorizontal: 20,
                  marginVertical: 10,
                  width: 80,
                }}
              >
                Season 2
              </Text>
              <AntDesign name="down" size={20} color="white" />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                  fontWeight: 'bold',
                  marginHorizontal: 20,
                  marginVertical: 10,
                  width: 80,
                }}
              >
                Season 1
              </Text>
              <AntDesign name="down" size={20} color="white" />
            </View>
          </View>
        </View>
      </View>
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
