import { View, Text } from 'react-native'
import React from 'react'

export default function User_index({route}) {
  return (
    <View>
      <Text>{route.params.content.username}</Text>
      <Text>{route.params.content.password}</Text>

    </View>
  )
}