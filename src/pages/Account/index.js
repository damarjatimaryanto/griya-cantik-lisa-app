import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Button, StatusBar, StyleSheet, Text, View } from "react-native";

export default function AccountScreen() {
  const navigation = useNavigation();
  const Keluar = async () => {
    await AsyncStorage.removeItem("loggedIn");
    await AsyncStorage.removeItem("userData");

    navigation.navigate("AuthenticationScreen");
    AsyncStorage.clear();
  };
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title="keluar" onPress={() => Keluar()} />
      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
});
