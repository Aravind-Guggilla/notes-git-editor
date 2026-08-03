React + TypeScript
        │
        │ Axios
        ▼
Node + Express
        │
        ├──────── File Service
        │
        ├──────── Git Service
        │
        ├──────── Note Index Service
        │
        └──────── Link Service

                     React + Vite + TypeScript
┌────────────────────────────────────────────────────────────┐
│ Sidebar │ Editor │ Toolbar │ Status │ Dialogs             │
└────────────────────────────────────────────────────────────┘
                         │
                     Axios (REST)
                         │
                         ▼
                 Node.js + Express API
┌────────────────────────────────────────────────────────────┐
│ Routes                                             │
│ Controllers                                        │
│ Services                                           │
│   ├── Note Service                                │
│   ├── File Service                                │
│   ├── Git Service                                 │
│   ├── NoteIndex Service                           │
│   └── Link Service                                │
│ Utils                                              │
└────────────────────────────────────────────────────────────┘
                         │
              Filesystem + Git Repository
                         │
        notes/   assets/   .noteindex.json