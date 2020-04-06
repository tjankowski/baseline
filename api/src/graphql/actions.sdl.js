export const schema = gql`
  type Action {
    id: String!
    review: Review!
    topic: Topic!
    isDone: Boolean!
    name: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    project: Project
  }

  type Query {
    actions: [Action]
  }

  input ActionInput {
    review: String
    topic: String
    isDone: Boolean
    name: String
    updatedAt: DateTime
    project: String
  }
`
