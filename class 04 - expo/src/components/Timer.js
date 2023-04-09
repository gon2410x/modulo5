import React, {useState} from 'react'
import { 
  View, 
  Text, 
  StyleSheet, 
  Vibration, 
  Platform, 
  TouchableOpacity,
  TouchableHighlight
  } from 'react-native'
import {Countdown} from './Countdown'
import { spacing, fontSizes} from '../utils/sizes'
import {colors} from '../utils/colors'

const ONE_SECOND_IN_MS = 1000;

const PATTERN_ANDROID = [
  0 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,//vibra
  0.5 * ONE_SECOND_IN_MS,
  0 * ONE_SECOND_IN_MS,
  0.5 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

const PATTERN_IO = [
  0 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,//vibra
  0.5 * ONE_SECOND_IN_MS,
  0 * ONE_SECOND_IN_MS,
  0.5 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export const Timer = ({ currentTask, clearTask}) => {

  const [ isStarted, setIsStarted] = useState(true);
  const [minutes, setMinutes] = useState(1)

  const onEnd = (reset) => {
    const pattern = Platform.OS === 'android' ? PATTERN_ANDROID : PATTERN_IO;
    Vibration.vibrate(pattern);
    setIsStarted(false);
    reset();
  };

  return (
    <View style={styles.container}>  
      <View style={styles.countdown}>
        <View style={styles.task}>
         <Text style={styles.taskText}>{currentTask}</Text>
        </View>

        <Countdown minutes={minutes} onEnd={onEnd} isPaused={!isStarted} />
      </View>

      <View style={styles.buttonWrapper2}>
        <TouchableOpacity 
          style={styles.button2} 
          onPress={() => {
            setMinutes(currentState => {
              return currentState + 1
            })
          }}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2} 
          onPress={() => {
            setMinutes(currentState => {
              return currentState - 1
            })
          }}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonWrapper}>
        {isStarted ?  (
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => setIsStarted(false)}>
            <Text style={styles.buttonText}>Pausar</Text>
          </TouchableOpacity> ) : (
          <TouchableOpacity
            style={styles.button} 
            onPress={() => setIsStarted(true)}>
            <Text style={styles.buttonText}>Reanudar</Text>
          </TouchableOpacity> )}
      </View>

      <View style={styles.clearTaskButtonWrapper}>
        <TouchableOpacity
          style={styles.button} 
          onPress={clearTask}>
          <Text style={styles.buttonText}>Salir</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  task:{
    paddingTop: spacing.xxl,
  },
  taskText:{
    fontWeight: 'bold',
    fontSize: fontSizes.xxl,
  },
  button: {
    width: 180,
    height: 70,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.primary,
    borderWidth: 2,
  },
  buttonText: {
    fontSize: fontSizes.xxl,
    fontWeight: 'bold',
    color: colors.primary,
  },
  buttonWrapper:{
    //backgroundColor: 'green'
    padding: spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  clearTaskButtonWrapper:{
    padding: spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
    buttonWrapper2:{
    gap: 5,
    flexDirection: 'row',
    padding: spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
    button2: {
    width: 70,
    height: 70,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.primary,
    borderWidth: 2,
  },
})