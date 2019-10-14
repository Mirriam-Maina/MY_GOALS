import React, { useState } from 'react';
import GoalItem from '../components/GoalItem';
import GoalInput from '../components/GoalInput';
import { StyleSheet, View, FlatList, Button} from 'react-native';

const Goals = props => {
    const [enteredGoal, setGoals] = useState('');
    const [goalsList, setGoalsList] = useState([]);
    const [modalVisibility, setModalVisibility] = useState(false);
  
    const changeTextHandler = (enteredText) => {
      setGoals(enteredText);
    }

    const deleteItem = id => {
        setGoalsList(currentGoals => currentGoals.filter((goal)=>goal.id !== id))
    }
  
    const openModal = () => {
        setModalVisibility(true);
    }

    const onClickHandler = () => {
      console.log('mirriam is here after click')
      setGoalsList(currentGoals => [...currentGoals, { id: Math.random().toString(), value: enteredGoal }]);
      setModalVisibility(currentState => false);
    }
  
    return (
      <View style={styles.screen}>
          <Button
           title="ADD GOAL"
           onPress={openModal}
          />
        <GoalInput
          onClickHandler = {onClickHandler}
          changeTextHandler = {changeTextHandler}
          visible={modalVisibility}
        />
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={goalsList}
          renderItem={itemData => <GoalItem id={itemData.item.id} title={itemData.item.value} delete={deleteItem}/>} 
        />
      </View>
    );
}

const styles = StyleSheet.create({
    screen: {
      padding: 50
    },
  })

export default Goals;