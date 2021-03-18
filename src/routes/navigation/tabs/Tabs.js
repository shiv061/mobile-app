import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { colors } from 'theme'
import Svg from '../../../components/Svg'

// stack navigators
import { HomeNavigator, ProfileNavigator } from '../stacks'

const Tab = createBottomTabNavigator()

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ focused }) => {
        switch (route.name) {
          case 'Home':
            return <Svg name="down" width={20} height={20} />
          case 'Search':
            return <Svg name="home" width={20} height={20} />
          case 'Setting':
            return <Svg name="search" width={20} height={20} />
          case 'Download':
            return <Svg name="setting" width={20} height={20} />
          default:
            return <View />
        }
      },
    })}
    tabBarOptions={{
      activeTintColor: colors.lightPurple,
      inactiveTintColor: colors.gray,
      showLabel: false,
      style: {
        backgroundColor: 'rgba(0,0,0,0.7)',
        borderTopWidth: 0,
        position: 'absolute',
        display: 'none',
      },
    }}
    initialRouteName="Home"
    swipeEnabled={false}
  >
    <Tab.Screen name="Home" component={HomeNavigator} />
    <Tab.Screen name="Search" component={ProfileNavigator} />
    <Tab.Screen name="Setting" component={ProfileNavigator} />
    <Tab.Screen name="Download" component={ProfileNavigator} />
  </Tab.Navigator>
)

export default TabNavigator
