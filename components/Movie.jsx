import { View, Text,TextInput,Button, StyleSheet, FlatList, Image} from 'react-native'
import React, { useState } from 'react'


const Movie = () => {
    const [searchText, setsearchText] = useState("")
    const [moviesList, setMoviesList] = useState()
    // input change
    const handleInputChange=(inputText)=>{
setsearchText(inputText)
    }
    const handleSearchButton=async()=>{
        console.log(searchText)
     let res=await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=ef3e87c7&s=${searchText}`)   
     let moviesData=await res.json()
     console.log(moviesData.Search)
     setMoviesList(moviesData.Search)
    }
  return (
    <View style={styles.container}>
      <TextInput style={styles.searchInput} placeholder='find a movie here' value={searchText} onChangeText={handleInputChange} />
      <View style={styles.searchBtn}>
      <Button onPress={handleSearchButton} title="Search Movie" />

      </View>
      <View>
        {moviesList && <Text style={{marginVertical:20,textAlign:'center',color:'green'}}>{moviesList?.length} Movies Found</Text>}
        <FlatList data={moviesList} renderItem={({item})=>{
            return (
                <View style={styles.movieContainer}>
                    <Image style={{height:300,width:300}} source={{uri:item.Poster}} />
                    <Text style={styles.movieTitle}>
                        {item.Title}
                    </Text>
                    <Text>
                      Year  {item.Year}
                    </Text>
                </View>
                
            )
        }} />
      </View>
    </View>
  )
}
 const styles=StyleSheet.create({
    container:{
        // flex:1,
        marginTop:90,
        alignItems:"center",justifyContent:"center"
    },
    searchInput:{
        width:'75%',
        height:"100",
    borderColor:"#cccccc",
    borderWidth:1,
    padding:10,
    backgroundColor:"#fff"

    },
    searchBtn:{
        width:'50%',
        marginTop:20
    },
    movieTitle:{
        fontSize:30,
        fontWeight:"bold"
    },
    movieContainer:{
        marginHorizontal:5,
        marginBottom:30
    }
 })
export default Movie