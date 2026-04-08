import { useParams } from "react-router-dom"
import { EditorComponent } from "../components/molecules/EditorComponent/EditorComponent";
import { EditorButton } from "../components/atoms/EditorButton/EditorButton";
import { TreeStructure } from "../components/organisms/TreeStructure/TreeStructure";

export const ProjectPlayground = () => {

    const {projectId} =  useParams();

    return (
        <>
           Project Id: <p> {projectId} </p>
           <EditorComponent />
           <EditorButton />
           <TreeStructure />
        </>
    )
}