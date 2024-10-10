import { useState } from "react";
import { Button, Menu } from "react-native-paper";
import { View, StyleSheet } from "react-native";

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

export default ListOrder;

const styles = StyleSheet.create({
  orderByContainer: {
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "left",
  },
});
