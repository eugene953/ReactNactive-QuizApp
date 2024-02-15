import { StyleSheet, Text, View, Image ,  Pressable} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const navigation = useNavigation();
    
  return (
    <View  style={{marginTop:25}}>
      <Image 
      style= {{height: 360, width: "100v", resizeMode:"contain" }}
    source={require ("../assets/quizicon.jpg")} 
    
    />
    <View style={{padding:10}}>
        <Text style={{textAlign:"center" , color:"magenta", fontSize: 20, fontWeight: "600"}}>
            QUIZ RULES
        </Text>

        <View style={{padding:10, backgroundColor:"#f88379", borderRadius:16, marginTop:15}}>
            <View style={{flexDirection:"row", alignItems:"center" , marginVertical:4}}>
                <Text style={{ color:"white", paddingBottom:8}}>.</Text>
                <Text style={{marginLeft:4, color:"#722f37", fontSize:15, fontWeight:"500"}}>
                    For each correct answer you get 5 points. </Text>
            </View>
            
            <View style={{flexDirection:"row", alignItems:"center", marginVertical:4}}>
                <Text style={{ color:"white",paddingBottom:25}}>.</Text>
                <Text style={{marginLeft:4, color:"#722f37", fontSize:15, fontWeight:"500"}}>
                    There is no negative marking for wrong answer. </Text>
                    </View>

            <View style={{flexDirection:"row", alignItems:"center" , marginVertical:4}}>
                <Text style={{ color:"white",paddingBottom:8 }}>.</Text>
                <Text style={{marginLeft:4, color:"#722f37", fontSize:15, fontWeight:"500"}}>
                    Each question has a time limit of 15 second. </Text>
                    </View>

            <View style={{flexDirection:"row", alignItems:"center" , marginVertical:4}}>
                <Text style={{ color:"white", paddingBottom:25}}>.</Text>
                <Text style={{marginLeft:4, color:"#722f37", fontSize:15, fontWeight:"500"}}>
                    You should answer all the questions compusoliry. </Text>
          

          </View>
        </View>
    </View>
      
         <Pressable 
         onPress = { () => navigation.navigate("Quiz")}
         style={{backgroundColor:"magenta",padding: 14, width:"120",borderRadius:25, marginLeft:"auto",marginRight:"auto",marginTop:30,  }}>
            <Text style={{color:"white", fontWeight:"600", textAlign:"center",}}>Start Quiz</Text>

         </Pressable>



      
      
      </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})