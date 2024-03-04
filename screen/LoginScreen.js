import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { Component, useState, createRef } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TextInput } from "react-native-gesture-handler";

const LoginScreen = ({ navigation }) => {
  const [UserEmail, setUserEmail] = useState("");
  const [UserPassword, setUserPassword] = useState("");
  const handleproses = () => {
    if (!UserEmail) {
      alert("tolong isi Email atau Username");
      return;
    }
    if (!UserPassword) {
      alert("tolong isi Password");
      return;
    }
    //CURL CALL API LOGIN

    //if true login
    AsyncStorage.setItem("username", UserEmail);
    AsyncStorage.setItem("password", UserPassword);
    navigation.replace("Home");
    //end if true login

    //END API LOGIN

    // setLoading{true};
  };

  return (
    <SafeAreaView style={Styles.mainBody}>
      <ScrollView
        style={Styles.ScrollView}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <KeyboardAvoidingView enabled>
          <View style={Styles.container}>
            <View style={Styles.Logo}>
              <Image
                style={{
                  resizeMode: "contain",
                }}
                source={require("../assets/logo.png")}
              />
            </View>
            <View>
              <Text style={Styles.text}>Login Ke Platform</Text>
            </View>
            <View style={Styles.SectionStyle}>
              <TextInput
                style={Styles.inputStyle}
                onChangeText={(UserEmail) => setUserEmail(UserEmail)}
                selectionColor="green"
                placeholder="hello@gmail.com"
                placeholderTextColor={"grey"}
                autoCapitalize="none"
                keyboardType="email-address"
                required
              />
              <TextInput
                secureTextEntry={true}
                style={Styles.inputStyle}
                onChangeText={(UserPassword) => setUserPassword(UserPassword)}
                selectionColor="green"
                placeholder="password"
                placeholderTextColor={"grey"}
                autoCapitalize="none"
                autoCorrect={false}
                type="password"
                required
              />
              <View style={Styles.LoginStyle}>
                <TouchableOpacity
                  style={Styles.LoginButton}
                  onPress={handleproses}
                >
                  <Text style={Styles.Login}>Login</Text>
                </TouchableOpacity>
              </View>
              <View style={Styles.RegisterStyle}>
                <Text style={Styles.RegisterText}>Sudah Memiliki Akun?</Text>
                <TouchableOpacity style={Styles.RegisterButton}>
                  <Text style={Styles.Register}>Daftar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const Styles = StyleSheet.create({
  mainBody: {
    flex: 1,
  },
  container: {
    height: 400,
    justifyContent: "center",
    alignContent: "center",
    marginHorizontal: "5%",
    borderRadius: 20,
    backgroundColor: "#fff",
    gap: 15,
  },
  Logo: {
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  SectionStyle: {
    flexDirection: "column",
    width: "90%",
    height: 200,
    marginTop: 20,
    marginHorizontal: 20,
    gap: 15,
  },
  inputStyle: {
    flex: 1,
    fontSize: 16,
    borderRadius: 10,
    backgroundColor: "#eee",
    paddingHorizontal: 10,
  },
  LoginStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
  LoginButton: {
    height: 40,
    width: "100%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF7303",
  },
  Login: {
    color: "#fff",
    fontSize: 16,
  },
  RegisterStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  RegisterText: {
    fontSize: 16,
  },
  Register: {
    color: "#122235",
    fontSize: 16,
  },
});
