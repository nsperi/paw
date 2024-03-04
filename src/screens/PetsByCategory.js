import { FlatList, StyleSheet, Text, View, ScrollView } from 'react-native'
import pets from '../utils/data/pets.json'
import { useEffect, useState } from 'react'
import PetByCategory from '../components/PetByCategory'
import Search from '../components/Search'
import { useGetPetsByCategoryQuery } from '../app/services/shop'

const PetsByCategory = ({navigation, route}) => {

  const {categorySelected} = route.params
  const {data:pets,isError,isLoading,isSuccess,error} = useGetPetsByCategoryQuery(categorySelected)
  const [petsFiltered,setPetsFiltered] = useState([])
  const [keyword,setKeyword] = useState("")

  const handlerKeyword = (k) => {
    setKeyword(k)
  }
  useEffect(()=>{
    setPetsFiltered(pets)
    if(keyword) setPetsFiltered(pets.filter(pet => {
      const petNameLower = pet.name.toLowerCase()
      const keywordLower = keyword.toLowerCase()
      return petNameLower.includes(keywordLower)
    }))
    },[categorySelected,keyword,pets])
  
    if(isLoading) return <View><Text>cargando...</Text></View>


  return (
    <ScrollView style={styles.scrollViewContainer}>
        <Search handlerKeyword={handlerKeyword}/>
        <FlatList
          data={petsFiltered}
          keyExtractor={item => item.id}
          renderItem={({item})=> <PetByCategory navigation={navigation} item={item}/>}
        />
    </ScrollView>
  )
}

export default PetsByCategory

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
})