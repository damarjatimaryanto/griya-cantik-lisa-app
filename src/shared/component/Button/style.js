import { StyleSheet } from "react-native";
import COLORS from "../../consts/colors.const";
import { getFontSize } from "../../helper/helper";
import { responsiveScreenWidth } from "react-native-responsive-dimensions";
export const styles = StyleSheet.create({
  btn: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: responsiveScreenWidth(100),
    flexDirection: "row",
    backgroundColor: COLORS.purple,
    minHeight: 48,
  },
  btnTitle: {
    fontFamily: "Manrope-Medium",
    fontSize: getFontSize(16),
    color: COLORS.white,
  },
});
