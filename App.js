import { StyleSheet, Text, View, SafeAreaView, useWindowDimensions } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import {useFonts} from "expo-font"
import { fontCollection } from './src/utils/globals/fonts'
import colors from './src/utils/globals/colors'
import MainNavigator from './src/navigation/MainNavigator'



const App = () => {

  const [fontsLoaded] = useFonts(fontCollection)
  const [categorySelected,setCategorySelected] = useState("")
  const [petId,setPetId] = useState(0)
  const {width,height} = useWindowDimensions()
  const [portrait,setPortrait] = useState(true)


  useEffect(()=>{
    if(width > height) setPortrait(false) 
    else setPortrait(true)
  },[width,height])

  if(!fontsLoaded) return null

  const selectedCategoryState = (category) => {
    setCategorySelected(category)

  }
  const selectedPetId = (id) => {
    setPetId(id)
  }


  return (
    <>
      <StatusBar backgroundColor={colors.bgcolor} />
      <MainNavigator/>
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