# Git Notes App

A file-based notes application built using React, TypeScript, Node.js, and Express. The application reads notes from a Git repository, allows editing and creating notes, and automatically creates Git commits for saved changes.

This project was developed as part of the Documentation AI Product Engineer take-home assignment.

---

## Tech Stack

### Frontend
- React
- TypeScript
- Vite

### Backend
- Node.js
- Express
- TypeScript

### Libraries
- simple-git
- fast-glob
- gray-matter

---

## Features Implemented

- View notes as a folder tree
- Open any note
- Edit note content
- Save notes
- Automatic Git commits on save
- Create new notes
- Read and update `.noteindex.json`
- Basic link detection API
- File path validation for security

---

## Project Structure

```
notes-app/
│
├── client/
│
└── server/
    └── src
        ├── config
        ├── controllers
        ├── routes
        ├── services
        ├── types
        ├── utils
        ├── app.ts
        └── server.ts
```

---

## Installation

Clone both repositories.

### Notes Repository

```
git clone https://github.com/documentation-ai/notes-interview.git
```

### Application Repository

```
git clone <your-github-repository>
```

---

## Backend

```
cd server
npm install
npm run dev
```

Runs on

```
http://localhost:5000
```

---

## Frontend

```
cd client
npm install
npm run dev
```

Runs on

```
http://localhost:5173
```

---

## Notes

The backend expects the cloned `notes-interview` repository to be available locally.

Update the repository path inside

```
server/src/config/paths.ts
```

if necessary.

---

## Future Improvements

- Rename / Move notes
- Delete with Undo
- Conflict detection for concurrent edits
- Automatic link updates
- Improved Markdown rendering
