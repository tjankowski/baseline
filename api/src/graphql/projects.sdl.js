export const schema = gql`
  type Project {
    id: String!
    name: String!
    isPrivate: Boolean!
    reviews: Review
    actions: Action
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    projects: [Project]
    project(id: String!): Project
  }

  input ProjectInput {
    name: String
    isPrivate: Boolean
    reviews: String
    actions: String
    updatedAt: DateTime
  }

  type Mutation {
    createProject(input: ProjectInput!): Project
    updateProject(id: String!, input: ProjectInput!): Project
    deleteProject(id: String!): Project
  }
`
