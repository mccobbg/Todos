import { useState, useRef } from "react";
import { Text, StyleSheet, FlatList, TextInput, Pressable, View } from "react-native";

const Todos = () => {
  const itemIndex = useRef(0);
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [editText, setEditText] = useState('');
  const [editIndex, setEditIndex] = useState(0);

  const renderTodo = ({item}) => {

    return (
      <View style={styles.renderView}>
        {item.id !== editIndex ? (
        <>
          <Text editable={false} style={[styles.renderText, {fontWeight: 'bold', width: '5%'}]}>
            {`${item.id}.`}
          </Text>

          <Text editable={false} style={[styles.renderText, {width: '45%'}]}>
            {`${item.text}`}
          </Text>
          <Pressable style={styles.editPressable} onPress={() => editTodo(item)}>
            <Text style={styles.buttonText}>Edit</Text>
          </Pressable>
          <Pressable style={styles.removePressable} onPress={() => removeTodo(item)}>
            <Text style={styles.buttonText}>Remove</Text>
          </Pressable>
        </>
        ) : (
        <>
          <Text editable={false} style={[styles.renderText, {fontWeight: 'bold', width: '5%'}]}>
            {`${item.id}.`}
          </Text>
          <Pressable style={styles.savePressable} onPress={() => saveEditedTodo(item)}>
            <Text style={styles.buttonText}>Save</Text>
          </Pressable>
          <TextInput style={styles.textInput}
            defaultValue={`${item.text}`}
            onChangeText={text => setEditText(text)}
            maxLength={200}
          />
        </>
        )}
      </View>
    );
  }
 
  const addTodo = () => {
    if (text.length > 0) {
      const todo = {
        id: ++itemIndex.current,
        text
      }
      setTodos([...todos, todo]);
      setText('');
    }
  }

  const editTodo = (item) => {

    console.log('Edit todo', item);
    setEditIndex(item.id);
  }

  const removeTodo = (item) => {

    itemIndex.current = 0;
    // filter
    const arr = todos.filter(todo => {
      if (todo.id !== item.id) {

        todo.id = ++itemIndex.current;
        return true;
      }
      return false;
    });

    setTodos(arr);
  }

  const saveEditedTodo = (item) => {

    // filter
    const index = todos.findIndex(todo => {
      return todo.id === item.id});

    const todo = {
      id: item.id,
      text: editText
    }
    todos[index] = todo;
    setEditIndex(-1);
  }

  return (
    <View style={styles.todos}>
      <TextInput
        style={styles.textInput}
        placeholder="Todo"
        onChangeText={text => setText(text)}
        maxLength={200}
        value={text}
      />
      <Pressable style={styles.pressable} onPress={addTodo}>
        <Text style={styles.submitText}>Add a Todo</Text>
      </Pressable>
      <View style={styles.flatView}>
        <FlatList
          style={styles.listView}
          data={todos}
          renderItem={renderTodo}
          keyExtractor={item => item.id}
          extraData={editIndex}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todos: {
      flex: 1,
      width: '100%',
      justifyContent: "flex-start",
      alignContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      padding: 8
  },
  submitText: {
    fontSize: 16,
    color: "white"
  },
  pressable: {
    width: '40%', 
    marginTop: 14,
    backgroundColor: "blue",
    padding: 12,
    borderWidth: 1,
    borderRadius: 6,
    alignItems: "center"
  },
  flatView: {
    flex: 1,
    marginTop: 14,
    justifyContent: "flex-start",
    alignContent: "flex-start",
    alignItems: "center"
  },
  renderText: {
    fontSize: 18,
    color: "black",
    marginLeft: 2,
    margin: 4,
  },
  renderEditText: {
    fontSize: 18,
    color: "black",
    marginLeft: 10,
    margin: 4,
  },
  listView: {
    margin: 6,
    backgroundColor: "white",
  },
  textInput: {
    width: '70%',
    color: "darkBlue",
    fontSize: 16,
    height: 'auto',
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 5,
    padding: 8,
    paddingTop: 12,
    paddingBottom: 12,
  },
  editPressable: {
    width: '15%', 
    height: 30,
    backgroundColor: "blue",
    borderWidth: 1,
    borderRadius: 6,
    marginRight: 4,
    marginLeft: 2,
    alignItems: "center",
    justifyContent: "center"

  },
  removePressable: {
    width: '25%', 
    height: 30,
    backgroundColor: "red",
    marginRight: 4,
    borderWidth: 1,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    fontSize: 18,
    color: "white",
  },
  renderView: {
    flex: 1,
    width: '100%',
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 3,
    marginBottom: 3,
  },
  savePressable: {
    width: '60', 
    height: 30,
    backgroundColor: "green",
    marginRight: 4,
    marginLeft: 2,
    borderWidth: 1,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center"
  },
});

export default Todos;
