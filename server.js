// JSON Server module
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");

// Make sure to use the default middleware
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Listen to port
server.listen(3000, () => {
 console.log("JSON Server is running");
});

// Add this before server.use(router)
server.use(router);

// Export the Server API
module.exports = server;