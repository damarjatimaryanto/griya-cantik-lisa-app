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
import COLORS from "../../shared/consts/colors.const";
import { DATA_Kategori } from "../../shared/services/DATA_Kategori";
import React, { useState } from "react";
import ModalDetailLayanan from "../../shared/component/Modal/ModalDetail/ModalDetail";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { formatRupiah, Print_r } from "../../shared/helper/helper";
import {
  addDataLiked,
  deleteDataLiked,
  getDataLiked,
} from "../../shared/services/Asycnstorage";
import { DATA_Product } from "../../shared/services/DATA_Product";

export default function ExploreScreen({ route }) {
  const getData = route?.params?.data || null;

  const navigation = useNavigation();
  const [ModalDetail, setModalDetail] = useState(false);
  const [selectedKategori, setSelectedKategori] = useState(null);
  const [selectedKategoriName, setSelectedKategoriName] = useState(null);
  const [SelectedItem, setSelectedItem] = useState([]);
  const [likedProducts, setLikedProducts] = useState([]);

  const toggleModal = () => {
    setModalDetail(!ModalDetail);
  };
  const selectItem = (item) => {
    setSelectedItem(item);
    toggleModal();
  };
  const fetchLikedData = async () => {
    const likedData = await getDataLiked();
    setLikedProducts(likedData);
  };

  const isProductLiked = (productId) => {
    return likedProducts.some((item) => item.id === productId);
  };

  // Fungsi untuk menambahkan produk ke dalam liked
  const handleLikeToggle = (product) => {
    // Cek apakah produk sudah di-like
    if (isProductLiked(product.id)) {
      // Jika sudah, hapus dari liked
      deleteDataLiked(product.id);
      setLikedProducts((prev) => prev.filter((item) => item.id !== product.id));
    } else {
      // Jika belum, tambahkan ke liked
      addDataLiked(product);
      setLikedProducts((prev) => [...prev, product]);
    }
  };
  const filteredProducts = selectedKategori
    ? DATA_Product.filter((product) => product.kategori_id === selectedKategori)
    : DATA_Product;

  useFocusEffect(
    React.useCallback(() => {
      // Menggunakan getData jika ada, atau default nilai kategori
      if (getData) {
        setSelectedKategori(getData.id_kategori);
        setSelectedKategoriName(getData.nama_kategori);
      } else {
        setSelectedKategori(1);
        setSelectedKategoriName("Hair Care");
      }
      fetchLikedData();
    }, [getData])
  );
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar
          translucent={false}
          barStyle={"dark-content"}
          backgroundColor={"white"}
        />

        <View style={styles.KategoriListContainer}>
          <Text style={FontStyle.Manrope_Bold_16}>{selectedKategoriName}</Text>
          <View style={styles.KategoriList_Horizontal}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
              {DATA_Kategori.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={{
                    ...styles.KategoriStyle,
                    borderColor:
                      selectedKategori === item.id_kategori
                        ? COLORS.purple
                        : COLORS.grey,
                    backgroundColor:
                      selectedKategori === item.id_kategori
                        ? COLORS.blue_bg
                        : COLORS.white,
                  }}
                  onPress={() => {
                    setSelectedKategori(
                      selectedKategori === item.id_kategori
                        ? null
                        : item.id_kategori
                    );
                  }}
                >
                  <Text
                    style={
                      item.isFocused
                        ? FontStyle.Manrope_Medium_12_Cyan
                        : FontStyle.Manrope_Medium_12
                    }
                  >
                    {item.nama_kategori}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>

        <View style={styles.KategoriContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {filteredProducts.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.kategoriBox}
                onPress={() => selectItem(item)}
              >
                <View style={styles.kategoriBox_Left}>
                  <Image source={item.image} style={styles.kategoriImage} />

                  <TouchableOpacity
                    style={styles.likeContainer}
                    onPress={() => handleLikeToggle(item)}
                  >
                    <Image
                      source={ICONS.icon_heart}
                      style={{
                        ...styles.icon_Heart_style,
                        tintColor: COLORS.pink_solid,
                        opacity: isProductLiked(item.id) ? 1 : 0.4,
                      }}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.ketegoriBox_Right}>
                  <View style={styles.keterangan_Top}>
                    <Text style={FontStyle.NunitoSans_Regular_16_cyan}>
                      {item.kategori}
                    </Text>
                    <Text style={FontStyle.Manrope_Bold_16}>{item.nama}</Text>
                    <Text
                      style={FontStyle.NunitoSans_Regular_12_grey}
                      numberOfLines={2}
                    >
                      {item.keterangan}
                    </Text>
                  </View>
                  <View style={styles.keterangan_Bot}>
                    <Text style={FontStyle.NunitoSans_Regular_12_grey}>
                      {formatRupiah(item.harga)}
                    </Text>

                    <TouchableOpacity
                      style={styles.buttonBoking}
                      onPress={() =>
                        navigation.navigate("BookingScreen", { data: item })
                      }
                    >
                      <Text style={FontStyle.Manrope_Bold_10_Cyan}>Boking</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>

      <ModalDetailLayanan
        visible={ModalDetail}
        onClose={toggleModal}
        data={SelectedItem}
      />
    </SafeAreaView>
  );
}
