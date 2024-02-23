const { playerMoveUp, playerMoveLeft, playerMoveDown, playerMoveRight, sayHello, sayBye } = require("./constants");

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  // your code here
  if (key === 'w' || key === 'W' || key === '\x1b[A') {
    connection.write(playerMoveUp);
  }

  if (key === 'a' || key === 'A' || key === '\x1b[D') {
    connection.write(playerMoveLeft);
  }

  if (key === 's' || key === 'S' || key === '\x1b[B') {
    connection.write(playerMoveDown);
  }

  if (key === 'd' || key === 'D' || key === '\x1b[C') {
    connection.write(playerMoveRight);
  }

  if (key === 'h' || key === 'H' || key === '1') {
    connection.write(sayHello);
  }

  if (key === 'b' || key === 'B' || key === '2') {
    connection.write(sayBye);
  }

  if (key === '\u0003') {
    process.exit();
  }
};

module.exports = {
  setupInput,
};