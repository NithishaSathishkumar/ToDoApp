import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

function ToDoItem(props) {
    return (
        <View>
            <Pressable
                android_ripple={{ color: '#210644' }}
                onPress={props.onDeleteItem.bind(this, props.id)}
                style={({ pressed }) => pressed && styles.pressedItem}
            >
                {/* Each goal displayed in a styled Text component */}
                <Text style={styles.goal}> {props.text} </Text>
            </Pressable>
        </View>
    );
};

export default ToDoItem;

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

    pressedItem: {
        opacity: 0.5
    },
});
  