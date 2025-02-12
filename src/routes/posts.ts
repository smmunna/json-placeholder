import { Router } from 'express';
import { dataService } from '../services/dataService';

const router = Router();

router.get('/', (req, res) => {
    const { userId } = req.query;
    
    if (userId) {
        const userIdNum = parseInt(userId as string);
        const posts = dataService.getPostsByUserId(userIdNum);
        res.json(posts);
    } else {
        const posts = dataService.getAllPosts();
        res.json(posts);
    }
});

router.get('/user/:userId', (req, res) => {
    const userId = parseInt(req.params.userId);
    const result = dataService.getUserPosts(userId);
    
    if (result.user) {
        res.json(result);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = dataService.getPostById(id);
    
    if (post) {
        res.json(post);
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
});

router.post('/', (req, res) => {
    const newPost = dataService.createPost(req.body);
    res.status(201).json(newPost);
});

export default router; 