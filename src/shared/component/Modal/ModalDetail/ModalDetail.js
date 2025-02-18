import React, { useRef, useState } from "react";
import {
  Modal,
  TouchableOpacity,
  Text,
  Image,
  View,
  ScrollView,
} from "react-native";
import styles from "./style.js";
import ICONS from "../../../consts/icon.const.js";
import FontStyle from "../../../style/font.style";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import ButtonPurple from "../../Button/ButtonPurple.js";
import { useFocusEffect } from "@react-navigation/native";

const ModalDetailLayanan = ({ children, visible, onClose, data }) => {
  const scrollViewRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const itemWidth = responsiveScreenWidth(100); // Sesuaikan lebar item

    // Menggunakan Math.round untuk menghitung indeks yang lebih akurat
    const index = Math.round(contentOffsetX / itemWidth);

    if (index !== activeIndex && index >= 0 && index < data.assets.length) {
      setActiveIndex(index);
    }
  };

  const handleIndicatorPress = (index) => {
    const itemWidth = responsiveScreenWidth(100);
    scrollViewRef.current.scrollTo({ x: itemWidth * index, animated: true });
    setActiveIndex(index);
  };

  useFocusEffect(
    React.useCallback(() => {
      setActiveIndex(0);
    }, [data])
  );

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modal_style}>
          <View style={styles.modal_boxContainer_Top}>
            {data.assets && (
              <>
                <ScrollView
                  ref={scrollViewRef}
                  horizontal
                  pagingEnabled
                  onScroll={handleScroll}
                  showsHorizontalScrollIndicator={false}
                  scrollEventThrottle={16} // Lebih cepat untuk akurasi
                >
                  {data.assets.map((item, index) => (
                    <View key={index}>
                      <Image source={item.img} style={styles.imageDetail} />
                    </View>
                  ))}
                </ScrollView>

                <View style={styles.indicatorContainer}>
                  {data.assets.map((item, index) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() => handleIndicatorPress(index)}
                    >
                      <View
                        style={[
                          styles.indicator,
                          index === activeIndex
                            ? styles.activeIndicator
                            : styles.inactiveIndicator,
                        ]}
                      />
                    </TouchableOpacity>
                  ))}
                </View>
              </>
            )}
          </View>

          <View style={styles.modal_boxContainer_Center}>
            <View style={styles.detailTop}>
              <Text style={FontStyle.Manrope_Bold_24}>{data.serviceName}</Text>
              <View style={styles.durasiContainer}>
                <Image source={ICONS.icon_jam} style={styles.iconjam_Style} />
                <Text style={FontStyle.NunitoSans_Regular_16}>30 Menit</Text>
              </View>

              <Text style={FontStyle.Manrope_Bold_24_Cyan}>{data.price}</Text>
            </View>
            <View style={styles.HR_Style} />

            <Text
              style={{
                ...FontStyle.Manrope_Bold_16,
                marginBottom: responsiveScreenHeight(1),
              }}
            >
              Tentang Treatment
            </Text>
            <View style={styles.treatmentContainer}>
              <ScrollView>
                <Text style={FontStyle.NunitoSans_Regular_12_grey}>
                  {data.description}
                </Text>
              </ScrollView>
            </View>
          </View>

          <View style={styles.modal_boxContainer_Bottom}>
            <ButtonPurple title={"Booking"} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalDetailLayanan;
