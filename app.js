import express from 'express';
import router from './router.js';
import path from 'path';

const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the views directory
const viewsPath = path.join(process.cwd(), 'views');
app.set('views', viewsPath);

// Serve static files from the "public" directory
const publicPath = path.join(process.cwd(), 'public');
app.use(express.static(publicPath));

// Use the router for all routes
app.use(router);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
