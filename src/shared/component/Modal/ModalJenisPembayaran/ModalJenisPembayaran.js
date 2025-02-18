import React from "react";
import {
  Modal,
  TouchableOpacity,
  Text,
  Image,
  View,
  ScrollView,
  StatusBar,
} from "react-native";
import styles from "./style";
import ICONS from "../../../consts/icon.const.js";
import FontStyle from "../../../style/font.style.js";
import HeaderTop from "../../Header/Header.js";
import { DATA_Payment } from "../../../services/DATA_Payment.js";

const ModalJenisPembayaran = ({ children, visible, onClose, setSelected }) => {
  const selectItem = (item) => {
    setSelected(item);
    onClose();
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <StatusBar
          translucent={false}
          barStyle={"dark-content"}
          backgroundColor={"white"}
        />
        <View style={styles.modal_style}>
          <HeaderTop title={"Jenis Pembayaran"} />
          <ScrollView>
            <View style={styles.contentContainer}>
              {DATA_Payment.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.kategoriBox}
                  onPress={() => selectItem(item)}
                >
                  <View style={styles.kategoriBox_Left}>
                    <Image source={item.img} style={styles.kategoriImage} />
                  </View>
                  <View style={styles.ketegoriBox_Center}>
                    <Text style={FontStyle.Manrope_Bold_14}>
                      {item.paymentMethodName}
                    </Text>
                  </View>
                  <View style={styles.ketegoriBox_Right}>
                    <Image
                      source={ICONS.icon_right}
                      style={styles.icon_Right}
                    />
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default ModalJenisPembayaran;
