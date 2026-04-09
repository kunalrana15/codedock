import { useParams } from "react-router-dom"
import { EditorComponent } from "../components/molecules/EditorComponent/EditorComponent";
import { EditorButton } from "../components/atoms/EditorButton/EditorButton";
import { TreeStructure } from "../components/organisms/TreeStructure/TreeStructure";
import { useEffect } from "react";
import { useTreeStructureStore } from "../store/treeStructureStore";

export const ProjectPlayground = () => {

    const {projectId: projectIdFromUrl} =  useParams();
    const { setProjectId,projectId } = useTreeStructureStore();

    useEffect(() => {
        setProjectId(projectIdFromUrl)
    },[]);

    return (
        <>
           Project Id: <p> {projectIdFromUrl} </p>
           { projectId && <TreeStructure /> }
           <EditorComponent />
           <EditorButton />
        </>
    )
}