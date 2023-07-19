import { React, useState } from 'react'
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native'

import styles from './popularjobs.style'
import { COLORS, SIZES, icons } from '../../../constants'
import { useRouter } from 'expo-router'


const jobs = [
  {
    imageUrl: icons.amazon,
    companyName: "Amazon Inc",
    jobTitle: "SDE-1",
    location: "Bangalore",
  },
  {
    imageUrl: icons.apple,
    companyName: "Apple",
    jobTitle: "Project Manager",
    location: "Hyderabd",
  },
  {
    imageUrl: icons.google,
    companyName: "Google",
    jobTitle: "SDET-1",
    location: "US",
  },
  {
    imageUrl: icons.microsoft,
    companyName: "Microsoft Corporation",
    jobTitle: "Software Engineer",
    location: "Bangalore",
  },
  {
    imageUrl: icons.slack,
    companyName: "Slack Inc",
    jobTitle: "Backend Engineer",
    location: "Berlin",
  },
];

const Popularjobs = () => {

  let router = useRouter();
  let isLoading = false
  let isError = false


  return (
    <View>
      <View
      style={styles.container}>
        <View
          style={styles.header}
        >
          <Text
            style={styles.headerTitle}>Popular Jobs
          </Text>
          <TouchableOpacity
            onPress={() => { }
            }>
            <Text
              style={styles.headerBtn}
            >show All </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardsContainer}>
          {isLoading ? (
            <ActivityIndicator size={'large'} color={COLORS.secondary}/>
          ) : isError ? (
              <Text>Something went wrong</Text>
            ) : (      
          <FlatList
            data={jobs}
            horizontal
            contentContainerStyle={{columnGap:SIZES.small}}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  
                }}>
                <View
                  style={styles.card}
                >
                  <Image
                    style={styles.jobImage}
                  source={item.imageUrl} />
                  <Text
                    style={styles.companyName}
                  >{item.companyName}</Text>
                  <Text
                    style={styles.jobProfile}
                  >{item.jobTitle}</Text>
                <Text style={styles.location}>{ item.location}</Text>
                </View>
              </TouchableOpacity>
            )}
          >

          </FlatList>
          )}
        </View>
     </View>
    </View>
  )
}

export default Popularjobs