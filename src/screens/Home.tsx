import { View, Text, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../database/constants'
import Entypo from '@react-native-vector-icons/entypo'

const Home = () => {
  return (
    <View style={{
      width: '100%',
      height: '100%',
      backgroundColor: COLORS.white,
     }}>
      <StatusBar barStyle="default" />
      <ScrollView showsVerticalScrollIndicator={false}>
    <View
    style={{
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 16,
    }}>
    <TouchableOpacity>
      {/* <Entypo name={'key'}/> */}
      
      </TouchableOpacity>
    </View>
   
      </ScrollView>
    </View>
  )
}

export default Home