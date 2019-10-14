import React, { useState } from 'react';
import GoalItem from '../components/GoalItem';
import GoalInput from '../components/GoalInput';
import { StyleSheet, View, FlatList } from 'react-native';

const Goals = props => {
    const [enteredGoal, setGoals] = useState('');
    const [goalsList, setGoalsList] = useState([]);
  
    const changeTextHandler = (enteredText) => {
      setGoals(enteredText);
    }

    const deleteItem = id => {
        setGoalsList(currentGoals => currentGoals.filter((goal)=>goal.id !== id))
    }
  
    const onClickHandler = () => {
      setGoalsList(currentGoals => [...currentGoals, { id: Math.random().toString(), value: enteredGoal }]);
    }
  
    return (
      <View style={styles.screen}>
        <GoalInput
          onClickHandler = {onClickHandler}
          changeTextHandler = {changeTextHandler}
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