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
