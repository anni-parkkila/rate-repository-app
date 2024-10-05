import Constants from "expo-constants";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    uri: Constants.expoConfig.extra.apollo_uri,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
