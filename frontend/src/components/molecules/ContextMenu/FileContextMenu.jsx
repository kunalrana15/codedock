import { useFileContextMenuStore } from "../../../store/fileContextMenuStore";
import { useEditorSocketStore } from "../../../store/editorSocketStore"
import './FileContextMenu.css'

export const FileContextMenu = ({
    x,
    y,
    path
}) => {

    const { setIsOpen } = useFileContextMenuStore();
    const { editorSocket } = useEditorSocketStore();

    function handleFileDelete(e) {
        e.preventDefault();
        console.log("Deleting File at:",path);
        editorSocket.emit("deleteFile",{pathToFileOrFolder:path});
    }

    return (
        <div
         onMouseLeave={() => {
            setIsOpen(false);
         }}
         style={{
            width: "120px",
            position: "fixed",
            left: x,
            top: y,
            border: "1.5px solid black"
         }} >

         <button
         className="fileContextButton"
         onClick={handleFileDelete} >
            Delete File
         </button>
         <button
         className="fileContextButton">
         Read File
         </button>
        </div>
    )
}