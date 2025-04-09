import { useState } from "react";
import { View,Text,TextInput,Button,FlatList } from "react-native";

export default function App() {
 const[task, setTask] = useState('');
 const[tasks, setTasks] = useState([]);

 const addTask = () => {
  if(task){
    setTasks([...tasks, task])
    setTask('');
  }
 }

  return (
   <View style={{flex:1, padding:20}}>
    <TextInput
      value={task}
      onChangeText={setTask}
      placeholder="Add a task"
      style={{borderWidth:1, padding:5, marginBottom:10}}
    />
    <Button title="Add a task" onPress={addTask} />
    <FlatList
      data={tasks}
      renderItem={({item}) => <Text>{item}</Text>}
      keyExtractor={(item,index)=> index.toString()}
    />
   </View>
  );
}

