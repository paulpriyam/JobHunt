import { StyleSheet, Dimensions } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

const deviceWidth = Dimensions.get("window").width - 100;

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  },
  card: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    width: deviceWidth,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding:10
  },
  companyName: {
    flex: 1,
    marginTop:10,
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
  },
  jobProfile: {
    flex: 1,
    marginTop:10,
    fontSize: SIZES.large,
    fontFamily: FONT.bold,
  },
  location: {
    flex: 1,
    marginTop:4,
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
  },
  jobImage: {
    width: 60,
    height: 60,
    borderColor: COLORS.lightPurple,
    borderRadius:10,
    borderWidth: 2,
  }
});

export default styles;
