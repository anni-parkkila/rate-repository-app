import { useState } from "react";
import { FlatList, View, StyleSheet } from "react-native";

import Text from "../Text";
import useRepositories from "../../hooks/useRepositories";
import RepositoryItem from "./RepositoryItem";
import ListOrder from "./ListOrder";

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({
  repositories,
  setOrderBy,
  setOrderDirection,
}) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <ListOrder
            setOrderBy={setOrderBy}
            setOrderDirection={setOrderDirection}
          />
        }
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <RepositoryItem key={item.id} item={item} />}
      />
    </View>
  );
};

const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState("CREATED_AT");
  const [orderDirection, setOrderDirection] = useState("DESC");
  const order = { orderBy, orderDirection };
  const { loading, data } = useRepositories(order);

  if (loading) return <Text>Loading...</Text>;

  return (
    <View>
      <RepositoryListContainer
        repositories={data.repositories}
        setOrderBy={setOrderBy}
        setOrderDirection={setOrderDirection}
      />
    </View>
  );
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
