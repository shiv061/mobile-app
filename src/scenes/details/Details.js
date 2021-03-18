import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
  LayoutAnimation,
} from 'react-native'
import Button from 'components/Button'
import { Entypo } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { colors } from 'theme'
import Svg from '../../components/Svg'
import { fonts } from '../../theme/fonts'
import { color } from 'react-native-reanimated'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.sec,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
})

const Details = ({ route, navigation }) => {
  const [booked, setBooked] = useState(false)
  const [moveCar, setMoveCar] = useState(false)
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="light-content" />
      {moveCar && (
        <Text
          style={{
            fontSize: 30,
            letterSpacing: 10,
            color: 'white',
            fontWeight: 'bold',
            position: 'absolute',
            top: '50%',
            left: '11%',
            textAlign: 'center',
          }}
        >
          Order Placed!
        </Text>
      )}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 15,
          paddingVertical: 10,
        }}
      >
        <AntDesign
          name="arrowleft"
          size={24}
          color="white"
          onPress={() => navigation.goBack()}
        />
        <AntDesign name="hearto" size={24} color="white" />
      </View>
      <View style={{ position: 'relative' }}>
        <Svg
          name={moveCar ? 'carBlue' : 'carBlueCut'}
          width="100%"
          height={booked ? '130%' : 300}
        />
        {!booked && (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              position: 'absolute',
              bottom: 60,
              left: '40%',
            }}
          >
            <View
              style={{
                width: 8,
                height: 8,
                backgroundColor: 'white',
                marginHorizontal: 5,
                borderRadius: 4,
                opacity: 0.5,
              }}
            />
            <View
              style={{
                width: 8,
                height: 8,
                backgroundColor: 'white',
                marginHorizontal: 5,
                borderRadius: 4,
              }}
            />
            <View
              style={{
                width: 8,
                height: 8,
                backgroundColor: 'white',
                marginHorizontal: 5,
                borderRadius: 4,
                opacity: 0.5,
              }}
            />
            <View
              style={{
                width: 8,
                height: 8,
                backgroundColor: 'white',
                marginHorizontal: 5,
                borderRadius: 4,
                opacity: 0.5,
              }}
            />
          </View>
        )}
      </View>
      {!booked && (
        <>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
            }}
          >
            <View>
              <Text style={{ fontSize: 20, color: 'white', fontWeight: '600' }}>
                Model S
              </Text>
              <Text style={{ color: 'white', fontWeight: '300', marginTop: 6 }}>
                Ludicrous Mode
              </Text>
            </View>
            <View>
              <Svg name="tesla" height={50} width={100} />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingLeft: 20,
              marginTop: 20,
              alignItems: 'center',
            }}
          >
            <View>
              <Text style={{ fontSize: 20, color: 'white', fontWeight: '600' }}>
                $99,000
              </Text>
              <Text style={{ color: 'white', fontWeight: '200', marginTop: 6 }}>
                Base Price
              </Text>
            </View>
            <View>
              <View
                style={{
                  width: 150,
                  height: 60,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderTopLeftRadius: 45,
                  borderBottomLeftRadius: 45,
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    LayoutAnimation.configureNext(
                      {
                        duration: 1000,
                        create: { type: 'linear', property: 'opacity' },
                        update: { type: 'spring', springDamping: 0.4 },
                        delete: { type: 'linear', property: 'opacity' },
                      },
                      () => {
                        LayoutAnimation.configureNext(
                          LayoutAnimation.Presets.easeInEaseOut,
                        )
                        setMoveCar(true)
                      },
                    )
                    setBooked(true)
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      color: colors.primary,
                      fontWeight: '500',
                    }}
                  >
                    Book Now
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 35,
              marginTop: 30,
            }}
          >
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Svg name="icon3" />
              <Text
                style={{
                  color: 'white',
                  fontWeight: '600',
                  marginVertical: 4,
                  fontSize: 18,
                }}
              >
                2.3s
              </Text>
              <Text style={{ fontWeight: '200', color: 'white' }}>From</Text>
              <Text style={{ fontWeight: '200', color: 'white' }}>
                0-60 mph
              </Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Svg name="icon1" />
              <Text
                style={{
                  color: 'white',
                  fontWeight: '600',
                  marginVertical: 4,
                  fontSize: 18,
                }}
              >
                28cu ft
              </Text>
              <Text style={{ fontWeight: '200', color: 'white' }}>Best in</Text>
              <Text style={{ fontWeight: '200', color: 'white' }}>
                Class Storage
              </Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Svg name="icon2" />
              <Text
                style={{
                  color: 'white',
                  fontWeight: '600',
                  marginVertical: 4,
                  fontSize: 18,
                }}
              >
                402mi
              </Text>
              <Text style={{ fontWeight: '200', color: 'white' }}>Range</Text>
              <Text style={{ fontWeight: '200', color: 'white' }}>
                (EPA est.)
              </Text>
            </View>
          </View>
          <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
            <Text style={{ color: 'white', fontWeight: '500', fontSize: 18 }}>
              Details
            </Text>
            <Text
              style={{
                color: 'white',
                marginTop: 10,
                fontWeight: '300',
                textAlign: 'justify',
              }}
            >
              Model S is built for speed and endurance, with ludicrous
              acceleration, unparalleled performance and a sleek aesthetic.
            </Text>
          </View>
        </>
      )}
    </SafeAreaView>
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
