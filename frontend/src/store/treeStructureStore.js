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
        setTreeStructure: async () => {
            const id = get().projectId;
            const data = await queryClient.fetchQuery({
                queryKey: [`project-tree-${id}`],
                queryFn: () => getProjectTree({projectId:id}),
            });

            console.log(data);

            set({
                treeStructure: data
            })
        },
        setProjectId: (projectId) => {
            set({
                projectId: projectId
            })
        }
    }
})