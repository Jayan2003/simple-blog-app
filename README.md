
# Simple Blog Application

This is a simple, full-stack blog application built with Node.js, Express.js, and EJS. It demonstrates basic CRUD (Create, Read, Update, Delete) functionality. The application uses an in-memory data store, which means all posts will be reset when the server restarts.

## Features

- **Create:** Write and publish new blog posts.
- **Read:** View a list of all existing posts on the homepage.
- **Update:** Edit the title and content of an existing post.
- **Delete:** Remove posts from the list.

## Technologies Used

- [**Node.js**](https://nodejs.org/): The JavaScript runtime environment.
- [**Express.js**](https://expressjs.com/): A minimalist web framework for Node.js.
- [**EJS**](https://ejs.co/): An embedded JavaScript templating engine to generate HTML pages.
- [**CSS**](https://www.w3.org/Style/CSS/Overview.en.html): For styling the application.

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

You need to have Node.js installed on your computer.

### Installation

1. Clone this repository to your local machine:
   ```bash
   git clone [https://github.com/Jayan2003/simple-blog-app.git](https://github.com/Jayan2003/simple-blog-app.git)

2.  Navigate to the project directory:
    ```bash
    cd simple-blog-app
    ```
3.  Install the required Node.js packages:
    ```bash
    npm install
    ```

### Running the Application

1.  Start the server from your terminal:
    ```bash
    node server.js
    ```
2.  Open your web browser and navigate to:
    ```
    http://localhost:3000
    ```

## Project Structure

```
simple-blog-app/
├── server.js               # The main server file with routes and logic
├── package.json            # Lists project dependencies
├── package-lock.json       # Tracks exact package versions
├── .gitignore              # Specifies files to be ignored by Git
├── public/                 # Directory for static assets
│   └── css/
│       └── style.css       # Styling for the application
└── views/                  # Directory for EJS templates
    └── index.ejs           # The main homepage template
```
