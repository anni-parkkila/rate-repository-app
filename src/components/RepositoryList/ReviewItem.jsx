import { View, Pressable, StyleSheet, Alert } from "react-native";
import { useNavigate } from "react-router-dom";
import { format, parseISO } from "date-fns";
import useDeleteReview from "../../hooks/useDeleteReview";
import Text from "../Text";
import theme from "../../theme";

const ReviewItem = ({ review, showUsername, showRepositoryName }) => {
  const navigate = useNavigate();
  const [deleteReview] = useDeleteReview();
  const { id, rating, user, createdAt, text, repository } = review;
  const date = format(parseISO(createdAt), "dd.MM.yyyy");

  const onDelete = async (id) => {
    console.log("id???", id);
    try {
      await deleteReview(id);
      console.log("id taas", id);
    } catch (e) {
      console.log("catch error", e);
    }
  };

  const handleDeleteReview = (id) => {
    Alert.alert(
      "Delete review",
      "Are you sure you want to delete this review?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "Delete", onPress: () => onDelete(id) },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.reviewContainer}>
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
      {showRepositoryName && (
        <View style={styles.buttonRow}>
          <Pressable
            style={styles.viewButton}
            onPress={() => navigate(`/repository/${repository.id}`)}
          >
            <Text
              color="white"
              fontWeight="bold"
              fontSize="subheading"
              textAlign="center"
            >
              View repository
            </Text>
          </Pressable>
          <Pressable
            style={styles.deleteButton}
            onPress={() => handleDeleteReview(id)}
          >
            <Text
              color="white"
              fontWeight="bold"
              fontSize="subheading"
              textAlign="center"
            >
              Delete review
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default ReviewItem;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    padding: 15,
    marginTop: 10,
  },
  reviewContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
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
  buttonRow: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    gap: 20,
    justifyContent: "center",
  },
  viewButton: {
    flexGrow: 1,
    paddingHorizontal: 10,
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    backgroundColor: theme.colors.primary,
  },
  deleteButton: {
    flexGrow: 1,
    paddingHorizontal: 10,
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    backgroundColor: theme.colors.textError,
  },
});
