import { Searchbar } from "react-native-paper";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <Searchbar
      mode="view"
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
      autoFocus={true}
    />
  );
};

export default SearchBar;
