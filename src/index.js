import express from 'express';
import 'dotenv/config'
import cors from 'cors';
import { userRoutes } from './routes/users/index.js';

const PORT = process.env.PORT || 3000;

const server = express();

server.use(cors());
server.use(express.json());

//routes 
server.use('/users', userRoutes);

server.get('/', (req, res) => res.status(200).json({ message: "/ route is working." }));
 
server.listen(PORT, () => console.log('server started!'));
