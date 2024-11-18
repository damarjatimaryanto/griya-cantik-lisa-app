import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import COLORS from "../../shared/consts/colors.const";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import FontStyle from "../../shared/style/font.style";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SplashScreen() {
  const navigation = useNavigation();
  useEffect(() => {
    navig();
  }, []);

  const navig = async () => {
    setTimeout(async () => {
      // navigation.navigate("BoardingScreen");
      const loggedIn = await AsyncStorage.getItem("login_session");
      if (loggedIn != 1) {
        navigation.navigate("AuthenticationScreen");
        console.log("LoginScreem");

        // jika belum klik Login Tapi sudah setting baterai -> Login
      } else {
        navigation.navigate("HomeScreen");
        console.log("HomeScreen");
      }
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        barStyle={"dark-content"}
        backgroundColor={"transparent"}
      />
      <Text style={FontStyle.Manrope_Bold_24_White}>Griya Cantik Lisa</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.purple,
    alignItems: "center",
    justifyContent: "center",
  },
});
