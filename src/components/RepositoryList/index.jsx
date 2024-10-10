import { useState } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { useDebounce } from "use-debounce";

import Text from "../Text";
import useRepositories from "../../hooks/useRepositories";
import RepositoryItem from "./RepositoryItem";
import ListOrder from "./ListOrder";
import SearchBar from "./SearchBar";

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({
  repositories,
  searchQuery,
  setSearchQuery,
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
          <View style={styles.listHeader}>
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            <ListOrder
              setOrderBy={setOrderBy}
              setOrderDirection={setOrderDirection}
            />
          </View>
        }
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <RepositoryItem key={item.id} item={item} />}
      />
    </View>
  );
};

const RepositoryList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [orderBy, setOrderBy] = useState("CREATED_AT");
  const [orderDirection, setOrderDirection] = useState("DESC");

  const [searchKeyword] = useDebounce(searchQuery, 500);
  const order = { orderBy, orderDirection };

  const { loading, data } = useRepositories(searchKeyword, order);

  if (loading) return <Text>Loading...</Text>;

  return (
    <View>
      <RepositoryListContainer
        repositories={data.repositories}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
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
  listHeader: {
    marginTop: 5,
  },
});
