import AsyncStorage from "@react-native-async-storage/async-storage";
import { Print_r } from "../helper/helper";
import { ToastAndroid } from "react-native";

const DATA_KEY = 'productList';
const DATA_KEY_riwayat = 'riwayat_checkout';

export const GET_UserSession = async (setData) => {
    try {
        const userSession = await AsyncStorage.getItem('user_session');
        if (userSession) {
            const userObject = JSON.parse(userSession);
            const userArray = [userObject];
            setData(userArray); 
        }
    } catch (error) {
        console.error('Error fetching user session:', error);
    }
};




// **CREATE**: Tambah Data Baru
export const addDataLiked = async (newData) => {
    try {
        const existingData = await getDataLiked(); 
        const updatedData = [...(existingData || []), newData]; 
        await AsyncStorage.setItem(DATA_KEY, JSON.stringify(updatedData));
        console.log('Data berhasil ditambahkan!');
        ToastAndroid.show('Berhasil ditambahkan ke Disukai!', ToastAndroid.SHORT);
    } catch (error) {
        console.error('Gagal menambahkan data:', error);
    }
};

// **READ**: Ambil Data
export const getDataLiked = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem(DATA_KEY);
        return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (error) {
        console.error('Gagal membaca data:', error);
        return [];
    }
};

// **UPDATE**: Perbarui Data Berdasarkan ID
export const updateDataLiked = async (id, updatedFields) => {
    try {
        const existingData = await getDataLiked();
        const updatedData = existingData.map((item) =>
            item.id === id ? { ...item, ...updatedFields } : item
        );
        await AsyncStorage.setItem(DATA_KEY, JSON.stringify(updatedData));
        console.log('Data berhasil diperbarui!');
    } catch (error) {
        console.error('Gagal memperbarui data:', error);
    }
};

// **DELETE**: Hapus Data Berdasarkan ID
export const deleteDataLiked = async (id) => {
    try {
        const existingData = await getDataLiked();
        const updatedData = existingData.filter((item) => item.id !== id);
        await AsyncStorage.setItem(DATA_KEY, JSON.stringify(updatedData));
        ToastAndroid.show('Berhasil dihapus dari Disukai!', ToastAndroid.SHORT);
    } catch (error) {
        console.error('Gagal menghapus data:', error);
    }
};




export const addDataRiwayat = async (newData) => {
    try {
        const existingData = await getDataRiwayat(); 
        const updatedData = [...(existingData || []), newData]; 
        await AsyncStorage.setItem(DATA_KEY_riwayat, JSON.stringify(updatedData));
        console.log('Data berhasil ditambahkan!');
        ToastAndroid.show('Berhasil ditambahkan!', ToastAndroid.SHORT);
    } catch (error) {
        console.error('Gagal menambahkan data:', error);
    }
};

export const getDataRiwayat = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem(DATA_KEY_riwayat);
        return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (error) {
        console.error('Gagal membaca data:', error);
        return [];
    }
};


// const exampleUsage = async () => {
//     // Tambah Data Baru
//     const newItem = {
//       id: 3,
//       nama: "Smoothing Rambut",
//       kategori: "Hair Care",
//       harga: 250000,
//       image: "ICONS.kategori_3",
//       keterangan: "Deskripsi produk smoothing rambut.",
//       isLoved: false,
//       imageDetail: [
//         { id: 1, image: "ICONS.kategori_3" },
//         { id: 2, image: "ICONS.kategori_3" },
//       ],
//     };
//     await addData(newItem);
  
//     // Ambil Data
//     const allData = await getData();
//     console.log('Semua Data:', allData);
  
//     // Perbarui Data
//     await updateData(2, { harga: 350000, isLoved: true });
  
//     // Hapus Data
//     await deleteData(1);
  
//     // Ambil Data Lagi Setelah Perubahan
//     const updatedData = await getData();
//     console.log('Data Setelah Perubahan:', updatedData);
//   };