// Import the necessary modules
const express = require('express');
const ejs = require('ejs');
const path = require('path');

// Create a new Express application
const app = express();
const port = 3000;

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Use middleware to parse URL-encoded bodies (for form data)
app.use(express.urlencoded({ extended: true }));

// In-memory data store for blog posts
// In a real application, you would use a database.
const posts = [];

// --- Routes ---

// GET route for the home page (displays posts and form)
app.get('/', (req, res) => {
    res.render('index', { posts, editingPostId: null });
});

// POST route to handle new post creation
app.post('/create', (req, res) => {
    const { title, content } = req.body;
    const newPost = {
        id: Date.now().toString(),
        title,
        content
    };
    posts.unshift(newPost);
    res.redirect('/');
});

// GET route for the home page with a post in edit mode
app.get('/edit/:id', (req, res) => {
    const editingPostId = req.params.id;
    res.render('index', { posts, editingPostId });
});

// POST route to handle updating an existing post
app.post('/update', (req, res) => {
    const { id, title, content } = req.body;
    const postIndex = posts.findIndex(p => p.id === id);
    if (postIndex > -1) {
        posts[postIndex].title = title;
        posts[postIndex].content = content;
    }
    res.redirect('/');
});

// POST route to handle deleting a post
app.post('/delete/:id', (req, res) => {
    const idToDelete = req.params.id;
    const postIndex = posts.findIndex(p => p.id === idToDelete);
    if (postIndex > -1) {
        posts.splice(postIndex, 1);
    }
    res.redirect('/');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});