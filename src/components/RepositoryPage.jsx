import { useParams } from "react-router-native";
import { View } from "react-native";

import useRepository from "../hooks/useRepository";
import RepositoryItem from "./RepositoryItem";
import Text from "./Text";

const RepositoryPage = () => {
  const id = useParams().id;
  const { loading, data } = useRepository({ id });

  if (loading) return <Text>Loading...</Text>;

  return (
    <View>
      <RepositoryItem item={data.repository} showButton={true} />
    </View>
  );
};

export default RepositoryPage;
