import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity, TouchableHighlight } from 'react-native';
import { useState } from 'react';

export default function App() {
  const[count,setCount] = useState(0);


  return (
    <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
      {count === 5 && <Text style={{color:"red",marginBottom:10}}>upper limit hit!</Text>}
      {count === -5 && <Text style={{color:"green",marginBottom:10}}>Lower limit hit!</Text>}


      <Text>{count}</Text>
      
      <TouchableOpacity
       onPress={() => {
        if(count < 5)
          setCount(count +1);
       }}
      style={{borderWidth:5,borderColor:'green',padding:10,margin:10}}>
          <Text>Increase the count +</Text>
      </TouchableOpacity>
      <TouchableOpacity 
         onPress={() =>{
          if(count > -5){
            setCount(count - 1)
          }
         }}
      style={{borderWidth:5,borderColor:'red',padding:10,margin:10}} 
     >
          <Text>Decrease the count -</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> setCount(0)}>
        <Text>
          Reset the counter
        </Text>
      </TouchableOpacity>
    </View>
  );
}

