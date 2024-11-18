import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { responsiveScreenWidth } from "react-native-responsive-dimensions";
import { getFontSize } from "../../helper/helper";
import FontStyle from "../../style/font.style";

const CheckoutContainerVertical = ({ label, title, paddingLeft }) => {
  return (
    <View
      style={{
        ...styles.rowSolid,
        paddingLeft: responsiveScreenWidth(paddingLeft ? paddingLeft : 0),
      }}
    >
      <Text style={FontStyle.NunitoSans_Regular_14}>{title}</Text>
      <Text
        style={{ ...FontStyle.Manrope_Bold_14_Cyan, marginTop: getFontSize(7) }}
      >
        {label}
      </Text>
    </View>
  );
};

export default CheckoutContainerVertical;

const styles = StyleSheet.create({
  rowSolid: {
    width: responsiveScreenWidth(40),
    paddingVertical: responsiveScreenWidth(3),
    justifyContent: "center",
  },
});
