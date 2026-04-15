import Editor from "@monaco-editor/react";
import { useEditorSocketStore } from "../../../store/editorSocketStore";
import { useActiveFileTabStore } from "../../../store/activeFileTabStore"
import { useEffect } from "react";

export const EditorComponent = () => {

    const { editorSocket } = useEditorSocketStore();
    const { activeFileTab,setActiveFileTab } = useActiveFileTabStore();

    console.log("EDITOR COMPOENTN:",editorSocket);
    
    useEffect(() => {
        if(!editorSocket) return ;

        const handleReadFile = (data) => {
            console.log("Data Received from socket:",data);
            setActiveFileTab(data.path,data.data,undefined);
        }

        // Attach the listner
        editorSocket.on("readFileSuccess",handleReadFile);

        // clean up state
        return () => {
            console.log(activeFileTab);
            editorSocket.off("readFileSuccess",handleReadFile);
        }
    },[editorSocket,setActiveFileTab]);

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

             value={ activeFileTab?.value || "// Welceom to playground"  }
            />
        </>
    )
}