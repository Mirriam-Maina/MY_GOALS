import React from 'react';
import { styles } from '../assets/styles/ComponentStyles';
import { TextInput, Button, View, Modal } from 'react-native';

const GoalInput = props => {
    const { changeTextHandler, onClickHandler, visible, onCancel} = props;
    return (
        <Modal visible={visible} animationType="slide">
        <View style={styles.inputView}>
            <TextInput
                placeholder="Course Goal"
                style={styles.inputField}
                onChangeText={changeTextHandler}
            />
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button title="ADD" onPress={onClickHandler} />
                </View>
                <View style={styles.button}>
                    <Button title="CANCEL"  color="red" onPress={onCancel}/>
                </View>
            </View>

        </View>
        </Modal>
    );
}

export default GoalInput;