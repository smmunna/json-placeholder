import fs from 'fs';
import path from 'path';
import { User, Post } from '../models/types';

const dbPath = path.join(__dirname, '../data/db.json');

interface Database {
    users: User[];
    posts: Post[];
}

export class DataService {
    private db: Database;

    constructor() {
        this.db = this.loadData();
    }

    private loadData(): Database {
        const data = fs.readFileSync(dbPath, 'utf-8');
        return JSON.parse(data);
    }

    private saveData(): void {
        fs.writeFileSync(dbPath, JSON.stringify(this.db, null, 2));
    }

    // Users
    getAllUsers(): User[] {
        return this.db.users;
    }

    getUserById(id: number): User | undefined {
        return this.db.users.find(user => user.id === id);
    }

    createUser(user: Omit<User, 'id'>): User {
        const newUser = {
            ...user,
            id: Math.max(...this.db.users.map(u => u.id)) + 1
        };
        this.db.users.push(newUser);
        this.saveData();
        return newUser;
    }

    // Posts
    getAllPosts(): Post[] {
        return this.db.posts;
    }

    getPostById(id: number): Post | undefined {
        return this.db.posts.find(post => post.id === id);
    }

    createPost(post: Omit<Post, 'id'>): Post {
        const newPost = {
            ...post,
            id: Math.max(...this.db.posts.map(p => p.id)) + 1
        };
        this.db.posts.push(newPost);
        this.saveData();
        return newPost;
    }

    getPostsByUserId(userId: number): Post[] {
        return this.db.posts.filter(post => post.userId === userId);
    }

    getUserPosts(userId: number): { user: User | undefined, posts: Post[] } {
        const user = this.getUserById(userId);
        const posts = this.getPostsByUserId(userId);
        return { user, posts };
    }
}

export const dataService = new DataService(); 