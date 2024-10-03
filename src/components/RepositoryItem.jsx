import { View, Text } from "react-native";

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
      <Text>
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
