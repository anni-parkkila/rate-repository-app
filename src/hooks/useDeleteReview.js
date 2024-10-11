import { useMutation } from "@apollo/client";
import { DELETE_REVIEW } from "../graphql/mutations";
import { GET_CURRENT_USER } from "../graphql/queries";

const useDeleteReview = () => {
  const [mutate, result] = useMutation(DELETE_REVIEW, {
    refetchQueries: [GET_CURRENT_USER],
  });

  const deleteReview = async (deleteReviewId) => {
    const { data } = await mutate({ variables: { deleteReviewId } });
    console.log("delete data", data);
    return data;
  };

  return [deleteReview, result];
};

export default useDeleteReview;
