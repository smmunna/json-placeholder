```markdown:README.md
# JSON Server with TypeScript

A RESTful API server built with Node.js, Express, and TypeScript that serves mock data similar to JSONPlaceholder. The server uses a local `db.json` file as its database.

## Features

- 🚀 RESTful API endpoints for Users and Posts
- 📘 TypeScript implementation
- 💾 Local JSON file database (`db.json`)
- 🔍 Query support for filtering posts by user
- 🔄 Auto-generated IDs for new records
- 📊 100 sample records for both users and posts
- 🔁 Hot reload in development

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd json-server-ts
```

2. Install dependencies:
```bash
npm install
```

3. Generate sample data:
```bash
npm run generate-data
```

4. Start the development server:
```bash
npm run dev
```

The server will be running at `http://localhost:3000`

## API Documentation

### Users Endpoints

#### 1. Get All Users
```http
GET /api/users
```
Response: Array of user objects

#### 2. Get User by ID
```http
GET /api/users/:id
```
Example: `GET /api/users/1`
Response: Single user object or 404 if not found

#### 3. Create New User
```http
POST /api/users
```
Request Body:
```json
{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "1-234-567-8900",
    "website": "www.johndoe.com",
    "company": {
        "name": "Tech Corp",
        "catchPhrase": "Leading the digital transformation",
        "bs": "innovate solutions"
    }
}
```
Response: Created user object with ID

### Posts Endpoints

#### 1. Get All Posts
```http
GET /api/posts
```
Response: Array of post objects

#### 2. Get Post by ID
```http
GET /api/posts/:id
```
Example: `GET /api/posts/1`
Response: Single post object or 404 if not found

#### 3. Get Posts by User ID
```http
GET /api/posts?userId=1
```
Response: Array of posts for specified user

#### 4. Get User with Their Posts
```http
GET /api/posts/user/:userId
```
Example: `GET /api/posts/user/1`
Response: Object containing user details and their posts

#### 5. Create New Post
```http
POST /api/posts
```
Request Body:
```json
{
    "userId": 1,
    "title": "New Post Title",
    "body": "This is the content of the post"
}
```
Response: Created post object with ID

## Data Models

### User Model
```typescript
interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}
```

### Post Model
```typescript
interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
}
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm start` - Run the production server
- `npm run build` - Build the TypeScript project
- `npm run generate-data` - Generate new sample data

## Project Structure
```
json-server-ts/
├── src/
│   ├── data/
│   │   └── db.json          # Database file
│   ├── models/
│   │   └── types.ts         # TypeScript interfaces
│   ├── routes/
│   │   ├── posts.ts         # Post routes
│   │   └── users.ts         # User routes
│   ├── services/
│   │   └── dataService.ts   # Data handling service
│   ├── scripts/
│   │   └── generateData.ts  # Sample data generator
│   └── index.ts             # Main application file
├── tsconfig.json
└── package.json
```

## Error Responses

- `404` - Resource not found
- `201` - Resource created successfully
- `200` - Successful GET request

## Development

The server uses a local `db.json` file as the database. All changes (creating new records) are automatically saved to this file. IDs for new records are automatically generated.

To reset the database with fresh sample data, run:
```bash
npm run generate-data
```

## Technologies Used

- Node.js
- Express
- TypeScript
- Nodemon (for development)
```

This README provides:
1. Clear project description and features
2. Step-by-step installation guide
3. Detailed API documentation with examples
4. Data models and structure
5. Available scripts and their purposes
6. Project structure overview
7. Error handling information
8. Development guidelines
