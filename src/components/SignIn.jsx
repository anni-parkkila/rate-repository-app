import { TextInput, Pressable, View, StyleSheet } from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 5,
  },
  input: {
    //backgroundColor: "white",
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

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const SignIn = () => {
  const initialValues = {
    username: "",
    password: "",
  };
  const onSubmit = (values) => {
    console.log("called?");
    console.log(values);
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
        secureTextEntry="true"
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
      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text
          color="white"
          fontWeight="bold"
          fontSize="subheading"
          textAlign="center"
        >
          Sign in
        </Text>
      </Pressable>
    </View>
  );
};

export default SignIn;
