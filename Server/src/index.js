const PORT = 3001;
const server = require("./app");
const { conn } = require('./DB_connection');

server.listen(PORT, () => {
  conn.sync({force: true})
  console.log(`Server raised in port: ${PORT}`);
});
