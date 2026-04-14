import { useParams } from "react-router-dom"
import { EditorComponent } from "../components/molecules/EditorComponent/EditorComponent";
import { EditorButton } from "../components/atoms/EditorButton/EditorButton";
import { TreeStructure } from "../components/organisms/TreeStructure/TreeStructure";
import { useEffect } from "react";
import { useTreeStructureStore } from "../store/treeStructureStore";
import { useEditorSocketStore } from "../store/editorSocketStore";
import { io } from 'socket.io-client'

export const ProjectPlayground = () => {

    const {projectId: projectIdFromUrl} =  useParams();
    const { setProjectId,projectId } = useTreeStructureStore();

    const { setEditorSocket } = useEditorSocketStore();

    useEffect(() => {
        const editorSocketConnection = io("http://localhost:5000/editor",{
            query: {
                projectId: projectIdFromUrl
            }
        });
        setEditorSocket(editorSocketConnection);
        setProjectId(projectIdFromUrl)
    },[]);

    return (
        <>
           Project Id: <p> {projectIdFromUrl} </p>
           { projectId && (
            <div
             style={{
                backgroundColor: '#333254',
                paddingRight: '10px',
                paddingTop: '0.3vh',
                minWidth: '250px',
                maxWidth: '25%',
                height: '99.7vh',
                overflow: 'auto'
             }} >
              <TreeStructure />
           </div>) }
           <EditorComponent />
           <EditorButton />
        </>
    )
}