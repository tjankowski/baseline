export const schema = gql`
  type Baseline {
    id: String!
    name: String!
    isPrivate: Boolean!
    reviews: Review
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    baselines: [Baseline]
  }

  input BaselineInput {
    name: String
    isPrivate: Boolean
    reviews: String
    updatedAt: DateTime
  }
`
