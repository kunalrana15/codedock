import express from 'express';
import cors from 'cors';
import { Server } from "socket.io";
import apiRouter from './routes/index.js';
import { PORT } from './config/serverConfig.js';
import { createServer } from "http";
import chokidar from 'chokidar';
import path from 'path';
import { handleEditorSocketEvents } from './sockerHandlers/editorHandler.js';

const app = express();
const server = createServer(app);
const io = new Server(server,{
    cors: {
        origin: "*",
        methods: ['GET','POST']
    }
});

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.use('/api',apiRouter);

app.get('/ping',(req,res) => {
    return res.json({message: 'PONG'});
});


io.on("connection",(socket) => {
    console.log("User Connected");
})


const editorNamespace = io.of('/editor');

editorNamespace.on('connection',(socket) => {
   
    console.log("Editor Connected");

    // somehow we will get the projectId from frontend
    const queryParams = socket.handshake.query;
    let projectId = queryParams['projectId'];
    console.log("Project ID is:",projectId);
    

    if(projectId) {
        var watcher = chokidar.watch(`./projects/${projectId}`,{
            ignored: (path) => path.includes("node_modules"),
            persistent: true, /** Keep the watcher in running state till the time app is running */
            awaitWriteFinish: {
                stabilityThreshold: 2000 /** Ensures Stability of files before triggering events */
            },
            ignoreInitial: true
        });

        watcher.on("all",(event,path) => {
            console.log(event,path);
        })
    }
    
    handleEditorSocketEvents(socket);

    socket.on("disconnect",async () => {
        await watcher.close();
        console.log("Editor Disconnected");
    })
});
 
server.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
});

