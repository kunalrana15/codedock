import { create } from 'zustand';
import { useActiveFileTabStore } from './activeFileTabStore'

export const useEditorSocketStore = create((set) => ({
    editorSocket: null,
    setEditorSocket: (incomingSocket) => {

        const activeFileTabSetter = useActiveFileTabStore.getState().setActiveFileTab;

        incomingSocket?.on("readFileSuccess",(data) => {
            console.log("READ FILE SUCCESS:",data);
            activeFileTabSetter(data.path,data.data);
        });

        incomingSocket?.on("writeFileSuccess",(data) => {
            console.log("Write file sucess:",data);           
        })

        set({
            editorSocket: incomingSocket
        });
    }
}));