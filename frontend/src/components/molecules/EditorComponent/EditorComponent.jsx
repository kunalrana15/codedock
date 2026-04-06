import Editor from "@monaco-editor/react";

export const EditorComponent = () => {
    return (
        <>
            <Editor 
             height={'80vh'}
             width={'100%'}
             defaultLanguage="javascript"
             theme="vs-dark"
             defaultValue="Welcome to the Playground"
             options={{
                fontSize: 18,
                fontFamily: 'monospace'
             }}
            />
        </>
    )
}