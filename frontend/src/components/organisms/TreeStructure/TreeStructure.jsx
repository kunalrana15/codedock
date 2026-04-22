import { useTreeStructureStore } from "../../../store/treeStructureStore"
import { useEffect, useState } from "react";
import { Tree } from "../../molecules/Tree/Tree";
import { useFileContextMenuStore } from "../../../store/fileContextMenuStore";
import { FileContextMenu } from "../../molecules/ContextMenu/FileContextMenu";

export const TreeStructure = () => {


    const { treeStructure,setTreeStructure } = useTreeStructureStore();
    const { file,
            isOpen: fileContextOpen,
            x: fileContextX,
            y: fileContextY } = useFileContextMenuStore();

    useEffect(() => {
        if(treeStructure) {
            console.log(treeStructure);
        } else {
            setTreeStructure();
        }
    },[setTreeStructure,treeStructure]);

    console.log("TREE STRUCTURE INSIDE:",treeStructure);

    return (
        <>
            {
                fileContextOpen && fileContextX && fileContextY && (
                    <FileContextMenu 
                     x={fileContextX}
                     y={fileContextY}
                     path={file}
                    />
                )
            }
            <Tree 
             fileFolderData={treeStructure} />
        </>
    )
}