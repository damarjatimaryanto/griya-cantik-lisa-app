import { StyleSheet } from "react-native";
import { getFontSize } from "../../shared/helper/helper";
import { responsiveScreenWidth } from "react-native-responsive-dimensions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  contentContainer: {
    marginTop: 15,
    alignItems: "center",
    backgroundColor: "white",
    paddingBottom: getFontSize(35),
    width: responsiveScreenWidth(100),
  },
  kategoriBox: {
    width: responsiveScreenWidth(94),
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
    justifyContent: "center",
    alignItems: "center",
  },
  ketegoriBox_Center: {
    width: responsiveScreenWidth(50),
    justifyContent: "center",
  },
  ketegoriBox_Right: {
    width: responsiveScreenWidth(13),
    padding: responsiveScreenWidth(2),
    justifyContent: "center",
    alignItems: "center",
  },
  kategoriImage: {
    width: responsiveScreenWidth(15),
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
