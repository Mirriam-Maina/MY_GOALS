import React from 'react';
import { styles } from '../assets/styles/ComponentStyles';
import { TextInput, Button, View } from 'react-native';

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

export default GoalInput;