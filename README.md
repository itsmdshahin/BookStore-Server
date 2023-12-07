# Book Store API

This is a simple API for managing books in a bookstore. It allows you to perform CRUD operations on books, including adding, retrieving, updating, and deleting books.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [API Endpoints](#api-endpoints)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following:

- Node.js installed
- MongoDB installed and running

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/itsmdshahin/BookStore-Server.git
   cd task-management-system
   npm install

2. Create a .env file in the project root and add your MongoDB connection URL:
   ```bash
   MONGO_URL=mongodb://localhost:27017/BookStore-Server
   PORT=5001
   ```
   
3. Start the server:
   ```bash
   npm start
   ```
Visit `http://localhost:5001` in your browser to access the Book Store.

**API Endpoints:**

##api-endpoints

  - POST  `/api/addabook:` This endpoint retrieves a list of all Books currently stored in the system. It returns an array of tasks.
  ```
  {
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "genre": "Classic",
  "publicationDate": "1925-04-10",
  "date": "2023-12-01"
}
  ```
  - GET `/api/allbooks:` This endpoint retrieves a list of all Books currently stored in the system. It returns an array of tasks.
  ```
  [
   {
      "_id": "6562e53b500a2ca97801df31",
      "title": "Software Engineer",
      "description": "BSc in CSE",
      "status": "Pending",
      "dueDate": "23/06/2023"
   },
   // Additional tasks...
]

  ```
  - GET `/api/allbooks/:🆔`: This endpoint allows clients to fetch details of a specific Book by providing its unique identifier (ID) in the URL.
  ```
  {
      "title": "Software Engineer",
      "description": "BSc in CSE",
      "author": "Old Author",
       "genre": "Old Genre",
      "publicationDate": "2022-01-01",
      "date": "2023-12-02"
}
  ```
  
  - PUT `/api/updatebook/:🆔`: This endpoint enables clients to update the details of a specific Book by providing its ID in the URL and sending a JSON body with the fields to be updated.
   
   ```
   {
    "title": "New Title",
    "author": "New Author",
    "genre": "New Genre",
    "publicationDate": "2022-01-01",
    "date": "2023-12-02"
  }
   ```
 
  - DELETE `/api/deletebook/:🆔`: This endpoint allows clients to delete a task by providing its unique identifier (ID) in the URL.
   ```
  {
      "message": "Book deleted successfully"
  }
   ```


**Floder-Structure**

```
books-api/
| -- controllers/
| | -- bookController.js
| -- models/
| | -- bookModel.js
| -- routes/
| | -- books.js
| -- app.js
| -- config/
| | -- database.js
| -- package.json
| -- README.md
```

**Author Section**

- [Md Shahinur Rahman](https://github.com/itsmdshahin)

