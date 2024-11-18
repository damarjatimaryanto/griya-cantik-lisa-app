import { StyleSheet } from "react-native";
import { responsiveScreenWidth } from "react-native-responsive-dimensions";
import COLORS from "../../consts/colors.const";

export const styles = StyleSheet.create({
  paddingContainer: {
    backgroundColor: COLORS.blue_bg,
    width: responsiveScreenWidth(94),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  paddingLeft: {
    backgroundColor: "white",
    width: responsiveScreenWidth(5),
    height: "100%",
    borderTopRightRadius: responsiveScreenWidth(50),
    borderBottomRightRadius: responsiveScreenWidth(50),
  },
  paddingCenter: {
    width: responsiveScreenWidth(80),
    height: 1,
    borderWidth: 1,
    borderColor: COLORS.grey2, // warna garis
  },
  paddingRight: {
    backgroundColor: "white",
    width: responsiveScreenWidth(5),
    height: "100%",
    borderTopLeftRadius: responsiveScreenWidth(50),
    borderBottomLeftRadius: responsiveScreenWidth(50),
  },
});
