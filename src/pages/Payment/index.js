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

import { useNavigation } from "@react-navigation/native";
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
