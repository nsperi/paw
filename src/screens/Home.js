import { StyleSheet, Text, View,FlatList } from 'react-native'
import Header from '../components/Header'
import Categories from '../components/Categories'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'

const Home = ({navigation}) => {
    
  return (
    <>
        <Text style={styles.parragraph}>Bienvenido a Paw Fund Me, tu plataforma solidaria para ayudar a las mascotas necesitadas. Descubre conmovedoras historias de animales que requieren tu apoyo y únete a nuestra comunidad comprometida. Explora las adorables caras que esperan tu ayuda y elige participar donando la cantidad que desees. ¡Cada contribución nos acerca un paso más a alcanzar nuestros objetivos y brindarles una vida mejor a estos fieles compañeros! Juntos, podemos hacer la diferencia.</Text>
        <Categories navigation={navigation}/>
    </>
  )
}

export default Home

const styles = StyleSheet.create({
  parragraph:{
    color:colors.text,
    fontFamily:fonts.Amatic,
    fontSize:30,
    fontWeight:'bold',
  }
})