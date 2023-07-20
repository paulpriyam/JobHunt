import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: SIZES.small,
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
    gap: SIZES.small,
  },
  nearbyCard: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor:COLORS.white
  },
  logoContainer: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: COLORS.lightPurple,
    borderRadius: 8,
    borderWidth:1,
  },
  imageStyle: {
    width: "80%",
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    marginHorizontal:16,
  },
  jobName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.bold,
    color: COLORS.primary,
    
  },
  jobType: {
    fontFamily: FONT.regular,
    fontSize: SIZES.small,
    marginTop: 4,
  }
});

export default styles;
