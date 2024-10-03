import { useState } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary,
    paddingBottom: 15,
    paddingLeft: 15,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

const AppBar = () => {
  const onPress = () => console.log("Pressed!");

  return (
    <View style={styles.container}>
      <AppBarTab title={"Repositories"} navigateTo={"/"} />
      <AppBarTab title={"Sign in"} navigateTo={"/sign_in"} />
    </View>
  );
};

export default AppBar;
