import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

// Functional component that represents a single item in the to-do list
function ToDoItem(props) {
    return (
        <View>
             {/* Pressable makes the item interactive (like a button) */}
            <Pressable
                // Adds a ripple effect on Android when the item is pressed
                android_ripple={{ color: '#210644' }}

                // When pressed, calls the onDeleteItem function from the parent, passing the item's id
                onPress={props.onDeleteItem.bind(this, props.id)}

                // Changes style when the item is being pressed (for iOS or non-Android ripple feedback)
                style={({ pressed }) => pressed && styles.pressedItem}
            >
                {/* Each goal displayed in a styled Text component */}
                <Text style={styles.goal}> {props.text} </Text>
            </Pressable>
        </View>
    );
};

export default ToDoItem;

// Styles for the ToDoItem component
const styles = StyleSheet.create({
    goal: {
      fontSize: 20,
      backgroundColor: 'lightblue',
      borderRadius: 6,
      color: 'black',
      padding: 10,
      fontWeight: 'bold',
      margin: 5
    },

    // Style applied temporarily when the item is being pressed
    pressedItem: {
        opacity: 0.5
    },
});
  