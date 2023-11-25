const axios = require('axios');
const express = require('express');
const app = express();

app.get('/image', async (req, res) => {
    try {
        const imageId = req.query.id; // Get the image ID from the query parameter
        if (!imageId) {
            res.status(400).send('Image ID is required');
            return;
        }

        const imageUrl = `https://assetdelivery.roblox.com/v1/asset/?id=${imageId}`;

        const response = await axios.get(imageUrl, {
            responseType: 'arraybuffer', // Get image data as binary
        });

        res.setHeader('Content-Type', 'image/png'); // Set the correct content type
        res.send(response.data); // Send the image data
    } catch (error) {
        res.status(500).send('Error fetching image');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
