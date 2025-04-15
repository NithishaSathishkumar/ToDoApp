import { React, useState } from "react";
import { TextInput, View, Button, StyleSheet, Modal, Image } from "react-native";

// Functional component that collects user input
function UserInput(props) { 
    const [userEnteredGoal, setEnteredGoal] = useState(''); //Get and Store: State to store the text entered by the user

    //Handle Events
    // Called when the user types into the TextInput
    function GetUserInput(userEntered) {
        setEnteredGoal(userEntered); // Updates userEnteredGoal with the current input
    };

    // Event handler triggered when "Add Task" button is pressed
    function AddGoalButton() {
        props.addGoalButton(userEnteredGoal);
        setEnteredGoal(''); // Clear the TextInput after adding
    };

    return (
        // Modal component to pop up the input screen (shown based on `props.visible`)
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.addBar}> {/* Input section for typing and adding a goal */}
                {/* Image above the input field */}
                <Image
                    style={styles.image}
                    source={require('../assets/images/todo.jpg')}
                />

                {/* Input field for typing a task */}
                <TextInput
                    style={styles.textInput}
                    placeholder="Type your Task!" // Placeholder text in input field
                    onChangeText={GetUserInput} // Triggered on text change
                    value={userEnteredGoal} // Binds input to userEnteredGoal state
                />

                {/* Container for the buttons */}
                <View style={styles.buttonContainer}>

                    {/* Button to add the task */}
                    <View style={styles.button}>
                        <Button
                            title="Add Task" // Button label
                            onPress={AddGoalButton} // Calls AddGoalButton on press
                            color='black'
                        />
                    </View>

                    {/* Button to cancel the input modal */}
                    <View style={styles.button}>
                        <Button
                            title="Cancel"
                            onPress={props.onCancel} // Calls onCancel passed from parent
                            color='black'
                        />
                    </View>    
                </View>
            </View>
        </Modal>
    );
};

export default UserInput;

// Styles for the components
const styles = StyleSheet.create({
    addBar: {
        flex: 1,
        paddingBottom: 10,
        flexDirection: 'column',
        justifyContent: 'center',
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

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10
    },

    button: {
        borderColor: '#ADD8E6',
        backgroundColor: '#ADD8E6',
        borderRadius: 8,
        margin: 10,
        width:'40%'
    },

    image: {
        width: 200,
        height: 100,
        margin:20
    }
  });
  