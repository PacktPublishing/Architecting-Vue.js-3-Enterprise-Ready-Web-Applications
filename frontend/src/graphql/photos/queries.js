import gql from "graphql-tag";

export const GET_PHOTOS = gql`
  query photos(
    $sort: [String] = []
    $pagination: PaginationArg = {}
    $filters: PhotoFiltersInput
    $publicationState: PublicationState = LIVE
  ) {
    photos(
      filters: $filters
      pagination: $pagination
      sort: $sort
      publicationState: $publicationState
    ) {
      data {
        id
        attributes {
          title
        }
      }
    }
  }
`;
