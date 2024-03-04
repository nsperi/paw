import { StyleSheet, Text, View,Image,Pressable,ScrollView } from 'react-native'
import { useEffect, useState } from 'react'
import colors from '../utils/globals/colors'
import { useDispatch } from 'react-redux'
import { addCartItem } from '../features/cart/cartSlice'
import { useGetPetQuery } from '../app/services/shop'


const PetDetail = ({route}) => {
  const dispatch = useDispatch()
  const {petId} = route.params
  const {data:pets,isLoading} = useGetPetQuery()
  if(isLoading) return <View><Text>cargando...</Text></View>
  const pet = pets.find(pet => pet.id === petId);
  return (
    <View style={styles.container}>
    <View style={styles.content} >
        <Image
          style={styles.image}
          source={{uri:pet?.image ? pet.image : null}}
          resizeMode='cover'
        />
        <View style={styles.containerText}>
          <Text style={styles.title}>{pet.name}</Text>
          <Text>{pet.description}</Text>
        </View>
        <View style={styles.containerPrice }>
          <Text style={styles.price}>$ {pet.price}</Text>
          <Pressable style={styles.donateNow} onPress={()=>dispatch(addCartItem(pet))}>
            <Text style={styles.donateNowText}>Carrito</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}



export default PetDetail

const styles = StyleSheet.create({
  container:{
    width:"100%",
    flex:1,
    justifyContent:"start",
    alignItems:"center",
    backgroundColor:colors.bgcolor
  },
  content:{
    width:"100%"
  },

  image:{
    width:"100%",
    height:300
  },
  containerText:{
    gap:25,
    paddingHorizontal:5,
    paddingVertical:25
  },

  containerPrice:{
      width:"100%",
      flexDirection:"row",
      justifyContent:"space-around",
      alignItems:"center",
      marginVertical:10
  },
  title:{
    fontSize:20,
    fontWeight:"bold"
  },
  price:{
    fontSize:30
  },
  donateNow:{
    backgroundColor:colors.bgcolor,
    paddingVertical:5,
    paddingHorizontal:10,
    borderRadius:5
  },
  donateNowText:{
    color:colors.text,
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
})