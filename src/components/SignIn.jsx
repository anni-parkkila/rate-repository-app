import { TextInput, Pressable, View, StyleSheet } from "react-native";
import { useFormik } from "formik";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {},
  input: {
    backgroundColor: "white",
    marginHorizontal: 20,
    marginTop: 20,
    paddingHorizontal: 10,
    height: 50,
    borderRadius: 5,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: theme.colors.darkGray,
  },
  button: {
    backgroundColor: theme.colors.primary,
    marginHorizontal: 20,
    marginTop: 20,
    paddingHorizontal: 10,
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
  },
});

const SignIn = () => {
  const initialValues = {
    username: "",
    password: "",
  };
  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
        style={styles.input}
      />
      <TextInput
        secureTextEntry="true"
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
        style={styles.input}
      />
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
