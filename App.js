import { StyleSheet, Text, View, SafeAreaView, useWindowDimensions } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Home from './src/screens/Home'
import { useEffect, useState } from 'react'
import PetsByCategory from './src/screens/PetsByCategory'
import {useFonts} from "expo-font"
import { fontCollection } from './src/utils/globals/fonts'
import PetDetail from './src/screens/PetDetail'
import colors from './src/utils/globals/colors'



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
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.bgcolor} />
      <SafeAreaView style={styles.container}>
        {categorySelected ?
                  petId ?
                    <PetDetail 
                      petId={petId}
                      portrait={portrait}
                       />
                    : 
                    <PetsByCategory 
                      selectedPetId={selectedPetId} 
                      categorySelected={categorySelected}/>
                  :
                  <Home selectedCategoryState={selectedCategoryState}/>
                  
        }
      </SafeAreaView>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
  flex:1,
  backgroundColor:colors.bgcolor
  }
})