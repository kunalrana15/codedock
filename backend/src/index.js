import express from 'express';
import cors from 'cors';
import { Server } from "socket.io";
import apiRouter from './routes/index.js';
import { PORT } from './config/serverConfig.js';
import { createServer } from "http";

const app = express();
const server = createServer(app);
const io = new Server(server);

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


server.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
});

