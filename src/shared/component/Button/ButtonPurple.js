import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { responsiveScreenWidth } from "react-native-responsive-dimensions";
import { styles } from "./style";

const ButtonPurple = ({
  onPress,
  title,
  ButtonWidth,
  ButtonHeight,
  ButtonMarginVertical,
  ButtonMarginHorizontal,
  ButtonMarginTop,
  ButtonMarginBottom,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.btn,
        {
          width: ButtonWidth
            ? responsiveScreenWidth(ButtonWidth)
            : responsiveScreenWidth(94),
          height: ButtonHeight ? ButtonHeight : 50,
          marginVertical: ButtonMarginVertical,
          marginHorizontal: ButtonMarginHorizontal,
          marginTop: ButtonMarginTop,
          marginBottom: ButtonMarginBottom,
        },
      ]}
      onPress={onPress}
    >
      <Text style={styles.btnTitle}>{title ? title : "Button"}</Text>
    </TouchableOpacity>
  );
};

export default ButtonPurple;
