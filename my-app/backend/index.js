const express = require('express');
const app = express();
const connectToMongoDB = require("./db");
app.use(express.json());
app.use('/api',require("./routes/CreateUser"))
// used middleware here 
const startServer = async () => {
    try {
        await connectToMongoDB(); // Connect to MongoDB before defining routes and starting the server

        // app.get('/', (req, res) => {
        //     console.log("Request received");
        //     res.send('Hellfddddjjjjjddddo World!');
        // }); 
        // app.use('/api/')
        app.listen(5000, () => {
            console.log('Server is running on port 5000');
        });
    } catch (error) {
        console.error("Error starting the server:", error);
    }
};

startServer(); // Start the Express server after the database connection is established
