import { FlatList, StyleSheet, Text, View } from 'react-native'
import pets from '../utils/data/pets.json'
import Header from '../components/Header'
import { useEffect, useState } from 'react'
import PetByCategory from '../components/PetByCategory'
import Search from '../components/Search'

const PetsByCategory = ({categorySelected,selectedPetId}) => {

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
        <Header title={categorySelected}/>
        <Search handlerKeyword={handlerKeyword}/>
        <FlatList
          data={petsFiltered}
          keyExtractor={item => item.id}
          renderItem={({item})=> <PetByCategory selectedPetId={selectedPetId} item={item}/>}
        />
    </>
  )
}

export default PetsByCategory

const styles = StyleSheet.create({})