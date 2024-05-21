import express from 'express';
const router = express.Router();

// Define routes
router.get('/', (req, res) => {
    // Assuming recentVlogs is an array of vlog objects fetched from your database
    const recentVlogs = [
        { title: 'Vlog 1', thumbnail: 'vlog1.jpg' },
        { title: 'Vlog 2', thumbnail: 'vlog2.jpg' },
        // Add more vlog objects as needed
    ];

    // Assuming imageGallery is an array of image objects fetched from your database
    const imageGallery = [
        { filename: 'image1.jpg', alt: 'Image 1' },
        { filename: 'image2.jpg', alt: 'Image 2' },
        // Add more image objects as needed
    ];

    res.render('home', { recentVlogs, imageGallery }); // Pass recentVlogs and imageGallery to the template
});


router.get('/about', (req, res) => {
    res.render('about'); // Render the about page
});

// Define more routes as needed

export default router;
