import React from 'react'
import { View, Text , TouchableOpacity, Image} from 'react-native'

import styles from './footer.style'
import { icons } from '../../../constants'

const Footer = ({ redirectionUrl}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.likeBtn}
        onPress={() => {
          
        }}
      >
        <Image
          source={icons.heart}
          style={styles.likeBtnImage}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => {
        
      }}
      >
        <Text style={ styles.applyBtnText}>Apply for Job</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer;