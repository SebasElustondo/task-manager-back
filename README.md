# Task Manager API

A simple task management API built with **Node.js**, **Express**, and **TypeORM**. This API allows users to create, retrieve, update, and delete tasks, with data persistence using a database.

## Features

- **CRUD Operations**: Create, Read, Update, and Delete tasks.
- **Validation**: Middleware to validate task input.
- **Error Handling**: Custom error handling for better debugging.
- **Environment Configuration**: Use `.env` for database and server configuration.

---

## Project Structure

```
task-manager
├── src/
├── controllers/
│   └── taskController.ts
├── database/
│   └── connection.ts
├── entities/
│   └── task.ts
├── errors/
│   └── NotFoundError.ts
├── middleware/
│   └── validateTaskInput.ts
├── models/
│   └── taskModel.ts
├── routes/
│   └── taskRoutes.ts
├── services/
│   └── taskService.ts
├── types/
│   └── index.ts
├── utils/
│   └── validation.ts
└── app.ts
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/SebasElustondo/task-manager-back.git
   ```

2. Navigate to the project directory:
   ```
   cd task-manager
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a .env file in the root directory and configure the following variables:
   ```
   DATABASE_TYPE=sqlite
   DATABASE_NAME=task-manager.db
   PORT=3000   
   ```

5. Run the application:
   ```
   npx ts-node src/app.ts
   ```

## API Endpoints

Tasks

1. Create a Task
```
curl --location 'http://localhost:3000/tasks/' \
--header 'Content-Type: application/json' \
--data '{
    "title": "New Task",
    "description": "This is a test task"
}'
```
* Response example:
```
{
    "title": "New Task 2",
    "description": "This is a test 2 task",
    "completed": false,
    "id": 3
}
```

2. Get All Tasks
```
curl --location 'http://localhost:3000/tasks/'
```
* Response example:
```
[
    {
        "id": 1,
        "title": "New Task",
        "description": "This is a test task",
        "completed": true
    }
]
```

2. Get Task By ID
```
curl --location 'http://localhost:3000/tasks/5'
```
* Response example:
```
{
    "id": 5,
    "title": "1qqq123123",
    "description": "2aa",
    "completed": true
}
```

3. Update a Task
```
curl --location --request PUT 'http://localhost:3000/tasks/{{id}}' \
--header 'Content-Type: application/json' \
--data '{
    "title": "New Task",
    "description": "This is a test task",
    "completed": true
}'
```
* Response example:
```
true
```

4. Delete a Task
```
curl --location --request DELETE 'http://localhost:3000/tasks/{{id}}'
```
* Response example:
```
204
```

## Technologies Used
* Node.js: JavaScript runtime.
* Express: Web framework for building APIs.
* TypeORM: ORM for database interaction.
* SQLite: Lightweight database for development.
* TypeScript: Strongly typed JavaScript.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes. 

## License

This project is licensed under the MIT License.