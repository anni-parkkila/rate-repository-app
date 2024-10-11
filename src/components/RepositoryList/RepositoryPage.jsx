import { useParams } from "react-router-native";
import { FlatList } from "react-native";
import useRepository from "../../hooks/useRepository";
import RepositoryItem from "./RepositoryItem";
import ReviewItem from "./ReviewItem";
import Text from "../Text";

const RepositoryPage = () => {
  const id = useParams().id;
  const { repository, fetchMore } = useRepository({ first: 6, id });

  // if (loading) return <Text>Loading...</Text>;

  const reviewNodes = repository
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];

  const onEndReach = () => {
    // console.log("You have reached the end of the list");
    fetchMore();
  };

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => (
        <ReviewItem review={item} showUsername={true} />
      )}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => (
        <RepositoryItem item={repository} showButton={true} />
      )}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

export default RepositoryPage;
