import { React, useState } from "react";
import { TextInput, View, Button, StyleSheet, Modal, Image } from "react-native";

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
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.addBar}> {/* Input section for typing and adding a goal */}
                <Image style={styles.image} source={require('../assets/images/todo.jpg')} />
                <TextInput
                    style={styles.textInput}
                    placeholder="Type your Task!" // Placeholder text in input field
                    onChangeText={GetUserInput} // Triggered on text change
                    value={userEnteredGoal} // Binds input to userEnteredGoal state
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title="Add Task" // Button label
                            onPress={AddGoalButton} // Calls AddGoalButton on press
                            color='black'
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Cancel"
                            onPress={props.onCancel}
                            color='black'
                        />
                    </View>    
                </View>
            </View>
        </Modal>
    );
};

export default UserInput;

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
  