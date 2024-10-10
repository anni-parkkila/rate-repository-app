import { View, StyleSheet } from "react-native";
import { format, parseISO } from "date-fns";
import Text from "../Text";
import theme from "../../theme";

const ReviewItem = ({ review, showUsername, showRepositoryName }) => {
  const { rating, user, createdAt, text, repository } = review;
  const date = format(parseISO(createdAt), "dd.MM.yyyy");
  return (
    <View style={styles.container}>
      <View style={styles.rating}>
        <Text fontSize="subheading" color="primary">
          {rating}
        </Text>
      </View>
      <View style={styles.review}>
        {showUsername && (
          <Text fontSize="subheading" color="textPrimary" fontWeight="bold">
            {user.username}
          </Text>
        )}
        {showRepositoryName && (
          <Text fontSize="subheading" color="textPrimary" fontWeight="bold">
            {repository.fullName}
          </Text>
        )}
        <Text>{date}</Text>
        <Text>{text}</Text>
      </View>
    </View>
  );
};

export default ReviewItem;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
    backgroundColor: "white",
    padding: 15,
    marginTop: 10,
  },
  rating: {
    marginTop: 7,
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
    flexShrink: 1,
    paddingVertical: 3,
    overflow: "hidden",
  },
  item: {
    padding: 15,
    marginTop: 10,
  },
});
