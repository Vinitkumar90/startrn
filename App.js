import { useState } from "react";
import { SafeAreaView,View,Text,TextInput,Button,FlatList, TouchableOpacity } from "react-native";

export default function App() {
 const[task, setTask] = useState('');
 const[tasks, setTasks] = useState([]);

 const addTask = () => {
  if(task){
    setTasks([...tasks, task])
    setTask('');
  }
 }

 const deleteTask = (indexTodelete) =>{
  setTasks(tasks.filter((_,idx) => idx != indexTodelete));
 }

  return (
   <SafeAreaView style={{flex:1,padding:20,marginTop:20}}>
    <TextInput
      value={task}
      onChangeText={setTask}
      placeholder="Add a task"
      style={{borderWidth:1, padding:5, marginBottom:10}}
    />
    <Button title="Add a task" onPress={addTask} />
    <FlatList
      data={tasks}
      renderItem={({item,index}) => (
        <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
          <Text>{item}</Text>  
          <TouchableOpacity onPress={()=> deleteTask(index)}>
            <Text style={{color:'red'}}>Delete</Text>
          </TouchableOpacity>
        </View>
      )}
      keyExtractor={(item,index)=> index.toString()}
    />
    <TouchableOpacity onPress={()=>setTasks([])}>
      <Text> Delete all 😈👿</Text>
    </TouchableOpacity>
   </SafeAreaView>
  );
}

