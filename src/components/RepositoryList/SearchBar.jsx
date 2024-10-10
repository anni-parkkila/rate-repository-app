import { Searchbar } from "react-native-paper";
import { StyleSheet } from "react-native";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <Searchbar
      style={styles.searchBar}
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
    />
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBar: {
    flexGrow: 1,
  },
});
