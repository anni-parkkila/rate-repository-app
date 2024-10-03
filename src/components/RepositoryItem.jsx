import { View } from "react-native";
import Text from "./Text";

const RepositoryItem = ({ item }) => {
  const {
    fullName,
    description,
    language,
    stargazersCount,
    forksCount,
    reviewCount,
    ratingAverage,
  } = item;
  return (
    <View>
      <Text color={"primary"}>
        Full name: {fullName}
        {"\n"}
        Description: {description}
        {"\n"}
        Language: {language}
        {"\n"}
        Stars: {stargazersCount}
        {"\n"}
        Forks: {forksCount}
        {"\n"}
        Reviews: {reviewCount}
        {"\n"}
        Rating: {ratingAverage}
      </Text>
    </View>
  );
};

export default RepositoryItem;
