import { React, useState } from "react";
import { TextInput, View, Button, StyleSheet } from "react-native";

function UserInput(props) { 
    const [userEnteredGoal, setEnteredGoal] = useState(''); //Get and Store: State to store the text entered by the user

    //Handle Events
    // Called when the user types into the TextInput
    function GetUserInput(userEntered) {
        setEnteredGoal(userEntered); // Updates userEnteredGoal with the current input
    };

    function AddGoalButton() {
        props.addGoalButton(userEnteredGoal);
        setEnteredGoal(''); // Clear the TextInput after adding
    };

    return (
        <View style={styles.addBar}> {/* Input section for typing and adding a goal */}
            <TextInput
                style={styles.textInput}
                placeholder="Your course goal!" // Placeholder text in input field
                onChangeText={GetUserInput} // Triggered on text change
                value={userEnteredGoal} // Binds input to userEnteredGoal state
            />
            <Button
                title="Add Goal" // Button label
                onPress={AddGoalButton} // Calls AddGoalButton on press 
            />
        </View>
    );
};

export default UserInput;

const styles = StyleSheet.create({
    addBar: {
      flex: 0.5,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#cccccc',
    },
  
    textInput: {
      borderWidth: 1,
      borderColor: 'gray',
      width: '80%',
      padding: 10,
    },
  
    goalList: {
      flex: 5,
    },
  
    todotitle: {
      fontSize: 25,
      padding: 8,
      fontWeight: 'bold'
    },
  });
  