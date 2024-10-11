import { useState } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { useDebounce } from "use-debounce";

import Text from "../Text";
import useRepositories from "../../hooks/useRepositories";
import RepositoryItem from "./RepositoryItem";
import RepositoryListHeader from "./RepositoryListHeader";

const ItemSeparator = () => <View style={styles.separator} />;

// export class RepositoryListContainer extends Component {
//   renderHeader = () => {
//     const { searchQuery, setSearchQuery, setOrderBy, setOrderDirection } =
//       this.props;
//     return (
//       <RepositoryListHeader
//         searchQuery={searchQuery}
//         setSearchQuery={setSearchQuery}
//         setOrderBy={setOrderBy}
//         setOrderDirection={setOrderDirection}
//       />
//     );
//   };

//   render() {
//     const { repositories } = this.props;
//     const repositoryNodes = repositories
//       ? repositories.edges.map((edge) => edge.node)
//       : [];

//     return (
//       <View style={styles.container}>
//         <FlatList
//           ListHeaderComponent={this.renderHeader}
//           data={repositoryNodes}
//           ItemSeparatorComponent={ItemSeparator}
//           renderItem={({ item }) => (
//             <RepositoryItem key={item.id} item={item} />
//           )}
//         />
//       </View>
//     );
//   }
// }

export const RepositoryListContainer = ({
  repositories,
  searchQuery,
  setSearchQuery,
  setOrderBy,
  setOrderDirection,
  onEndReach,
}) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <RepositoryListHeader
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setOrderBy={setOrderBy}
            setOrderDirection={setOrderDirection}
          />
        }
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <RepositoryItem key={item.id} item={item} />}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

const RepositoryList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchKeyword] = useDebounce(searchQuery, 500);
  const [orderBy, setOrderBy] = useState("CREATED_AT");
  const [orderDirection, setOrderDirection] = useState("DESC");

  const { repositories, fetchMore } = useRepositories({
    first: 4,
    searchKeyword,
    orderBy,
    orderDirection,
  });

  // if (loading) return <Text>Loading...</Text>;

  const onEndReach = () => {
    console.log("You have reached the end of the list");
    fetchMore();
  };

  return (
    <View>
      <RepositoryListContainer
        repositories={repositories}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setOrderBy={setOrderBy}
        setOrderDirection={setOrderDirection}
        onEndReach={onEndReach}
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
