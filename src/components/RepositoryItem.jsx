import { View, Image, StyleSheet, Pressable } from "react-native";
import { useNavigate } from "react-router-dom";
import * as Linking from "expo-linking";
import Text from "./Text";
import theme from "../theme";

const RepositoryItem = ({ item, showButton }) => {
  const navigate = useNavigate();
  const {
    id,
    fullName,
    description,
    language,
    stargazersCount,
    forksCount,
    reviewCount,
    ratingAverage,
    ownerAvatarUrl,
    url,
  } = item;

  const roundCount = (count) => {
    if (count > 999) {
      const rounded = (count / 100 / 10.0).toFixed(1);
      return `${rounded}k`;
    }
    return count;
  };

  const openRepository = () => {
    navigate(`/repository/${id}`);
  };

  const toGitHub = () => {
    Linking.openURL(url);
  };

  return (
    <Pressable onPress={openRepository}>
      <View testID="repositoryItem" style={styles.item}>
        <View style={styles.main}>
          <Image style={styles.tinyLogo} source={{ uri: ownerAvatarUrl }} />
          <View style={styles.mainInfo}>
            <Text fontSize="subheading" color={"textPrimary"} fontWeight="bold">
              {fullName}
            </Text>
            <Text style={{ flexShrink: 1 }} color={"textSecondary"}>
              {description}
            </Text>
            <View style={styles.languageWrapper}>
              <Text
                style={styles.language}
                color={"white"}
                fontSize="subheading"
              >
                {language}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.detailsRow}>
          <View style={styles.detailItem}>
            <Text
              fontSize="subheading"
              color={"textPrimary"}
              fontWeight="bold"
              textAlign="center"
            >
              {roundCount(stargazersCount)}
            </Text>
            <Text color={"textSecondary"} textAlign="center">
              Stars
            </Text>
          </View>
          <View style={styles.detailItem}>
            <Text
              fontSize="subheading"
              color={"textPrimary"}
              fontWeight="bold"
              textAlign="center"
            >
              {roundCount(forksCount)}
            </Text>
            <Text color={"textSecondary"} textAlign="center">
              Forks
            </Text>
          </View>
          <View style={styles.detailItem}>
            <Text
              fontSize="subheading"
              color={"textPrimary"}
              fontWeight="bold"
              textAlign="center"
            >
              {roundCount(reviewCount)}
            </Text>
            <Text color={"textSecondary"} textAlign="center">
              Reviews
            </Text>
          </View>
          <View style={styles.detailItem}>
            <Text
              fontSize="subheading"
              color={"textPrimary"}
              fontWeight="bold"
              textAlign="center"
            >
              {roundCount(ratingAverage)}
            </Text>
            <Text color={"textSecondary"} textAlign="center">
              Rating
            </Text>
          </View>
        </View>
        {showButton && (
          <Pressable style={styles.button} onPress={toGitHub}>
            <Text
              color="white"
              fontWeight="bold"
              fontSize="subheading"
              textAlign="center"
            >
              Open in GitHub
            </Text>
          </Pressable>
        )}
      </View>
    </Pressable>
  );
};

export default RepositoryItem;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    padding: 15,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  main: {
    flexDirection: "row",
    gap: 15,
    padding: 5,
  },
  mainInfo: {
    flexDirection: "column",
    flex: 0.9,
    gap: 10,
    padding: 5,
  },
  languageWrapper: {
    flexDirection: "row",
  },
  language: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    flexGrow: 0,
    paddingVertical: 3,
    paddingHorizontal: 6,
    overflow: "hidden",
  },
  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  detailItem: {
    flexDirection: "column",
    justifyContent: "center",
  },
  button: {
    backgroundColor: theme.colors.primary,
    marginTop: 20,
    paddingHorizontal: 10,
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
  },
});
