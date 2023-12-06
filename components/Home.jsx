import { View, Text,Button,StyleSheet } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:"center"}}>
      <Text style={styles.heading} >Welcome To Movie App</Text>
      <View  style={styles.moviebtn}>

      <Button color='orange' 
      onPress={()=>navigation.navigate('Movie')} title="Explore Movies" />
      </View>
    </View>
  )
}

export default Home

const styles=StyleSheet.create({
    heading:{
        fontSize:20,
        color:"",
    },
    moviebtn:{
   width:"75%",
   marginTop:15
   
    }
})