import { View, StyleSheet, ScrollView } from "react-native";
import { useQuery } from "@apollo/client";
import Constants from "expo-constants";
import theme from "../theme";
import { ME } from "../graphql/queries";
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
  let loggedUser = null;

  const { data } = useQuery(ME, {
    fetchPolicy: "cache-and-network",
  });

  if (data) {
    loggedUser = data.me;
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollBar}>
        <AppBarTab title={"Repositories"} navigateTo={"/"} />
        <AppBarTab title={"Create a review"} navigateTo={"/create_review"} />
        {loggedUser ? (
          <AppBarTab title={"Sign out"} navigateTo={"/"} />
        ) : (
          <AppBarTab title={"Sign in"} navigateTo={"/sign_in"} />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
