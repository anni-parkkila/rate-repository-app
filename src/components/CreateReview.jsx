import { TextInput, Pressable, View, StyleSheet } from "react-native";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import Text from "./Text";
import theme from "../theme";

const validationSchema = yup.object().shape({
  repositoryOwner: yup.string().required("Repository owner is required"),
  repositoryName: yup.string().required("Repository name is required"),
  repositoryRating: yup
    .number()
    .min(0, "Rating must be 0 or more")
    .max(100, "Rating must be 100 or less")
    .required("Rating is required"),
  repositoryReview: yup.string().optional(),
});

export const CreateReviewContainer = ({ onSubmit }) => {
  const initialValues = {
    repositoryOwner: "",
    repositoryName: "",
    repositoryRating: "",
    repositoryReview: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Repository owner name"
        value={formik.values.repositoryOwner}
        onChangeText={formik.handleChange("repositoryOwner")}
        style={[
          styles.input,
          formik.touched.repositoryOwner && formik.errors.repositoryOwner
            ? styles.error
            : styles.input,
        ]}
      />
      {formik.touched.repositoryOwner && formik.errors.repositoryOwner && (
        <Text color="textError">{formik.errors.repositoryOwner}</Text>
      )}
      <TextInput
        placeholder="Repository name"
        value={formik.values.repositoryName}
        onChangeText={formik.handleChange("repositoryName")}
        style={[
          styles.input,
          formik.touched.repositoryName && formik.errors.repositoryName
            ? styles.error
            : styles.input,
        ]}
      />
      {formik.touched.repositoryName && formik.errors.repositoryName && (
        <Text color="textError">{formik.errors.repositoryName}</Text>
      )}
      <TextInput
        placeholder="Rating between 0 and 100"
        value={formik.values.repositoryRating}
        onChangeText={formik.handleChange("repositoryRating")}
        style={[
          styles.input,
          formik.touched.repositoryRating && formik.errors.repositoryRating
            ? styles.error
            : styles.input,
        ]}
      />
      {formik.touched.repositoryRating && formik.errors.repositoryRating && (
        <Text color="textError">{formik.errors.repositoryRating}</Text>
      )}
      <TextInput
        placeholder="Review text (optional)"
        value={formik.values.repositoryReview}
        multiline={true}
        onChangeText={formik.handleChange("repositoryReview")}
        style={[
          styles.input,
          formik.touched.repositoryReview && formik.errors.repositoryReview
            ? styles.error
            : styles.input,
        ]}
      />
      {formik.touched.repositoryReview && formik.errors.repositoryReview && (
        <Text color="textError">{formik.errors.repositoryReview}</Text>
      )}
      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text
          color="white"
          fontWeight="bold"
          fontSize="subheading"
          textAlign="center"
        >
          Create a review
        </Text>
      </Pressable>
    </View>
  );
};

const CreateReview = () => {
  const navigate = useNavigate();
  //const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    // const { repositoryOwner, repositoryName } = values;

    // try {
    //   await signIn({ repositoryOwner, repositoryName });
    navigate("/");
    // } catch (e) {
    //   console.log("catch error", e);
    // }
    console.log("values", values);
  };

  return <CreateReviewContainer onSubmit={onSubmit} />;
};

export default CreateReview;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 5,
  },
  input: {
    backgroundColor: "white",
    marginTop: 20,
    marginBottom: 5,
    paddingHorizontal: 10,
    height: 50,
    borderRadius: 5,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: theme.colors.darkGray,
  },
  error: {
    borderColor: theme.colors.textError,
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
