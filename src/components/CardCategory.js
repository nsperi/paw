import { Pressable, StyleSheet, Text, View } from 'react-native'
import ShadowPrimary from './wrappers/ShadowPrimary'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'

const CardCategory = ({item,navigation}) => {
  return (
    <Pressable onPress={()=>navigation.navigate("PetsByCategory",{categorySelected:item})}>
      <ShadowPrimary style={styles.container}>
          <Text style={styles.text}>{item}</Text>
      </ShadowPrimary>
    </Pressable>
  )
}

export default CardCategory

const styles = StyleSheet.create({
    container:{
        width:"80%",
        height:60,
        backgroundColor:colors.secondary,
        marginHorizontal:"10%",
        marginVertical:10,
        padding:20,
        alignItems:"center",
        borderRadius:50,
        alignContent:'center'
    },
    text:{
        fontSize:30,
        fontFamily:fonts.Amatic,
        color:colors.text,
        fontWeight:'bold',
        textAlign:'center'
    }
})