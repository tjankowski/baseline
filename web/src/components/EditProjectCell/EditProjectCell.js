import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import ProjectForm from 'src/components/ProjectForm'

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
const UPDATE_POST_MUTATION = gql`
  mutation UpdateProjectMutation($id: String!, $input: ProjectInput!) {
    updateProject(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ project }) => {
  const [updateProject, { loading, error }] = useMutation(UPDATE_POST_MUTATION, {
    onCompleted: () => {
      navigate(routes.projects())
      location.reload()
    },
  })

  const onSave = (input, id) => {
    updateProject({ variables: { id, input } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">Edit Project {project.id}</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <ProjectForm project={project} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
