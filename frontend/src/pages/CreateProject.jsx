import { Row,Col, Button, Flex } from 'antd'
import { useCreateProject } from "../hooks/apis/mutations/useCreateProject"
import { useNavigate } from 'react-router-dom';


export const CreateProject = () => {

    const { createProjectMutation } = useCreateProject();
    const navigate = useNavigate();

    async function handleCreateProject() {
        console.log('Going to trigger the api');
        try {
            const response = await createProjectMutation();
            navigate(`/project/${response.data}`);
            console.log('Now we Should redirect to the editor')
        } catch (error) {
            console.log('Error creating project:',error);
        }
    }

    return (
        <Row>
            <Col span={24} >
              <Flex justify='center' align='center'>
                <Button
                 type='primary'
                 onClick={handleCreateProject} >
                    Create Playground
                </Button>
              </Flex>
            </Col>
        </Row>
    )
}