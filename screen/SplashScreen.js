import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SplashScreen = ({ navigation }) => {
  const [animating, setAnimating] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);

      AsyncStorage.getItem("username").then((value) => {
        value === null
          ? navigation.replace("LoginScreen")
          : navigation.replace("Home");
      });
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator
        animating={animating}
        color="#fff"
        size="large"
        style={styles.ActivityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e84393",
  },
  ActivityIndicator: {
    alignItems: "center",
    height: 80,
  },
});
