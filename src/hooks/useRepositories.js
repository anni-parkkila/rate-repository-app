import { useQuery } from "@apollo/client";

import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = (searchKeyword, { orderBy, orderDirection }) => {
  const { loading, data } = useQuery(GET_REPOSITORIES, {
    variables: { searchKeyword, orderBy, orderDirection },
    fetchPolicy: "cache-and-network",
    notifyOnNetworkStatusChange: true,
  });

  console.log("loading", loading);
  console.log("data", data);

  return { loading, data };
};

export default useRepositories;
