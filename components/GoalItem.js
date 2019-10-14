import React from 'react';
import { styles } from '../assets/styles/ComponentStyles';
import { Text, View, TouchableOpacity} from 'react-native';

const GoalItem = props => {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={props.delete.bind(this, props.id)}>
        <View style={styles.listItem}>
          <Text>{props.title}</Text>
        </View>
      </TouchableOpacity>

    );
}

export default GoalItem;