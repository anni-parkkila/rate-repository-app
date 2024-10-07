import { useMutation } from "@apollo/client";

import { SIGN_IN } from "../graphql/mutations";

const useSignIn = () => {
  const [authenticate, result] = useMutation(SIGN_IN, {
    onError: (error) => {
      console.log(error);
    },
  });

  const signIn = async ({ username, password }) => {
    const credentials = { username, password };
    authenticate({ variables: { credentials } });
  };

  return [signIn, result];
};

export default useSignIn;
