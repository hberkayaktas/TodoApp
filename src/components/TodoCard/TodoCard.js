import {useState, useEffect} from 'react';
import {Image, Text, View, Switch, Button,Pressable} from 'react-native';
import styles from './TodoCard.styles';

function TodoCard(props) {
  const [isEnabled, setIsEnabled] = useState(props.todo.isComplete);
  const toggleSwitch = () => props.ChangeStatus(props.todo.id);
  const toggleDelete = () => props.DeleteTodo(props.todo.id);
  useEffect(() => {}, [isEnabled]);

  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
      <Pressable
        onPress={toggleDelete}>
        <Text style={props.todo.isComplete ? styles.Ctitle : styles.title}>
          {props.todo.content}
        </Text>
        </Pressable>
      </View>
      <View style={styles.managerButton}>
        <Button title="X" style={styles.button} onPress={toggleDelete} />
        <Switch
          trackColor={{false: '#767577', true: '#F9C49A'}}
          thumbColor={props.todo.isComplete ? '#EC823A' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={props.todo.isComplete}
        />
      </View>
    </View>
  );
}

export default TodoCard;
