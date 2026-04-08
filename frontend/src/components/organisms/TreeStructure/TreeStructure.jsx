import { useParams } from "react-router-dom";
import { useTreeStructureStore } from "../../../store/treeStructureStore"
import { useEffect } from "react";

export const TreeStructure = () => {


    const { treeStructure,setTreeStructure } = useTreeStructureStore();

    const { projectId } = useParams();

    useEffect(() => {
        if(treeStructure) {
            console.log(treeStructure);
        } else {
            setTreeStructure(projectId);
        }
    },[projectId,setTreeStructure]);

    return (
        <div>
            <h1>Str</h1>
        </div>
    )
}