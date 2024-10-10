import { useParams } from "react-router-native";
import { FlatList } from "react-native";
import useRepository from "../../hooks/useRepository";
import RepositoryItem from "./RepositoryItem";
import ReviewItem from "./ReviewItem";
import Text from "../Text";

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
      renderItem={({ item }) => (
        <ReviewItem review={item} showUsername={true} />
      )}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => (
        <RepositoryItem item={data.repository} showButton={true} />
      )}
    />
  );
};

export default RepositoryPage;
