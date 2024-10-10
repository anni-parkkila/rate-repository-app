import { TextInput, Pressable, View, StyleSheet } from "react-native";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import Text from "./Text";
import theme from "../theme";
import useCreateReview from "../hooks/useCreateReview";

const validationSchema = yup.object().shape({
  ownerName: yup.string().required("Repository owner is required"),
  repositoryName: yup.string().required("Repository name is required"),
  rating: yup
    .number()
    .integer()
    .min(0, "Rating must be 0 or more")
    .max(100, "Rating must be 100 or less")
    .required("Rating is required"),
  text: yup.string().optional(),
});

export const CreateReviewContainer = ({ onSubmit }) => {
  const initialValues = {
    ownerName: "",
    repositoryName: "",
    rating: "",
    text: "",
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
        value={formik.values.ownerName}
        onChangeText={formik.handleChange("ownerName")}
        style={[
          styles.input,
          formik.touched.ownerName && formik.errors.ownerName
            ? styles.error
            : styles.input,
        ]}
      />
      {formik.touched.ownerName && formik.errors.ownerName && (
        <Text color="textError">{formik.errors.ownerName}</Text>
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
        value={formik.values.rating}
        onChangeText={formik.handleChange("rating")}
        style={[
          styles.input,
          formik.touched.rating && formik.errors.rating
            ? styles.error
            : styles.input,
        ]}
      />
      {formik.touched.rating && formik.errors.rating && (
        <Text color="textError">{formik.errors.rating}</Text>
      )}
      <TextInput
        placeholder="Review text (optional)"
        value={formik.values.text}
        multiline={true}
        onChangeText={formik.handleChange("text")}
        style={[
          styles.input,
          formik.touched.text && formik.errors.text
            ? styles.error
            : styles.input,
        ]}
      />
      {formik.touched.text && formik.errors.text && (
        <Text color="textError">{formik.errors.text}</Text>
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
  const [createReview, result] = useCreateReview();

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text } = values;

    try {
      const data = await createReview({
        ownerName,
        repositoryName,
        rating,
        text,
      });
      if (data.createReview.repositoryId) {
        navigate(`/repository/${data.createReview.repositoryId}`);
      }
    } catch (e) {
      console.log("catch error", e);
    }
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
