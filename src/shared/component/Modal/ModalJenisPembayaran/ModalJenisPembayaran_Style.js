import { StyleSheet, Dimensions } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import COLORS from "../../../consts/colors.const";
import { getFontSize } from "../../../helper/helper";
const styles = StyleSheet.create({
  //? Style modal container ==================================================

  modalContainer: {
    // height: responsiveScreenHeight(95),
    flex: 1,
    width: responsiveScreenWidth(100),
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modal_style: {
    // flexDirection: 'row',
    // position: 'absolute',
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    width: responsiveScreenWidth(100),
    borderTopRightRadius: responsiveScreenWidth(5),
    borderTopLeftRadius: responsiveScreenWidth(5),
    // paddingVertical: responsiveScreenHeight(2),

    backgroundColor: "white",
    borderRadius: 10,
  },

  modal_boxContainer: {
    backgroundColor: COLORS.white,
    width: responsiveScreenWidth(90),
    // height: responsiveScreenHeight(20),
    borderRadius: 16,
    justifyContent: "space-between",
    alignItems: "center",
  },

  contentContainer: {
    // flex: 1,
    marginTop: 15,
    alignItems: "center",
    backgroundColor: "white",
    paddingBottom: getFontSize(35),
    width: responsiveScreenWidth(100),
  },

  kategoriBox: {
    width: responsiveScreenWidth(94),
    // height: responsiveScreenWidth(35),
    paddingVertical: responsiveScreenWidth(3),
    backgroundColor: "white",
    borderRadius: responsiveScreenWidth(2),
    flexDirection: "row",
    marginVertical: responsiveScreenWidth(2),
    justifyContent: "space-between",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 3,
    shadowRadius: 2,
    elevation: 5,
  },
  kategoriBox_Left: {
    width: responsiveScreenWidth(22),
    // backgroundColor: 'pink',
    justifyContent: "center",
    alignItems: "center",
  },
  ketegoriBox_Center: {
    width: responsiveScreenWidth(50),

    justifyContent: "center",
    // backgroundColor: 'yellow'
  },
  ketegoriBox_Right: {
    width: responsiveScreenWidth(13),
    // backgroundColor: 'pink',
    padding: responsiveScreenWidth(2),
    justifyContent: "center",
    alignItems: "center",
  },
  kategoriImage: {
    width: responsiveScreenWidth(15),
    // height: responsiveScreenWidth(20),
    borderTopLeftRadius: responsiveScreenWidth(2),
    borderBottomLeftRadius: responsiveScreenWidth(2),
    resizeMode: "contain",
  },
  icon_Right: {
    width: responsiveScreenWidth(6),
    height: responsiveScreenWidth(6),
    borderTopLeftRadius: responsiveScreenWidth(2),
    borderBottomLeftRadius: responsiveScreenWidth(2),
    resizeMode: "contain",
  },
});

export default styles;
