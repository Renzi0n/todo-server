const path = require('path');
const dbJsonPath = path.join(__dirname, "public", "db.json");
const { static } = require('express');

// JSON Server module
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(dbJsonPath);

// Make sure to use the default middleware
const middlewares = jsonServer.defaults();

server.use(static(path.join(__dirname, "public")));

server.use(middlewares);

// Listen to port
server.listen(3000, () => {
 console.log("JSON Server is running");
});

// Add this before server.use(router)
server.use(router);

// Export the Server API
module.exports = server;