import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import ProjectForm from 'src/components/ProjectForm'

const CREATE_POST_MUTATION = gql`
  mutation CreateProjectMutation($input: ProjectInput!) {
    createProject(input: $input) {
      id
    }
  }
`

const NewProject = () => {
  const [createProject, { loading, error }] = useMutation(CREATE_POST_MUTATION, {
    onCompleted: () => {
      navigate(routes.projects())
      location.reload()
    },
  })

  const onSave = (input) => {
    createProject({ variables: { input } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">New Project</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <ProjectForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewProject
