import Project from 'src/components/Project'

export const QUERY = gql`
  query FIND_POST_BY_ID($id: String!) {
    project: project(id: $id) {
      id
      name
      isPrivate
      reviews
      actions
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Project not found</div>

export const Success = ({ project }) => {
  return <Project project={project} />
}
