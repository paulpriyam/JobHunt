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

import useFetch from '../../../hook/useFetch';


const jobs = [
  {
    id: 1,
    imageUrl: icons.amazon,
    companyName: "Amazon Inc",
    jobTitle: "SDE-1",
    location: "Bangalore",
  },
  {
    id: 2,
    imageUrl: icons.apple,
    companyName: "Apple",
    jobTitle: "Project Manager",
    location: "Hyderabd",
  },
  {
    id: 3,
    imageUrl: icons.google,
    companyName: "Google",
    jobTitle: "SDET-1",
    location: "US",
  },
  {
    id: 4,
    imageUrl: icons.microsoft,
    companyName: "Microsoft Corporation",
    jobTitle: "Software Engineer",
    location: "Bangalore",
  },
  {
    id: 5,
    imageUrl: icons.slack,
    companyName: "Slack Inc",
    jobTitle: "Backend Engineer",
    location: "Berlin",
  },
];

const Popularjobs = () => {

  let router = useRouter();
  let isLoading = false;
  let error = false;

  // const { data, isLoading, error } = useFetch (
  //   'search',
  //   {
  //     query: 'React Developer',
  //     num_pages:1,
  //   }
  // )


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
          ) : error ? (
              <Text>Something went wrong</Text>
            ) : (      
          <FlatList
            data={jobs}
            horizontal
                  contentContainerStyle={{ columnGap: SIZES.small }}
                  keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  router.push(`/job_details/${item.id}`)
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

export default Popularjobs;