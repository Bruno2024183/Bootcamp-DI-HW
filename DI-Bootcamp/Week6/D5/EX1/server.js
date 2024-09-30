const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());  // This allows us to parse JSON request bodies

// Sample data array to simulate a database
let posts = [
    { id: 1, title: 'First Post', content: 'This is my first blog post' },
    { id: 2, title: 'Second Post', content: 'This is my second blog post' }
];

// Routes
// GET /posts - Return a list of all blog posts
app.get('/posts', (req, res) => {
    res.json(posts);
});

// GET /posts/:id - Return a specific blog post by ID
app.get('/posts/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).send('Post not found');
    res.json(post);
});

// POST /posts - Create a new blog post
app.post('/posts', (req, res) => {
    const newPost = {
        id: posts.length + 1,  // Simple auto-incrementing ID
        title: req.body.title,
        content: req.body.content
    };
    posts.push(newPost);
    res.status(201).json(newPost);
});

// PUT /posts/:id - Update an existing blog post
app.put('/posts/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).send('Post not found');

    post.title = req.body.title;
    post.content = req.body.content;
    res.json(post);
});

// DELETE /posts/:id - Delete a blog post
app.delete('/posts/:id', (req, res) => {
    const postIndex = posts.findIndex(p => p.id === parseInt(req.params.id));
    if (postIndex === -1) return res.status(404).send('Post not found');

    posts.splice(postIndex, 1);
    res.status(204).send();  // No content response for successful deletion
});

// Handle invalid routes
app.use((req, res) => {
    res.status(404).send('Route not found');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});