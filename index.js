const server = require('./server.js');

const PORT = 5000;

server.listen(PORT, (req, res) => {
    console.log(`Server is running on PORT ${PORT}`);
});
