# Task Manager API

A simple Express.js REST API for managing tasks. The app keeps task data in memory and seeds the initial task list from `task.json` when the server starts.

## Functionality

- List all tasks.
- Fetch a single task by ID.
- Create a new task.
- Replace an existing task.
- Partially update an existing task.
- Delete a task.
- Validate required task fields for create and full update requests.
- Return `404` responses when a requested task does not exist.

Each task has this shape:

```json
{
  "id": 1,
  "title": "Set up environment",
  "description": "Install Node.js, npm, and git",
  "completed": true
}
```

## Requirements

- Node.js 18 or newer
- npm

## Setup

```bash
npm install
```

## Run the App

```bash
npm start
```

The server runs on:

```text
http://localhost:3000
```

For development with Node watch mode:

```bash
npm run start:dev
```

## Run Tests

```bash
npm test
```

## API Endpoints

### Get All Tasks

```http
GET /tasks
```

Returns an array of tasks.

### Get Task by ID

```http
GET /tasks/:id
```

Returns a single task.

Example:

```http
GET /tasks/1
```

### Create Task

```http
POST /tasks
```

Request body:

```json
{
  "title": "New Task",
  "description": "New Task Description",
  "completed": false
}
```

Returns the created task with a generated `id`.

### Replace Task

```http
PUT /tasks/:id
```

Request body:

```json
{
  "title": "Updated Task",
  "description": "Updated Task Description",
  "completed": true
}
```

Returns the updated task.

### Partially Update Task

```http
PATCH /tasks/:id
```

Request body can include any task fields to update.

Example:

```json
{
  "completed": true
}
```

Returns the updated task.

### Delete Task

```http
DELETE /tasks/:id
```

Returns the deleted task.

## Validation

`POST /tasks` and `PUT /tasks/:id` require:

- `title`
- `description`
- `completed` as a boolean

Invalid data returns `400`.

Missing task IDs return `404`.
