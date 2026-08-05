# DECISIONS

## 1. Git Commit Strategy

I chose to create Git commits only when the user explicitly clicks **Save** instead of using autosave.

Reasons:

- Keeps Git history meaningful.
- Avoids creating hundreds of small commits.
- Makes it easier to understand the project history.
- Matches normal Git workflows.

Trade-off:

Users could lose unsaved changes if they close the browser before saving.

---

## 2. What Counts as a Note

Instead of scanning the filesystem directly, I used `.noteindex.json` as the source of truth.

Reasons:

- The assignment already provides this index.
- It includes hidden files.
- It includes multiple file extensions.
- The application can support every indexed note consistently.

Whenever a new note is created, `.noteindex.json` is updated.

---

## 3. Application Architecture

I separated the backend into

- Routes
- Controllers
- Services
- Types
- Utilities

Reasons:

- Keeps business logic separate from HTTP handling.
- Makes services reusable.
- Easier to maintain and extend.

For example:

- Git operations are isolated in `git.service.ts`.
- Note operations are handled by `notes.service.ts`.

---

## 4. Git Integration

I used the `simple-git` library instead of executing Git commands manually.

Reasons:

- Cleaner API.
- Easier error handling.
- Better readability.
- Easier to reuse across multiple features.

---

## 5. Link Handling

Due to the available time, I implemented basic link detection instead of automatic link rewriting.

My intention was to warn users before potentially breaking links rather than silently modifying note contents.

With additional time I would implement automatic updates for wiki links and Markdown links.

---

## 6. What I Completed

Implemented:

- Read notes tree
- Read note content
- Save note
- Automatic Git commits
- Create note
- Update `.noteindex.json`
- Basic link detection
- Frontend integration

---

## 7. What I Skipped

Because of time limitations, I did not complete:

- Rename / Move notes
- Delete with Undo
- Conflict detection between browser tabs
- Automatic link rewriting
- Better Markdown editor
- Comprehensive testing

---

## 8. What I Would Build Next

If I had another week, my priorities would be:

1. Rename / Move with automatic link updates
2. Delete and Undo functionality
3. Conflict detection using file version checks
4. Improved Markdown editor with preview
5. Better error handling
6. Unit and integration tests

---

## 9. Personal Reflection

This project was significantly different from the backend projects I had worked on previously.

Most of my earlier work focused on database-driven applications with REST APIs. This assignment introduced me to file-system based architecture, Git integration, and maintaining consistency between files.

I also learned TypeScript while implementing this project. Although I couldn't complete every requested feature, the project helped me understand several new engineering concepts and highlighted areas where I want to continue improving.