import React, {useState, useEffect } from 'react'
import {Text, StyleSheet} from 'react-native'

import {fontSizes, spacing} from '../utils/sizes'
import {colors} from '../utils/colors'

const minutesToMillis = (min) => min * 1000 * 60;
// const formatTime = (time) => (time < 10 ? `0${time}` : time);
const formatTime = (time) => time.toString().padStart(2, '0');

export const Countdown = ({minutes=1 , isPaused, onEnd}) => {

  const interval = React.useRef(null);

  const [millis, setMillis] = useState(null);

  const reset = () => {
    setMillis(minutesToMillis(minutes))
  }

  const countDown = () => {
    setMillis((time) => {
      if(time === 0){
        clearInterval(interval.current);
        onEnd(reset);
        return time;
      }
      const timeLeft = time - 1000;
      return timeLeft
    });
  };

  useEffect(() => {
    setMillis(minutesToMillis(minutes));
  }, [minutes]);

  useEffect(() => { 
    if(isPaused){
      if(interval.current) clearInterval(interval.current);
      return;
    }
    
    interval.current = setInterval(countDown, 1000);

    return () => clearInterval(interval.current);
  },[isPaused]);

  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;

  return (
    <Text style={styles.text}>
      {formatTime(minute)}:{formatTime(seconds)}
    </Text>
  );

};

const styles = StyleSheet.create({
  text:{
    fontSize: fontSizes.xxxl,
    fontWeight: 'bold',
    color: colors.primary,
    padding: spacing.lg,
  },

});

