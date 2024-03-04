import { StyleSheet, Text, View, SafeAreaView, useWindowDimensions } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import {useFonts} from "expo-font"
import { fontCollection } from './src/utils/globals/fonts'
import colors from './src/utils/globals/colors'
import MainNavigator from './src/navigation/MainNavigator'
import { store } from './src/app/store'
import { Provider } from 'react-redux'



const App = () => {

  const [fontsLoaded] = useFonts(fontCollection)
  const {width,height} = useWindowDimensions()
  const [portrait,setPortrait] = useState(true)


  useEffect(()=>{
    if(width > height) setPortrait(false) 
    else setPortrait(true)
  },[width,height])

  if(!fontsLoaded) return null

  return (
    <>
      <StatusBar backgroundColor={colors.bgcolor} />
      <Provider store={store}>
        <MainNavigator/>
      </Provider>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
  flex:1,
  backgroundColor:colors.bgcolor
  }
})