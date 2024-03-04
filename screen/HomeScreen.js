import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import App from "../App";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Hallo, kita sudah login</Text>
      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={() => {
          AsyncStorage.clear();
          navigation.navigate("LoginScreen");
        }}
      >
        <Text style={styles.buttonTextStyle}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "#e67e22",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#e67e22",
    height: 40,
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 60,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});
