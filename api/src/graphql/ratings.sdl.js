export const schema = gql`
  type Rating {
    id: String!
    review: Review!
    topic: Topic!
    value: RatingValue
    notes: String
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    ratings: [Rating]
  }

  input RatingInput {
    review: String
    topic: String
    value: RatingValue
    notes: String
    updatedAt: DateTime
  }

  enum RatingValue {
    Happy
    Acceptable
    Unhappy
  }
`
