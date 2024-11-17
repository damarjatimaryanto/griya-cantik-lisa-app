
import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { getDataRiwayat } from '../../shared/services/Asycnstorage';
import { Print_r } from '../../shared/helper/helper';



export default function Riwayat_Screen() {
    const [DataRiwayat, setDataRiwayat] = useState([]);
    const fetchDataRiwayat = async () => {
        // Ambil Data
        const allData = await getDataRiwayat();
        Print_r(allData);
        setDataRiwayat(allData)
        console.log(DataRiwayat.length);
        console.log(DataRiwayat);

    };
    useFocusEffect(
        React.useCallback(() => {


            fetchDataRiwayat()

        }, [])
    );

    return (
        <View style={styles.container}>
            <StatusBar barStyle={"dark-content"} backgroundColor={'white'} />
            {DataRiwayat.length !== 0 ? (
                <>
                    {DataRiwayat.map((item, index) => (
                        <TouchableOpacity key={index} style={styles.kategoriBox}>
                            <Text>{item.totalHarga}</Text>
                        </TouchableOpacity>
                    ))}
                </>
            ) : (
                <View>
                    <Text>adan belum memiliki produk yang di sukai</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'cyan',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
