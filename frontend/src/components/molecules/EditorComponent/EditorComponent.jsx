import Editor from "@monaco-editor/react";
import { useActiveFileTabStore } from "../../../store/activeFileTabStore";
import { useEditorSocketStore } from "../../../store/editorSocketStore";

export const EditorComponent = () => {

    let timerId=null;
    const { activeFileTab } = useActiveFileTabStore();
    const { editorSocket } = useEditorSocketStore();

    function handleChange(value) {

        // Implement debouncing
        // Clear old times
        if(timerId !== null){
            clearTimeout(timerId);
        }
        // set the new timer
        timerId = setTimeout(() => {
            const editorContent = value;
            console.log("Sending write file event")
            editorSocket.emit("writeFile",{
                data: editorContent,
                pathToFileOrFolder: activeFileTab.path
            })
        },2000);

        

    }

    return (
        <>
            
            <Editor 
             height={'80vh'}
             width={'100%'}
             defaultLanguage={undefined}
             theme="vs-dark"
             defaultValue="Welcome to the Playground"
             options={{
                fontSize: 18,
                fontFamily: 'monospace'
             }}
             value={ activeFileTab?.value || "// Welcome to playground"  }
             onChange={handleChange}
            />
        </>
    )
}