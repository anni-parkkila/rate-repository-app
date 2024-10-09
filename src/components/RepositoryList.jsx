import { FlatList, View, StyleSheet } from "react-native";
import Text from "./Text";
import useRepositories from "../hooks/useRepositories";
import RepositoryItem from "./RepositoryItem";

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <View style={styles.container}>
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <RepositoryItem key={item.id} item={item} />}
      />
    </View>
  );
};

const RepositoryList = () => {
  const order = { orderBy: "CREATED_AT", orderDirection: "DESC" };
  const { loading, data } = useRepositories(order);

  if (loading) return <Text>Loading...</Text>;

  return <RepositoryListContainer repositories={data.repositories} />;
};

export default RepositoryList;

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  container: {
    display: "flex",
    rowGap: 10,
  },
});
