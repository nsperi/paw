import { FlatList, StyleSheet, Text, View } from 'react-native'
import pets from '../utils/data/pets.json'
import { useEffect, useState } from 'react'
import PetByCategory from '../components/PetByCategory'
import Search from '../components/Search'

const PetsByCategory = ({navigation, route}) => {

  const {categorySelected} = route.params
  const [petsFiltered,setPetsFiltered] = useState([])
  const [keyword,setKeyword] = useState("")

  const handlerKeyword = (k) => {
    setKeyword(k)
  }
  useEffect(()=>{
   if(categorySelected)  setPetsFiltered(pets.filter(pet => pet.category === categorySelected))
   if(keyword) setPetsFiltered(petsFiltered.filter(pet => {
    const petTitleLower = pet.title.toLowerCase()
    const keywordLower = keyword.toLowerCase()
    return petTitleLower.includes(keywordLower)
  }))
  },[categorySelected,keyword])


  return (
    <>
        <Search handlerKeyword={handlerKeyword}/>
        <FlatList
          data={petsFiltered}
          keyExtractor={item => item.id}
          renderItem={({item})=> <PetByCategory navigation={navigation} item={item}/>}
        />
    </>
  )
}

export default PetsByCategory

const styles = StyleSheet.create({})