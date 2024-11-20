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
import React, { useState, createRef } from "react";
import { DATA_Spesialis } from "../../shared/services/DATA_Spesialis";
import { responsiveScreenWidth } from "react-native-responsive-dimensions";
import CustomCalendar from "../../shared/component/Calendar/CalendarCustom";
import CustomTextArea from "../../shared/component/Textinput/CustomTextArea";
import ButtonPurple from "../../shared/component/Button/ButtonPurple";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import HeaderTop from "../../shared/component/Header/Header";
import {
  calculateTotalPrice,
  calculateTotalPriceToString,
  formatRupiah,
  normalizeData,
  Print_r,
} from "../../shared/helper/helper";
import ModalJenisPembayaran from "../../shared/component/Modal/ModalJenisPembayaran/ModalJenisPembayaran";
import {
  addItemToSelectedLayanan,
  removeItemFromSelectedLayanan,
} from "./booking.config";
import { addDataRiwayat } from "../../shared/services/Asycnstorage";
import { DATA_waktu } from "../../shared/services/DATA_waktu";
export default function BookingScreen({ route }) {
  const getData = route.params.data;
  const navigation = useNavigation();
  const [ModalDetail, setModalDetail] = useState(false);
  const [TanggalBooking, setTanggalBooking] = useState("");
  const [ModalPembayaran, setModalPembayaran] = useState(false);
  const [SelectedItem, setSelectedItem] = useState([]);
  const [selectedSpesialisID, setSelectedSpesialisID] = useState(null);
  const [selectedSpesialisName, setSelectedSpesialisName] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [SelectedLayanan, setSelectedLayanan] = useState([]);
  const [catatan, setCatatan] = useState("");
  const [Pembayaran, setPembayaran] = useState([]);
  const catatanRef = createRef();

  const toggleModal = () => {
    setModalDetail(!ModalDetail);
  };
  const toggleModalPembayaran = () => {
    setModalPembayaran(!ModalPembayaran);
  };
  const selectItem = (item) => {
    setSelectedItem(item);
    toggleModal();
  };
  const sendToCheckout = () => {
    const data = {
      layanan: SelectedLayanan,
      spesialis: selectedSpesialisName,
      tanggal: TanggalBooking,
      waktu: selectedTime,
      jenisPembayaran: Pembayaran,
      catatan: catatan,
      totalHarga: calculateTotalPrice(SelectedLayanan),
    };
    addDataRiwayat(data);

    navigation.navigate("CheckoutScreen", {
      data: data,
    });
    // Print_r(data);
  };

  useFocusEffect(
    React.useCallback(() => {
      const normalizedData = normalizeData(getData);
      normalizedData.forEach((item) =>
        addItemToSelectedLayanan(item, setSelectedLayanan)
      );
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
        <HeaderTop title={"Booking Layanan"} />
        <ScrollView>
          <View style={styles.contentContainer}>
            <View style={styles.jenisLayananTambah_Container}>
              <Text style={FontStyle.Manrope_Bold_14}>Jenis Layanan</Text>
              <TouchableOpacity
                style={styles.TambahStyle}
                onPress={() => navigation.navigate("ServicesScreen")}
              >
                <Image style={styles.btnPlus} source={ICONS.icon_plus} />
                <Text style={FontStyle.Manrope_Medium_14_Cyan}>Tambah</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.KategoriContainer}>
              <ScrollView showsVerticalScrollIndicator={false}>
                {SelectedLayanan.length !== 0 && (
                  <>
                    {SelectedLayanan.map((item, index) => (
                      <TouchableOpacity
                        key={index}
                        style={styles.kategoriBox}
                        onPress={() => selectItem(item)}
                      >
                        <View style={styles.kategoriBox_Left}>
                          <Image
                            source={item.assets[0].img}
                            style={styles.kategoriImage}
                          />
                        </View>
                        <View style={styles.ketegoriBox_Center}>
                          <View style={styles.keterangan_Top}>
                            <Text style={FontStyle.Manrope_Bold_16}>
                              {item.serviceName}
                            </Text>
                            <View style={styles.keterangan_Bot}>
                              <Text style={FontStyle.Manrope_Bold_16_Cyan}>
                                {formatRupiah(item.price)}{" "}
                              </Text>
                              <View style={styles.dot} />
                              <Text
                                style={FontStyle.NunitoSans_Regular_12_grey}
                              >
                                {item.categoryName}
                              </Text>
                            </View>
                          </View>
                        </View>
                        <View style={styles.ketegoriBox_Right}>
                          <TouchableOpacity
                            style={styles.plusminus_style}
                            onPress={() =>
                              removeItemFromSelectedLayanan(
                                item.serviceId,
                                setSelectedLayanan
                              )
                            }
                          >
                            <Image
                              source={ICONS.icon_minus}
                              style={styles.iconplus_minus}
                            />
                          </TouchableOpacity>
                        </View>
                      </TouchableOpacity>
                    ))}
                  </>
                )}
              </ScrollView>
            </View>

            <View style={styles.jenisLayananTambah_Container}>
              <Text style={FontStyle.Manrope_Bold_14}>Spesialis</Text>
            </View>

            <View style={styles.SpesialisList_Horizontal}>
              <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                {DATA_Spesialis.map((item, index) => (
                  <View key={index} style={styles.SpesialisStyle}>
                    <TouchableOpacity
                      style={{
                        ...styles.spesialisPhotos_Container,
                        borderColor:
                          selectedSpesialisID === item.specialistId
                            ? COLORS.purple
                            : COLORS.grey,
                        borderWidth:
                          selectedSpesialisID === item.specialistId
                            ? responsiveScreenWidth(1)
                            : 0,
                      }}
                      onPress={() => {
                        setSelectedSpesialisID(
                          selectedSpesialisID === item.specialistId
                            ? null
                            : item.specialistId
                        );
                        setSelectedSpesialisName(
                          setSelectedSpesialisName === item.specialistName
                            ? null
                            : item.specialistName
                        );
                      }}
                    >
                      <Image
                        source={item.img}
                        style={styles.spesialisPhotos_Style}
                      />
                      {selectedSpesialisID === item.specialistId && (
                        <View style={styles.spesialisFocus}>
                          <Image
                            style={styles.iconCheck}
                            source={ICONS.icon_check}
                          />
                        </View>
                      )}
                    </TouchableOpacity>
                    <Text style={FontStyle.Manrope_Medium_14_}>
                      {item.specialistName}
                    </Text>
                  </View>
                ))}
              </ScrollView>
            </View>

            <View style={styles.jenisLayananTambah_Container}>
              <Text style={FontStyle.Manrope_Bold_14}>Tanggal</Text>
            </View>

            <CustomCalendar setTanggal={setTanggalBooking} />

            <View style={styles.jenisLayananTambah_Container}>
              <Text style={FontStyle.Manrope_Bold_14}>Waktu</Text>
            </View>

            <View style={styles.KategoriList_Horizontal}>
              <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                {DATA_waktu.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    style={{
                      ...styles.KategoriStyle,
                      borderColor:
                        item.time == selectedTime ? COLORS.purple : COLORS.grey,
                      backgroundColor:
                        item.time == selectedTime
                          ? COLORS.blue_bg
                          : COLORS.white,
                      opacity: item.isDisable ? 0.3 : 1,
                    }}
                    onPress={() => {
                      setSelectedTime(
                        selectedTime === item.time ? null : item.time
                      );
                      // setSelectedSpesialisName(setSelectedSpesialisName === item.specialistName ? null : item.specialistName);
                    }}
                    disabled={item.isDisable}
                  >
                    <Text
                      style={
                        item.time == selectedTime
                          ? FontStyle.Manrope_Medium_12_Cyan
                          : FontStyle.Manrope_Medium_12
                      }
                    >
                      {item.time}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>

            <View style={styles.jenisLayananTambah_Container}>
              <Text style={FontStyle.Manrope_Bold_14}>Jenis Pembayaran</Text>
              <TouchableOpacity
                style={styles.TambahStyle}
                onPress={() => toggleModalPembayaran()}
              >
                <Text style={FontStyle.Manrope_Medium_14_Cyan}>
                  {Pembayaran.length === 0 ? "Pilih" : "Ubah"}
                </Text>
              </TouchableOpacity>
            </View>

            {Pembayaran.length !== 0 && (
              <View style={styles.PembayaranImageContainer}>
                <Image
                  source={Pembayaran.icon}
                  style={styles.PembayaranImage}
                />
              </View>
            )}

            <View style={styles.jenisLayananTambah_Container}>
              <Text style={FontStyle.Manrope_Bold_14}>Catatan</Text>
            </View>

            <CustomTextArea
              input={catatan}
              setInput={setCatatan}
              nameRef={catatanRef}
              placeHolder={"Tuliskan catatan (Opsional)"}
            />
          </View>
        </ScrollView>

        <View style={styles.FloatingBottomContainer}>
          <View style={styles.FloatingBottomLeft}>
            <Text style={FontStyle.Manrope_Bold_14}>
              Total{" "}
              <Text style={FontStyle.NunitoSans_Regular_14}>
                ({SelectedLayanan.length} Layanan)
              </Text>
            </Text>
            <Text
              style={{ ...FontStyle.Manrope_Bold_20, color: COLORS.purple }}
            >
              Rp. {calculateTotalPriceToString(SelectedLayanan)}

            </Text>
          </View>
          <View style={styles.FloatingBottomRight}>
            <ButtonPurple
              ButtonWidth={53}
              title={"Booking"}
              ButtonHeight={55}
              onPress={() => sendToCheckout()}
            />
          </View>
        </View>
      </View>

      <ModalJenisPembayaran
        visible={ModalPembayaran}
        onClose={() => setModalPembayaran(false)}
        setSelected={setPembayaran}
      />
    </SafeAreaView>
  );
}
