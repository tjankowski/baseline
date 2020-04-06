export const schema = gql`
  type Topic {
    id: String!
    name: String!
    description: String!
    labels: Label
    createdAt: DateTime!
    updatedAt: DateTime!
    ratings: Rating
    actions: Action
  }

  type Query {
    topics: [Topic]
  }

  input TopicInput {
    name: String
    description: String
    labels: String
    updatedAt: DateTime
    ratings: String
    actions: String
  }
`
