import { useQuery } from "@apollo/client";

import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  const { loading, data } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    notifyOnNetworkStatusChange: true,
  });

  console.log("loading", loading);
  console.log("data", data);

  return { loading, data };
};

export default useRepositories;
