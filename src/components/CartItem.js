import { StyleSheet, Text, View, Pressable } from 'react-native'
import {Entypo} from '@expo/vector-icons'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'
import { useDispatch } from 'react-redux'
import { deleteCartItem } from '../features/cart/cartSlice'

const CartItem = ({item}) => {
    const dispatch = useDispatch()
  return (
    <View style={styles.card}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.text2}>{item.description}</Text>
                <Text style={styles.text2}>Cantidad: {item.stock}</Text>
                <Text style={styles.text2}>Precio ${item.price}</Text>
            </View>
            <Pressable onPress={()=> dispatch(deleteCartItem(item.id))}>
                <Entypo name="trash" size={30} color="black"/>
            </Pressable>
        </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
    card:{
        backgroundColor:colors.bgcolor,
        padding:20,
        margin:10,
        borderWidth:2,
        borderRadius:10,
        flexDirection:"row",
        justifyContent:"space-between",
        height:100,
        alignItems:"center"
    },
    textContainer:{
        width:"70%"
    },
    text:{
        color:colors.text,
        fontSize:19,
        fontFamily:fonts.Amatic
    },
    text2:{
        color:colors.text,
        fontSize:14,
        fontFamily:fonts.Amatic
    }
})