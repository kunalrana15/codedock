import { Button } from 'antd'
import { useCreateProject } from "../hooks/apis/mutations/useCreateProject"


export const CreateProject = () => {

    const { createProjectMutation, isPending } = useCreateProject();

    async function handleCreateProject() {
        console.log('Going to trigger the api');
        try {
            await createProjectMutation();
            console.log('Now we Should redirect to the editor')
        } catch (error) {
            console.log('Error creating project:',error);
        }
    }

    return (
        <div>
            <Button
            onClick={handleCreateProject}
            >
                Create Playground
            </Button>
        </div>
    )
}