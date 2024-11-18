import React from "react";
import { TouchableOpacity, Text, Image, View, StyleSheet } from "react-native";
import { responsiveScreenWidth } from "react-native-responsive-dimensions";
import COLORS from "../../consts/colors.const";
import { getFontSize } from "../../helper/helper";
import FontStyle from "../../style/font.style";

const Layanan = ({ onPress, iconLayanan, labelLayanan }) => {
  return (
    <TouchableOpacity style={styles.LayananStyle} onPress={onPress}>
      <View style={[styles.LayananIcon_Container]}>
        <Image source={iconLayanan} style={styles.LayananIcon} />
      </View>
      <Text
        style={{ ...styles.LayananLabel, textAlign: "center" }}
        numberOfLines={2}
      >
        {labelLayanan}
      </Text>
    </TouchableOpacity>
  );
};

export default Layanan;

const styles = StyleSheet.create({
  LayananStyle: {
    width: responsiveScreenWidth(20),
    minHeight: 48,
    alignItems: "center",
    marginTop: 10,
  },
  LayananIcon_Container: {
    backgroundColor: COLORS.blue_bg,
    width: responsiveScreenWidth(16.5),
    height: responsiveScreenWidth(16.5),
    borderRadius: getFontSize(100),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 3,
  },
  LayananIcon: {
    width: "60%",
    height: "60%",
    tintColor: COLORS.grey_icon,
  },
  LayananLabel: FontStyle.Manrope_Medium_14_Cyan,
});
