import { useState } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { Button, Menu } from "react-native-paper";
import Text from "./Text";
import useRepositories from "../hooks/useRepositories";
import RepositoryItem from "./RepositoryItem";

const ItemSeparator = () => <View style={styles.separator} />;

const ListOrder = ({ setOrderBy, setOrderDirection }) => {
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const handleSelection = (orderBy, orderDirection) => {
    setOrderBy(orderBy);
    setOrderDirection(orderDirection);
    closeMenu();
  };

  return (
    <View style={styles.orderByContainer}>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Button icon="sort" onPress={openMenu}>
            Order by
          </Button>
        }
        mode="elevated"
      >
        <Menu.Item
          onPress={() => handleSelection("CREATED_AT", "DESC")}
          title="Latest repositories"
        />
        <Menu.Item
          onPress={() => handleSelection("RATING_AVERAGE", "DESC")}
          title="Highest rated repositories"
        />
        <Menu.Item
          onPress={() => handleSelection("RATING_AVERAGE", "ASC")}
          title="Lowest rated repositories"
        />
      </Menu>
    </View>
  );
};

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
  orderByContainer: {
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "left",
  },
});
