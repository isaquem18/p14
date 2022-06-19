import { Router } from 'express';
import { v4 as uuid } from 'uuid';

const userRoutes = Router();

const users = [];

userRoutes.get('/', (req, res) => {
  return res.status(200).json(users);
});

userRoutes.post('/', (req, res) => {

  const { name, age } = req.body;

  const newUser = {
    id: uuid(),
    name,
    age
  };

  users.push(newUser);

  return res.status(201).json(newUser);
});

export { userRoutes };
