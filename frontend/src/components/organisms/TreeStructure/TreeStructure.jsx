import { useTreeStructureStore } from "../../../store/treeStructureStore"
import { useEffect } from "react";
import { Tree } from "../../molecules/Tree/Tree";

export const TreeStructure = () => {


    const { treeStructure,setTreeStructure } = useTreeStructureStore();


    useEffect(() => {
        if(treeStructure) {
            console.log(treeStructure);
        } else {
            setTreeStructure();
        }
    },[setTreeStructure,treeStructure]);

    console.log("TREE STRUCTURE INSIDE:",treeStructure);

    return (
        <div>
            <h1>Str</h1>
            <Tree 
             fileFolderData={treeStructure} />
        </div>
    )
}