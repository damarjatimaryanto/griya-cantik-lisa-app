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
import Layanan from "../../shared/component/Layanan/Layanan";
import Layanan_Horizontal from "../../shared/component/Layanan/Layanan_Horizontal";
import COLORS from "../../shared/consts/colors.const";
import { DATA_HairCare } from "../../shared/services/DATA_HairCare";
import { DATA_Kategori } from "../../shared/services/DATA_Kategori";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { formatRupiah, Print_r } from "../../shared/helper/helper";
import React, { useState } from "react";
import { getUserSession } from "../../shared/services/Asycnstorage";
import { testFetch } from "../../shared/services/test.service";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [userData, setUserData] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      testFetch().then((res) => {
        console.log(res);
      });
      getUserSession(setUserData);
    }, [])
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <StatusBar
            translucent={false}
            barStyle={"dark-content"}
            backgroundColor={"white"}
          />
          <View style={styles.TopContainer}>
            <View style={styles.TopContainer_Left}>
              <Text style={FontStyle.Manrope_Bold_24} numberOfLines={1}>
                Halo, {userData[0]?.nama_user || "stefany"}
              </Text>
              <Text
                style={{ ...FontStyle.NunitoSans_Regular_14, marginTop: 5 }}
              >
                Find the service you want, and treat yourself
              </Text>
            </View>
            <View style={styles.TopContainer_Right}>
              <TouchableOpacity
                onPress={() => navigation.navigate("FavouriteScreen")}
              >
                <Image
                  source={ICONS.icon_heart}
                  style={styles.icon_Heart_style}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.CardContainer}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
              <Image source={ICONS.card_1} style={styles.CardStyle} />
              <Image source={ICONS.card_1} style={styles.CardStyle} />
              <Image source={ICONS.card_1} style={styles.CardStyle} />
            </ScrollView>
          </View>

          <View style={styles.LayananContainer}>
            <Text style={FontStyle.Manrope_Bold_16}>Layanan</Text>
            <View style={styles.LayananList}>
              {DATA_Kategori.map((item, index) => (
                <Layanan
                  key={index}
                  iconLayanan={item.icon}
                  labelLayanan={item.categoryName}
                  onPress={() =>
                    navigation.navigate("ExploreScreen", { data: item })
                  }
                />
              ))}
            </View>
          </View>

          <View style={styles.PalingDicariContainer}>
            <Text style={FontStyle.Manrope_Bold_16}>Paling Dicari</Text>
            <View style={styles.LayananList_Horizontal}>
              <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                {DATA_Kategori.map((item, index) => (
                  <Layanan_Horizontal
                    key={index}
                    iconLayanan={item.icon}
                    labelLayanan={item.categoryName}
                  />
                ))}
              </ScrollView>
            </View>
          </View>

          <View style={styles.KategoriContainer}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
              {DATA_HairCare.map((item, index) => (
                <TouchableOpacity key={index} style={styles.kategoriBox}>
                  <View style={styles.kategoriBox_Left}>
                    <Image
                      source={item.assets[0].img}
                      style={styles.kategoriImage}
                    />

                    <TouchableOpacity style={styles.likeContainer}>
                      <Image
                        source={ICONS.icon_heart}
                        style={{
                          ...styles.icon_Heart_style,
                          tintColor: COLORS.pink_solid,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.ketegoriBox_Right}>
                    <View style={styles.keterangan_Top}>
                      <Text style={FontStyle.NunitoSans_Regular_16_cyan}>
                        {item.categoryName}
                      </Text>
                      <Text style={FontStyle.Manrope_Bold_16}>
                        {item.serviceName}
                      </Text>
                      <Text
                        style={FontStyle.NunitoSans_Regular_12_grey}
                        numberOfLines={2}
                      >
                        {item.description}
                      </Text>
                    </View>
                    <View style={styles.keterangan_Bot}>
                      <Text style={FontStyle.NunitoSans_Regular_12_grey}>
                        {formatRupiah(item.price)}
                      </Text>

                      <TouchableOpacity style={styles.buttonBoking}>
                        <Text style={FontStyle.Manrope_Bold_10_Cyan}>
                          Booking
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
