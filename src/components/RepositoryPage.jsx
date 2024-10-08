import { useParams } from "react-router-native";
import { FlatList, View, StyleSheet } from "react-native";
import { format, parseISO } from "date-fns";

import useRepository from "../hooks/useRepository";
import RepositoryItem from "./RepositoryItem";
import Text from "./Text";
import theme from "../theme";

const ReviewItem = ({ review }) => {
  const { rating, user, createdAt, text } = review;
  const date = format(parseISO(createdAt), "dd.MM.yyyy");
  return (
    <View style={styles.container}>
      <View style={styles.rating}>
        <Text fontSize="subheading" color="primary">
          {rating}
        </Text>
      </View>
      <View>
        <Text fontSize="subheading" color="textPrimary" fontWeight="bold">
          {user.username}
        </Text>
        <Text>{date}</Text>
        <Text>{text}</Text>
      </View>
    </View>
  );
};

const RepositoryPage = () => {
  const id = useParams().id;
  const { loading, data } = useRepository({ id });

  if (loading) return <Text>Loading...</Text>;

  const reviewNodes = data.repository
    ? data.repository.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => (
        <RepositoryItem item={data.repository} showButton={true} />
      )}
    />
  );
};

export default RepositoryPage;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    backgroundColor: "white",
    padding: 15,
    marginTop: 10,
  },
  rating: {
    borderColor: theme.colors.primary,
    borderRadius: 40 / 2,
    borderWidth: 2,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  review: {
    marginVertical: 5,
    flexGrow: 0,
    paddingVertical: 3,
    overflow: "hidden",
  },
  item: {
    padding: 15,
    marginTop: 10,
  },
});
