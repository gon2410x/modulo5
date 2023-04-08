import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { colors} from '../utils/colors'
import { TextInput } from 'react-native-paper'

export const Task = () => {

return(
  <View style={styles.container}>
    <View style={styles.inputContainer}>
      <TextInput style={styles.textInput} label='Nueva Tarea'/>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Agregar Tarea</Text>
      </TouchableOpacity>
    </View>
  </View>

);};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'green'
  },
  // text: {
  //     color: colors.primary
  // },
  inputContainer: {
    flex: 0.5,
    padding: 24,
    justifyContent: 'center'
  },
  button: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.primary,
    borderWidth: 2,
    height: 40,
    marginTop: 20
  },
  buttonText: {
    color: colors.primary
  }
})