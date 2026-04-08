import { create } from 'zustand';
import { useProjectTree } from '../hooks/apis/queries/useProjectTree';
import { QueryClient } from '@tanstack/react-query';
import { getProjectTree } from '../apis/project';

export const useTreeStructureStore = create((set,get) => {


    const queryClient = new QueryClient();

    // const { isLoading,isError,treeStructure,error } = useProjectTree();

    return {
        projectId: null,
        treeStructure: null,
        setTreeStructure: async (projectId) => {
            const id = get().projectId;
            const data = await queryClient.fetchQuery({
                queryKey: [`project-tree-${id}`],
                queryFn: () => getProjectTree({projectId}),
            });

            console.log(data);
        },
        setProjectId: (projectId) => {
            set({
                projectId: projectId
            })
        }
    }
})