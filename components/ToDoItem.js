import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

function ToDoItem(props) {
    return (
        <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
            <View>
                {/* Each goal displayed in a styled Text component */}
                <Text style={styles.goal}> {props.text} </Text>
            </View>
        </Pressable>
        
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
});
  