import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, ScrollView } from "react-native";

import styles from './nearbyjobs.style'
import { useRouter } from 'expo-router';
import { icons, SIZES } from '../../../constants'

const nearByJobs = [
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

const Nearbyjobs = () => {

  let router = useRouter();

  return (
  
      
        <FlatList
      ListHeaderComponent=
      {
        <View style={ styles.container}>
              <View style={styles.header}>
                <Text style={styles.headerTitle}>Nearby Jobs</Text>
                <TouchableOpacity onPress={() => {}}>
                  <Text style={styles.headerBtn}>Show All</Text>
                </TouchableOpacity>
              </View>
            </View>
          }
      contentContainerStyle={{ rowGap: SIZES.small }}
      ListFooterComponent={<></>}
          data={nearByJobs}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => {}}>
              <View style={styles.nearbyCard}>
                <View style={styles.logoContainer}>
                  <Image source={item.imageUrl} style={styles.imageStyle} />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.jobName}>{item.jobTitle}</Text>
                  <Text style={styles.jobType}>{item.location}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        ></FlatList>
     
  );
}

export default Nearbyjobs;