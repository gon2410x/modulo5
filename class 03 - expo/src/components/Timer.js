import React from 'react'
import { View, Text, StyleSheet, Vibration, Platform} from 'react-native'
import {Countdown} from './Countdown'
import { spacing } from '../utils/sizes'

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

export const Timer = ({ currentTask }) => {

  const onEnd = () => {
    const pattern = Platform.OS === 'android' ? PATTERN_ANDROID : PATTERN_IO
    Vibration.vibrate(pattern)
  }

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <View style={styles.task}>
         <Text>Esta es la tarea {currentTask}</Text>
        </View>
          <Countdown minutes={1} onEnd={onEnd} isPaused />
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
})