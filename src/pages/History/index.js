import React, { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { getDataRiwayat } from "../../shared/services/Asycnstorage";
import { useFocusEffect } from "@react-navigation/native";

export default function HistoryScreen() {
  const [DataRiwayat, setDataRiwayat] = useState([]);

  const fetchDataRiwayat = async () => {
    try {
      const allData = await getDataRiwayat();
      setDataRiwayat(allData || []);
    } catch (error) {
      console.error("Gagal mengambil data riwayat:", error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchDataRiwayat();
    }, [])
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      {DataRiwayat && DataRiwayat.length > 0 ? (
        DataRiwayat.map((item, index) => (
          <TouchableOpacity key={index} style={styles.kategoriBox}>
            <Text>Total Harga: {item.totalHarga}</Text>
            <Text>Layanan: {item.layanan.map((l) => l.nama).join(", ")}</Text>
            <Text>Spesialis: {item.spesialis}</Text>
            <Text>Tanggal: {item.tanggal}</Text>
            <Text>Waktu: {item.waktu}</Text>
          </TouchableOpacity>
        ))
      ) : (
        <View style={styles.emptyContainer}>
          <Text>Anda belum memiliki riwayat pemesanan.</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 16,
  },
  kategoriBox: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
