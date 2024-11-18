import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import COLORS from "../../consts/colors.const";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "white",
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(8),
    flexDirection: "row",
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  headerButtonLeft: {
    width: responsiveScreenWidth(15),
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitleContainer: {
    width: responsiveScreenWidth(70),
    alignItems: "center",
    justifyContent: "center",
  },
  btnImage: {
    width: responsiveScreenWidth(7),
    height: responsiveScreenWidth(7),
    tintColor: COLORS.cyan,
  },
});
