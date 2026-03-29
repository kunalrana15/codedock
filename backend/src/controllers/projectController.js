import util from 'util';
import child_process from 'child_process';
import fs from 'fs/promises';
import uuid4 from 'uuid4';

const execPromisified = util.promisify(child_process.exec);

export const createProjectController = async(req,res) => {

    // Create a unique idea and then insdie the peojects folder create a new folder with that for different users
    const projectId = uuid4();

    console.log('New Project id is:',projectId);
    await fs.mkdir(`./projects/${projectId}`);

    // After this call the npm create vite command in the newly folder in the projects folder to intialize react project
    const response = await execPromisified('npm create vite@latest sandbox -- --template',
                                           {shell:'powershell.exe',
                                            cwd: `./projects/${projectId}`});

    return res.json({ message: 'Project created' });
    
}