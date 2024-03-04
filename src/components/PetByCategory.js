import { StyleSheet, Text, Image, Pressable, ScrollView } from 'react-native'
import React from 'react'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'

const PetByCategory = ({item ,navigation}) => {
  return (
    <ScrollView style={styles.scrollViewContainer}>
      <Pressable onPress={()=>navigation.navigate("PetDetail",{petId:item.      id})} style={styles.container}>
        <Text style={styles.text}>{item.name}</Text>
        <Image
            style={styles.image}
            source={{ uri: item.image }}
            resizeMode='cover'
          />
      </Pressable>
    </ScrollView>
  )
}

export default PetByCategory

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.bgcolor,
        width:"80%",
        marginHorizontal:"10%",
        padding:10,
        marginVertical:10,
        borderRadius:5,
        flexDirection:"row",
        alignItems:"center",
        gap:20
    },
    text:{
        width:"60%",
        fontSize:30,
        fontFamily:fonts.Amatic,
        color:colors.text,
        fontWeight:'bold'
    },
    image:{
        minWidth:90,
        minHeight:90,
        borderRadius:50
    },
    scrollViewContainer: {
      flexGrow: 1,
    },
})