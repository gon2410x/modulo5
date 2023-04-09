import React, {useState} from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import {Task} from './src/components/Task'
import {Timer} from './src/components/Timer'

export default function App() {

  const  [ currentTask, setCurrentTask ] = useState(null)

  return (
    <SafeAreaView style={styles.container}>
    {currentTask ?
      <Timer currentTask={currentTask}/>
      :
      <Task addTask={setCurrentTask}/> 
    }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    // padding: 8,
  },
  paragraph: {
    //margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
