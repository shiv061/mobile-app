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
import { AntDesign } from '@expo/vector-icons'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
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
    <StatusBar barStyle="light-content" />
    <View>
      <Svg name="tesla" width={120} height={60} />
    </View>
    <ScrollView horizontal style={{ marginVertical: 8 }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <View>
          <Text
            style={{
              color: 'white',
              marginHorizontal: 20,
              fontSize: 18,
              fontWeight: '600',
            }}
          >
            Model S
          </Text>
          <View
            style={{
              width: 80,
              height: 8,
              backgroundColor: 'white',
              marginLeft: 15,
              marginTop: 4,
            }}
          />
        </View>
        <Text
          style={{
            color: 'white',
            marginHorizontal: 20,
            fontSize: 18,
            fontWeight: '600',
          }}
        >
          Model 3
        </Text>
        <Text
          style={{
            color: 'white',
            marginHorizontal: 20,
            fontSize: 18,
            fontWeight: '600',
          }}
        >
          Model X
        </Text>
        <Text
          style={{
            color: 'white',
            marginHorizontal: 20,
            fontSize: 18,
            fontWeight: '600',
          }}
        >
          Model Y
        </Text>
      </View>
    </ScrollView>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          flex: 1,
          width: 300,
          height: 350,
          backgroundColor: colors.sec,
          marginVertical: 30,
          borderRadius: 32,
        }}
      >
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}
        >
          <AntDesign
            name="hearto"
            size={24}
            color="white"
            style={{ margin: 12 }}
          />
        </View>
        <View>
          <Svg name="carBlue" width="100%" height={150} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 25,
          }}
        >
          <View>
            <Text style={{ color: 'white', fontWeight: '600', fontSize: 18 }}>
              Model S
            </Text>
            <Text style={{ color: 'white' }}>Ludicrous Mode</Text>
          </View>
          <View>
            <Text style={{ color: 'white', fontWeight: '600', fontSize: 18 }}>
              $99,000
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 12,
                opacity: 0.6,
                textAlign: 'center',
              }}
            >
              Base Price
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 'auto',
            justifyContent: 'space-between',
          }}
        >
          <View
            style={{
              paddingVertical: 20,
              paddingHorizontal: 20,
              flexDirection: 'row',
            }}
          >
            <Text style={{ fontSize: 18, color: 'white' }}>Details</Text>
            <AntDesign
              name="arrowright"
              size={24}
              color="white"
              style={{ marginLeft: 6 }}
            />
          </View>
          <TouchableOpacity
            style={{
              paddingVertical: 20,
              paddingHorizontal: 40,
              backgroundColor: 'white',
              borderBottomRightRadius: 32,
              borderTopLeftRadius: 32,
              alignItems: 'center',
            }}
            onPress={() => navigation.navigate('Details')}
          >
            <Text style={{ fontSize: 18, color: colors.sec }}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          width: 300,
          height: 350,
          backgroundColor: colors.ter,
          marginVertical: 30,
          borderRadius: 32,
        }}
      >
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}
        >
          <AntDesign
            name="hearto"
            size={24}
            color="white"
            style={{ margin: 12 }}
          />
        </View>
        <View>
          <Svg name="carBlack" width="100%" height={150} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 25,
          }}
        >
          <View>
            <Text style={{ color: 'white', fontWeight: '600', fontSize: 18 }}>
              Model S
            </Text>
            <Text style={{ color: 'white' }}>Performance</Text>
          </View>
          <View>
            <Text style={{ color: 'white', fontWeight: '600', fontSize: 18 }}>
              $99,000
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 12,
                opacity: 0.6,
                textAlign: 'center',
              }}
            >
              Base Price
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 'auto',
            justifyContent: 'space-between',
          }}
        >
          <View
            style={{
              paddingVertical: 20,
              paddingHorizontal: 20,
              flexDirection: 'row',
            }}
          >
            <Text style={{ fontSize: 18, color: 'white' }}>Details</Text>
            <AntDesign
              name="arrowright"
              size={24}
              color="white"
              style={{ marginLeft: 6 }}
            />
          </View>
          <View
            style={{
              paddingVertical: 20,
              paddingHorizontal: 40,
              backgroundColor: 'white',
              borderBottomRightRadius: 32,
              borderTopLeftRadius: 32,
              alignItems: 'center',
            }}
          >
            <Text style={{ fontSize: 18, color: colors.sec }}>Book Now</Text>
          </View>
        </View>
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
