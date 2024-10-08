import { useQuery } from "@apollo/client";

import { GET_REPOSITORY_INFO } from "../graphql/queries";

const useRepository = ({ id }) => {
  console.log("id", id);
  const { loading, data } = useQuery(GET_REPOSITORY_INFO, {
    variables: { id },
    fetchPolicy: "cache-and-network",
    notifyOnNetworkStatusChange: true,
  });
  console.log("here");
  console.log("loading", loading);

  return { loading, data };
};

export default useRepository;
