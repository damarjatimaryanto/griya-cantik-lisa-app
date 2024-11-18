import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./style";
import ICONS from "../../shared/consts/icon.const";
import FontStyle from "../../shared/style/font.style";
import Layanan_Horizontal from "../../shared/component/Layanan/Layanan_Horizontal";
import COLORS from "../../shared/consts/colors.const";
import { DATA_HairCare } from "../../shared/services/DATA_HairCare";
import { DATA_Kategori } from "../../shared/services/DATA_Kategori";
import { createRef, useRef, useState } from "react";
import { responsiveScreenWidth } from "react-native-responsive-dimensions";
import ButtonPurple from "../../shared/component/Button/ButtonPurple";

import { useNavigation } from "@react-navigation/native";
import { Print_r } from "../../shared/helper/helper";
import HeaderTop from "../../shared/component/Header/Header";
import { DATA_Payment } from "../../shared/services/DATA_Payment";

export default function PilihPembayaran_Screen(setJenisPembayaran) {
  const navigation = useNavigation();

  const selectItem = (item) => {
    setJenisPembayaran(item);
    navigation.navigate("Booking_Screen");
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
        <HeaderTop
          title={"Pilih Pembayaran"}
          NavigateTo={() => navigation.navigate("Booking_Screen")}
        />
        <ScrollView>
          <View style={styles.contentContainer}>
            {DATA_Payment.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.kategoriBox}
                onPress={() => selectItem(item)}
              >
                <View style={styles.kategoriBox_Left}>
                  <Image source={item.icon} style={styles.kategoriImage} />
                </View>
                <View style={styles.ketegoriBox_Center}>
                  <Text style={FontStyle.Manrope_Bold_14}>
                    {item.nama_payment}
                  </Text>
                </View>
                <View style={styles.ketegoriBox_Right}>
                  <Image source={ICONS.icon_right} style={styles.icon_Right} />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
