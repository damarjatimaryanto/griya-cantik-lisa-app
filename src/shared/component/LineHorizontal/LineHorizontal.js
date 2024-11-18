import React from "react";
import { View } from "react-native";
import { responsiveScreenHeight } from "react-native-responsive-dimensions";
import { styles } from "./style";

const LineHorizontal = ({
  isSolid,
  width,
  isRounded,
  marginVertical,
  height,
}) => {
  return (
    <View
      style={{
        ...styles.paddingContainer,
        marginVertical: responsiveScreenHeight(
          marginVertical ? marginVertical : 0
        ),
        height: responsiveScreenHeight(height ? height : 2),
      }}
    >
      <View
        style={{
          ...styles.paddingLeft,
          backgroundColor: isRounded ? "white" : "transparent",
        }}
      />
      <View
        style={{
          ...styles.paddingCenter,
          borderStyle: isSolid ? "solid" : "dashed",
        }}
      />
      <View
        style={{
          ...styles.paddingRight,
          backgroundColor: isRounded ? "white" : "transparent",
        }}
      />
    </View>
  );
};

export default LineHorizontal;
