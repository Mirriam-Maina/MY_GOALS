import React from 'react';
import { styles } from '../assets/styles/ComponentStyles';
import { TextInput, Button, View, Modal } from 'react-native';

const GoalInput = props => {
    const { changeTextHandler, onClickHandler, visible} = props;
    console.log({visible})
    return (
        <Modal visible={visible} animationType="slide">
        <View style={styles.inputView}>
            <TextInput
                placeholder="Course Goal"
                style={styles.inputField}
                onChangeText={changeTextHandler}
            />
            <Button title="ADD" onPress={onClickHandler} />
        </View>
        </Modal>
    );
}

export default GoalInput;