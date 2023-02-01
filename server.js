const fs = require('fs');
const path = require('path');

const dbJsonPath = path.join(__dirname, `../../tmp/db.json`);

fs.appendFile(dbJsonPath, `{
  "tasks": [
    {
      "id": 1,
      "name": "Wash",
      "info": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "isImportant": false,
      "isCompleted": false
    },
    {
      "id": 2,
      "name": "123",
      "info": "222",
      "isImportant": true,
      "isCompleted": false
    },
    {
      "name": "Wash",
      "info": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "isImportant": false,
      "id": 3,
      "isCompleted": false
    }
  ]
}
`, function (err) {
  if (err) throw err;
  console.log('Saved!');
});

// JSON Server module
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(dbJsonPath);

// Make sure to use the default middleware
const middlewares = jsonServer.defaults();

server.use(middlewares);
// Add this before server.use(router)
server.use(router);
// Listen to port
server.listen(3000, () => {
 console.log("JSON Server is running");
});

// Export the Server API
module.exports = server;