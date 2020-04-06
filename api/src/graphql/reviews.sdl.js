export const schema = gql`
  type Review {
    id: String!
    isPrivate: Boolean!
    project: Project!
    baseline: Baseline!
    ratings: Rating
    actions: Action
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    reviews: [Review]
  }

  input ReviewInput {
    isPrivate: Boolean
    project: String
    baseline: String
    ratings: String
    actions: String
    updatedAt: DateTime
  }
`
