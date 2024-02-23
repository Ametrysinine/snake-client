// establishes a connection with the game server
const net = require("net");
const { ip, port, serverConnectMessage } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: ip,// IP address here,
    port: port// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log(serverConnectMessage);
    conn.write("Name: FOX");
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};


module.exports = {
  net,
  connect
};