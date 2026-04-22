import { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { FileIcon } from "../../atoms/FileIcon/FileIcon";
import { useEditorSocketStore } from "../../../store/editorSocketStore";
import { useFileContextMenuStore } from "../../../store/fileContextMenuStore";

export const Tree = ({
    fileFolderData
}) => {
 
    const [visbility,setVisibility] = useState({});

    const { editorSocket } = useEditorSocketStore();

    const {
        setFile,
        setIsOpen: setFileContextMenuOpen,
        setX: setFileContextMenuX,
        setY: setFileContextMenuY
    } = useFileContextMenuStore();

    function toggleVisibility(name){
        setVisibility({
            ...visbility,
            [name]: !visbility[name]
        })
    }

    function handleDoubleClick(fileFolderData){
        console.log("Double Clicked:",fileFolderData)
        editorSocket.emit("readFile",{
            pathToFileOrFolder: fileFolderData.path
        })
    }

    function computeExtension(fileFolderData) {
        const names = fileFolderData.name.split(".");
        return names[names.length-1];
    }

    function handleContextMenuForFiles(e,path) {
        e.preventDefault();
        console.log("Right Clicked on",path);
        setFile(path);
        setFileContextMenuX(e.clientX);
        setFileContextMenuY(e.clientY);
        setFileContextMenuOpen(true);
    } 

    return (
       ( fileFolderData && <div
         style={{
            paddingLeft: '15px',
            color: 'white'
         }} >
         {
            fileFolderData.children /*If the current node is a folder */ ? (
                /**If the current node is a folder return it as a button */
                <button
                 onClick={() => toggleVisibility(fileFolderData.name)}
                 style={{
                    border: 'none',
                    cursor: 'pointer',
                    outline: 'none',
                    color: 'white',
                    backgroundColor: "transparent",
                    paddingTop: '15px',
                    fontSize: '16px'
                 }} >
                    { visbility[fileFolderData.name] ? <IoIosArrowDown /> : <IoIosArrowForward /> }
                    { fileFolderData.name }
                </button>
            ) : (
                /** If current node is not a file i.e. File, render it as a file */
                <div style={{ display: 'flex', alignItems: 'center' }} >
                    <FileIcon extension={ computeExtension(fileFolderData) } />
                    <p
                    style={{
                        paddingTop: "10px",
                        fontSize: "15px",
                        cursor: "pointer",
                        backgroundColor: "black",
                        marginLeft: "5px"
                    }}
                    onContextMenu={(e) => handleContextMenuForFiles(e,fileFolderData.path)}
                    onDoubleClick={() => handleDoubleClick(fileFolderData)}
                    >
                        { fileFolderData.name }
                    </p> 
                </div>
            )}

            {visbility[fileFolderData.name] && fileFolderData.children && (
                fileFolderData.children.map((child) => (
                    <Tree
                     fileFolderData={child}
                     key={child.name} />
                ))
            )}

        </div>)
    )
}