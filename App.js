import React, {useState,useEffect} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';

import TodoCard from './src/components/TodoCard';
import SearcBar from './src/components/SearcBar';
import Header from './src/components/Header';
import CounterComponent from './src/components/CounterComponent';
import AddTodoComponent from './src/components/AddTodoComponent';

function App () {
  const dummy_todo = [
    { id:1, content:"çay demlenecek",isComplete:false},
    { id:2, content:"kitap okunacak",isComplete:false},
    { id:3, content:"çöp atılacak",isComplete:true}]
  const [todolist, setTodolist] = useState(dummy_todo);
  const [currenttodolist, setCurrenttodolist] = useState(dummy_todo);
  const renderTodo = ({item}) => <TodoCard todo={item} ChangeStatus={ChangeStatus} DeleteTodo={DeleteTodo}/>;
  const renderSeperator = () => <View style={styles.seperator} />;
  const handleSearch = text => {
    if(text == "" | null){
      setCurrenttodolist(todolist)
    }else{
      const filteredList = todolist.filter(todoItem => {
        const searchedText = text.toLowerCase();
        const currentTitle = todoItem.content.toLowerCase();
  
        return currentTitle.indexOf(searchedText) > -1;
  
      });
      setCurrenttodolist(filteredList);
    }
   
  }
  const findID = () => {
    var hold_last_m = 0;
    for(var i =0; i<todolist.length; i++){
      if(hold_last_m < todolist[i].id){
        hold_last_m =  todolist[i].id
      }
    }
    return hold_last_m +1 ;
  }
  const Addtodo = (text) => {
    if(text != null | ""){
      setTodolist([...todolist,{id:findID(),content:text,isComplete:false}])
      setCurrenttodolist(todolist);
      console.log(todolist)
    }
  }
  const ChangeStatus = (id) => {
      const catchTodo = todolist.filter(item => item.id == id);
      const othertodo = todolist.filter(item => item.id != id);
      setTodolist([...othertodo,{id:catchTodo[0].id,content:catchTodo[0].content,isComplete:!catchTodo[0].isComplete}])
      console.log(catchTodo);
  }
  const DeleteTodo = (id) => {
    const othertodo = todolist.filter(item => item.id != id);
    setTodolist([...othertodo]);
  }
  useEffect(() => {
    const sirala = () =>{
      var orderedList = [];
      var notComplete = [];
      var complete = [];
      for(var x =0 ; x <todolist.length ; x++){
        if(todolist[x].isComplete == false){
            notComplete.unshift(todolist[x])
        
        }else{
            complete.unshift(todolist[x])
        }
      }
      orderedList = [...notComplete,...complete];
      return orderedList;
    }
    setCurrenttodolist(sirala());
  }, [todolist])
  

  return ( 
    <SafeAreaView style={styles.container}>
      <Header/>
      <SearcBar onSearch={handleSearch} />
      <View style={styles.container}>
        <CounterComponent total={currenttodolist.length} />
        
        <FlatList
        data={currenttodolist}
        keyExtractor={item => item.id}
        renderItem={renderTodo}
        ItemSeparatorComponent={renderSeperator}
        />
      </View>
      <AddTodoComponent Addtodo={Addtodo}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  seperator:{
    borderWidth:1,
    borderColor:'#e0e0e0'
  }
});

export default App;
