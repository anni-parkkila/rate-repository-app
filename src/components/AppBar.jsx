import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary,
    paddingBottom: 15,
    paddingLeft: 15,
  },
  scrollBar: {
    flexDirection: "row",
    gap: 30,
  },
});

const AppBar = () => {
  const onPress = () => console.log("Pressed!");

  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollBar}>
        <AppBarTab title={"Repositories"} navigateTo={"/"} />
        <AppBarTab title={"Sign in"} navigateTo={"/sign_in"} />
      </ScrollView>
    </View>
  );
};

export default AppBar;
