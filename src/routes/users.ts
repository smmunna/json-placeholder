import { Router } from 'express';
import { dataService } from '../services/dataService';

const router = Router();

router.get('/', (req, res) => {
    const users = dataService.getAllUsers();
    res.json(users);
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = dataService.getUserById(id);
    
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

router.post('/', (req, res) => {
    const newUser = dataService.createUser(req.body);
    res.status(201).json(newUser);
});

export default router; 