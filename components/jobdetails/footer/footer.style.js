import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  // container: {
  //   position: "absolute",
  //   bottom: 0,
  //   left: 0,
  //   right: 0,
  //   padding: SIZES.small,
  //   backgroundColor: "#FFF",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   flexDirection: "row",
  // },
  // likeBtn: {
  //   width: 55,
  //   height: 55,
  //   borderWidth: 1,
  //   borderColor: "#F37453",
  //   borderRadius: SIZES.medium,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // likeBtnImage: {
  //   width: "40%",
  //   height: "40%",
  //   tintColor: "#F37453",
  // },
  // applyBtn: {
  //   flex: 1,
  //   backgroundColor: "#FE7654",
  //   height: "100%",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   marginLeft: SIZES.medium,
  //   borderRadius: SIZES.medium,
  // },
  // applyBtnText: {
  //   fontSize: SIZES.medium,
  //   color: COLORS.white,
  //   fontFamily: FONT.bold,
  // },
  container: {
    position: "absolute",
    padding: SIZES.small,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor:COLORS.lightWhite,
    flexDirection: "row",
    justifyContent:"space-between"
  },
  likeBtn: {
    width: 50,
    height: 50,
    borderColor: COLORS.tertiary,
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: "center",
    alignItems:"center"
  },
  likeBtnImage: {
    width: "60%",
    height: "60%",
    tintColor: COLORS.tertiary,
    
  },
  applyBtn: {
    flex:1,
    height: "100%",
    paddingHorizontal: SIZES.large,
    backgroundColor:COLORS.tertiary,
    paddingVertical: SIZES.small,
    justifyContent: "center",
    marginStart: SIZES.small,
    borderRadius:8,
    alignItems:"center",
  },
  applyBtnText: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: COLORS.white,

  }
});

export default styles;
