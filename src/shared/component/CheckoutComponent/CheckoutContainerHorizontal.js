import React from "react";
import { Text, View, StyleSheet } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import FontStyle from "../../style/font.style";

const CheckoutContainerHorizontal = ({ label, title, paddingLeft }) => {
  return (
    <View style={styles.row2}>
      <Text style={FontStyle.Manrope_Bold_14}>{title}</Text>
      <Text style={FontStyle.Manrope_Bold_14_Cyan}>{label}</Text>
    </View>
  );
};

export default CheckoutContainerHorizontal;

const styles = StyleSheet.create({
  row2: {
    width: responsiveScreenWidth(80),
    paddingVertical: responsiveScreenHeight(1),
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
