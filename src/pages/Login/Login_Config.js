import AsyncStorage from "@react-native-async-storage/async-storage";
import { DATA_User } from "../../shared/services/DATA_User";
import { Alert } from "react-native";

export const handleLogin = async (usernameGet, passwordGet, navigation) => {

    const user = DATA_User.find(
        (u) => u.username === usernameGet && u.password === passwordGet
    );

    if (user) {

        await AsyncStorage.setItem('user_session', JSON.stringify(user));
        await AsyncStorage.setItem('login_session', '1');

        navigation.navigate('Home_Screen');
    } else {
        Alert.alert('Username atau password salah!');
    }
};