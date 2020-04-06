export const schema = gql`
  type Label {
    id: String!
    name: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    topic: Topic
  }

  type Query {
    labels: [Label]
  }

  input LabelInput {
    name: String
    updatedAt: DateTime
    topic: String
  }
`
