import { View, Text } from 'react-native'
import React from 'react'
import crashlytics from '@react-native-firebase/crashlytics'

export default function App() {
  crashlytics().log("Hello day la log")
  crashlytics().crash()
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}