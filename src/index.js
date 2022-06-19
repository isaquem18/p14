import express from 'express';
import { userRoutes } from './routes/users/index.js';

const server = express();
server.use(express.json());

//routes 
server.use('/users', userRoutes);

server.get('/', (req, res) => res.status(200).json({ message: "/ route is working." }));
 
server.listen(3000, () => console.log('server started!'));
