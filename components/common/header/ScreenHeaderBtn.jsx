import React from 'react'
import { View, Text ,Image,TouchableOpacity} from 'react-native'

import styles from './screenheader.style'
import { COLORS } from '../../../constants'

const ScreenHeaderBtn = ({iconUrl,dimension,handlePress}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress} >
      <Image
        source={iconUrl}
        resizeMode="contain"
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
}

export default ScreenHeaderBtn