import { Link } from "react-router-native";
import useAuthStorage from "../hooks/useAuthStorage";
import { useApolloClient } from "@apollo/client";
import Text from "./Text";

const AppBarTab = ({ title, navigateTo }) => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
  };

  return (
    <Link to={navigateTo} onPress={title === "Sign out" ? signOut : null}>
      <Text color="lightGray" fontSize="appBar">
        {title}
      </Text>
    </Link>
  );
};

export default AppBarTab;
