import { useQuery } from "@apollo/client";
import { Text, FlatList } from "react-native";
import { GET_CURRENT_USER } from "../graphql/queries";
import ReviewItem from "./RepositoryList/ReviewItem";

const MyReviews = () => {
  const { data, loading } = useQuery(GET_CURRENT_USER, {
    variables: { includeReviews: true },
    fetchPolicy: "cache-and-network",
  });

  if (loading) return <Text>Loading...</Text>;

  const reviewNodes = data.me
    ? data.me.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => (
        <ReviewItem review={item} showRepositoryName={true} />
      )}
      keyExtractor={({ id }) => id}
    />
  );
};

export default MyReviews;
