import { TextInput, Pressable, View, StyleSheet } from "react-native";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import Text from "./Text";
import theme from "../theme";
import useSignUp from "../hooks/useSignUp";
import useSignIn from "../hooks/useSignIn";

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, "Username must be at least 5 characters long")
    .max(30, "Username must be 30 characters or less long")
    .required("Username is required"),
  password: yup
    .string()
    .min(5, "Password must be at least 5 characters long")
    .max(50, "Password must be 50 characters or less long")
    .required("Password is required"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Password confirm is required"),
});

export const SignUpContainer = ({ onSubmit }) => {
  const initialValues = {
    username: "",
    password: "",
    passwordConfirmation: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
        style={[
          styles.input,
          formik.touched.username && formik.errors.username
            ? styles.error
            : styles.input,
        ]}
      />
      {formik.touched.username && formik.errors.username && (
        <Text color="textError">{formik.errors.username}</Text>
      )}
      <TextInput
        secureTextEntry={true}
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
        style={[
          styles.input,
          formik.touched.password && formik.errors.password
            ? styles.error
            : styles.input,
        ]}
      />
      {formik.touched.password && formik.errors.password && (
        <Text color="textError">{formik.errors.password}</Text>
      )}
      <TextInput
        secureTextEntry={true}
        placeholder="Password confirmation"
        value={formik.values.passwordConfirmation}
        onChangeText={formik.handleChange("passwordConfirmation")}
        style={[
          styles.input,
          formik.touched.passwordConfirmation &&
          formik.errors.passwordConfirmation
            ? styles.error
            : styles.input,
        ]}
      />
      {formik.touched.passwordConfirmation &&
        formik.errors.passwordConfirmation && (
          <Text color="textError">{formik.errors.passwordConfirmation}</Text>
        )}
      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text
          color="white"
          fontWeight="bold"
          fontSize="subheading"
          textAlign="center"
        >
          Sign up
        </Text>
      </Pressable>
    </View>
  );
};

const SignUp = () => {
  const navigate = useNavigate();
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signUp({ username, password });
      await signIn({ username, password });
      navigate("/");
    } catch (e) {
      console.log("catch error", e);
    }
  };

  return <SignUpContainer onSubmit={onSubmit} />;
};

export default SignUp;

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
