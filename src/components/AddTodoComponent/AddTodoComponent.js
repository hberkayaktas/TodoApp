import {useState} from 'react';
import {View, TextInput, StyleSheet, Button, Alert} from 'react-native';

function AddTodoComponent(props) {
  const [degisken_value, setDegisken_value] = useState('');
  const onType = text => {
    setDegisken_value(text);
  };
  const handlesubmit = text => {
    if (degisken_value != '') {
      props.Addtodo(degisken_value);
    }
    setDegisken_value('');
  };
  return (
    <View style={styles.Addtodo_container}>
      <View style={styles.Input_container}>
        <TextInput
          placeholder="Yapılacak görev giriniz..."
          value={degisken_value}
          onChangeText={onType}
        />
      </View>
      <View style={styles.Button_container}>
        <Button title="Add" style={styles.button} onPress={handlesubmit} />
      </View>
    </View>
  );
}

export default AddTodoComponent;

const styles = StyleSheet.create({
  Addtodo_container: {
    padding: 5,
    flexDirection: 'row',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'orange',
    backgroundColor: '#eceff1',
    marginHorizontal: 4,
    marginBottom: 3,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Input_container: {
    flex: 3,
  },
  Button_container: {
    flex: 1,
    //backgroundColor:'red',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 6,
  },
});
