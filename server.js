console.log("Starting Server...");

const express = require('express');
const app = express();
const http = require('http').createServer(app);
const path = require('path');
const io = require('socket.io')(http); // Add this line

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  // Additional Socket.IO events here
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Basic route
app.get('/', (req, res) => {
  res.send('Server is up and running');
});

// Choose a port
const PORT = process.env.PORT || 3001;
http.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});