import React from 'react';
import { TextInput, Button, StyleSheet, View } from 'react-native';

const GoalInput = props => {
    const { changeTextHandler, onClickHandler} = props;
    return (
        <View style={styles.inputView}>
            <TextInput
            placeholder="Course Goal"
            style={styles.inputField}
            onChangeText={changeTextHandler}
            />
            <Button title="ADD" onPress={onClickHandler} />
      </View>
    );

}

const styles = StyleSheet.create({
    inputView: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      inputField: {
        borderColor: 'black',
        borderWidth: 1,
        width: '80%',
        padding: 10
      }
})

export default GoalInput;