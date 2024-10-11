import { StyleSheet, View } from "react-native";
import { Route, Routes, Navigate } from "react-router-native";

import theme from "../theme";
import AppBar from "./AppBar";
import RepositoryList from "./RepositoryList";
import RepositoryPage from "./RepositoryList/RepositoryPage";
import CreateReview from "./CreateReview";
import MyReviews from "./MyReviews";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.lightGray,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/repository/:id" element={<RepositoryPage />} />
        <Route path="/create_review" element={<CreateReview />} />
        <Route path="/my_reviews" element={<MyReviews />} />
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
