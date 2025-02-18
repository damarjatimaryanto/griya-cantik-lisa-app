import { Text, View, StatusBar, SafeAreaView } from "react-native";
import React, { useState, createRef } from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./style.js";
import ICONS from "../../shared/consts/icon.const.js";
import ButtonPurple from "../../shared/component/Button/ButtonPurple.js";
import CustomTextInput from "../../shared/component/Textinput/CustomTextInput.js";
import FontStyle from "../../shared/style/font.style.js";
import { responsiveScreenHeight } from "react-native-responsive-dimensions";
import { handleLogin } from "./login.config.js";

const AuthenticationScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const userNameInputRef = createRef();
  const userPasswordInputRef = createRef();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar
          translucent={false}
          barStyle={"dark-content"}
          backgroundColor={"white"}
        />
        <View style={styles.mid_container}>
          <View style={styles.title_container}>
            <Text style={FontStyle.Manrope_Bold_24}>Selamat Datang,</Text>
            <Text style={FontStyle.NunitoSans_Regular_14}>
              Login dan nikmati kemudahan merencanakan perawatan sesuai
              kebutuhan Anda
            </Text>
          </View>
          <View style={styles.form_container}>
            <CustomTextInput
              iconForm={ICONS.icon_username}
              nameRef={userNameInputRef}
              placeHolder={"Username"}
              input={username}
              setInput={setUsername}
            />

            <CustomTextInput
              iconForm={ICONS.icon_lock}
              isSecureForm={true}
              nameRef={userPasswordInputRef}
              placeHolder={"Kata Sandi"}
              input={password}
              setInput={setPassword}
            />

            <ButtonPurple
              ButtonHeight={60}
              title={"Masuk"}
              ButtonMarginTop={responsiveScreenHeight(20)}
              onPress={() => handleLogin(username, password, navigation)}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AuthenticationScreen;
