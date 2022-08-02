export const GET_PINS = gql`
  mutation getPins($size: Int, $skip: Int, $filters: PinFiltersInput) {
    getPins(size: $size, skip: $skip, filters: $filters) {
      id
      title
      url
    }
  }
`;
