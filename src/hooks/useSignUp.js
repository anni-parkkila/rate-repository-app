import { useMutation } from "@apollo/client";
import { SIGN_UP } from "../graphql/mutations";

const useSignUp = () => {
  const [createUser, result] = useMutation(SIGN_UP);

  const signUp = async ({ username, password }) => {
    const user = { username, password };
    const { data } = await createUser({ variables: { user } });
    return data;
  };

  return [signUp, result];
};

export default useSignUp;
