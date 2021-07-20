# Post-it Board

## Overview
A simple post-it board that allows users to create, view, and manage virtual post-it notes. An efficient platform for users to organize their thoughts, ideas, and tasks in a digital post-it format.

## Quick Look
| ![Post-it Board](./screenshots/post-it-board.png?raw=true) | 
|:----------------------------------------------------------:| 
|                      *Post-it Board*                       |

## Features
- Create new post-it notes by adding titles and content to capture ideas.

- An intuitive interface to view and organize post-it notes, facilitating easy access and navigation.

- Update and delete post-it notes as needed, keeping the board clutter-free and up-to-date.

## Installation
1. Install dependencies for the server (Express.js):
```
cd backend
npm install
```

2. Create a `.env` file in the `backend` directory:
```
cp .env.example .env
```

3. Configure your database settings in the `.env` file:
```
DB_DATABASE=your_db_name
DB_USERNAME=your_db_username
DB_PASSWORD=your_db_password
```

4.Install dependencies for the client (Vue.js)::
```
cd frontend
npm install
```

5. Start the server and client:
```
# In the server directory
npm start

# In the client directory
npm run serve
```

7. Open your browser and visit http://localhost:8080 to access the Post-It Board.
