import fs from 'fs/promises';
import uuid4 from 'uuid4';
import { REACT_PROJECT_COMMAND } from '../config/serverConfig.js';
import { execPromisified } from '../utils/execUtility.js'
import path from 'path';
import directoryTree from 'directory-tree';

export const createProjectService = async() => {
    // Create a unique idea and then insdie the peojects folder create a new folder with that for different users
        const projectId = uuid4();
    
        console.log('New Project id is:',projectId);
        await fs.mkdir(`./projects/${projectId}`);
    
        // After this call the npm create vite command in the newly folder in the projects folder to intialize react project
        const response = await execPromisified(REACT_PROJECT_COMMAND,
                                               {shell:'powershell.exe',
                                                cwd: `./projects/${projectId}`});
                                                
        return projectId;
}


export const getProjectTreeService = async (projectId) => {
    const projectPath = path.resolve(`./projects/${projectId}`);
    const tree = directoryTree(projectPath);

    return tree;
}