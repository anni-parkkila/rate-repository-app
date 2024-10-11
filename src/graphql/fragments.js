import { gql } from "@apollo/client";

export const REPOSITORY_DETAILS = gql`
  fragment RepositoryDetails on Repository {
    description
    forksCount
    fullName
    id
    language
    name
    ownerAvatarUrl
    ratingAverage
    reviewCount
    stargazersCount
  }
`;

export const REVIEW_DETAILS = gql`
  fragment ReviewDetails on Review {
    id
    text
    rating
    createdAt
    user {
      id
      username
    }
    repository {
      id
      fullName
    }
  }
`;
