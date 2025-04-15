// Article-style content can use ScrollView, 
// but for lists of unknown or changing length, FlatList is better for performance.

import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import ToDoItem from './components/ToDoItem';
import UserInput from './components/UserInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [listOfToDo, setListOfToDo] = useState([]); // State to store the list of goals (array of strings)

  //Handle Events
  // Called when the "Add Goal" button is pressed
  function AddGoalButton(userEnteredGoal) {
    // console.log(userEnteredGoal);
    
    // Add new goal to the existing list, giving each goal a unique ID and reset the input field
    setListOfToDo( //Save it in the setListOfToDo
      (currentToDo) => [
        ...currentToDo, //Prev To Do list
        {text: userEnteredGoal, id: Math.random().toString() } //newly add To Do items and id 
      ]
    );

    endAddGoal();
  };

  function startAddGoalModal() {
    setModalIsVisible(true);
  };

  function endAddGoal() {
    setModalIsVisible(false);
  }

  function deleteToDoItem(id) {
    setListOfToDo(currentToDo => {
      return currentToDo.filter((goal) => goal.id !== id);
    });
    endAddGoal();
  };

  return (
    // Main container view
    <View style={styles.appcontainer}>
      <View style={styles.button}>
        <Button
          title='Add Task'
          color='black'
          onPress={startAddGoalModal}
        />
      </View> 
      {/* Input section for typing and adding a goal */}
      <UserInput visible={modalIsVisible} addGoalButton={AddGoalButton} onCancel={endAddGoal}/>

      {/* Display the list of added goals */}
      <View style={styles.goalList}>
        <Text style={styles.todotitle}>To Do List:</Text> 

        {/* FlatList for efficiently rendering large/scrollable lists */}
        <FlatList
          data={listOfToDo} // Array of goals to render
          renderItem={(task) => {
            return (
              <ToDoItem
                text={task.item.text}
                id={task.item.id}
                onDeleteItem={deleteToDoItem} />
            );
          }}
        
          keyExtractor={(item, index) => { // Unique key for each item
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

// Styles for the components
const styles = StyleSheet.create({
  appcontainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    flexDirection: "column-reverse",
    paddingBottom: 20
  }, 

  goalList: {
    flex: 5,
  },

  todotitle: {
    fontSize: 25,
    padding: 8,
    fontWeight: 'bold'
  },

  button: {
    borderColor: '#ADD8E6',
    backgroundColor: '#ADD8E6',
    borderRadius: 8,
    margin: 10,
    width: '95%',
    justifyContent:'center'
  },
});
