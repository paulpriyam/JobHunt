import React, { useState } from 'react'
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native'

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants'

import { useRouter } from 'expo-router'

const jobTypes = ["Full-Time", "Part-Time", "Contractual"]

const Welcome = () => {
  let router = useRouter()

  const [activeJobType, setActiveJobType] = useState("Full-Time")
  
  
  
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Welcome Priyam</Text>
        <Text style={styles.welcomeMessage}>Find Your Perfect Job</Text>
      </View>

      <View
        style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="What are you looking for"
          value=""
          onChange={() => {}}
        />
        <TouchableOpacity
          style={styles.searchBtn}
          onPress={() => { }}
        >
          <Image
            source={icons.search}
            resizeMode="contain"
            style={ styles.searchBtnImage} />
        </TouchableOpacity>
      </View>
      
      <View
        style={styles.tabsContainer}
      >
        <FlatList
          horizontal
          keyExtractor={item => item}
          contentContainerStyle={{columnGap:SIZES.small}}
          data={jobTypes}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => { 
                setActiveJobType(item)
                router.push(`/search/${item}`)
              }
              }
              style={styles.tab(activeJobType,item)}
            >
              <Text
                style={styles.tabText(activeJobType, item)
                }
              >{item}</Text>
          </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

export default Welcome