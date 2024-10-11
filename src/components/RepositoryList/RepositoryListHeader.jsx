import { View, StyleSheet } from "react-native";

import SearchBar from "./SearchBar";
import ListOrder from "./ListOrder";

const RepositoryListHeader = ({
  searchQuery,
  setSearchQuery,
  setOrderBy,
  setOrderDirection,
}) => {
  return (
    <View style={styles.listHeader}>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ListOrder
        setOrderBy={setOrderBy}
        setOrderDirection={setOrderDirection}
      />
    </View>
  );
};

export default RepositoryListHeader;

const styles = StyleSheet.create({
  listHeader: {
    marginTop: 5,
  },
});
