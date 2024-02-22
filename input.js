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
  if (key === 'w' || key === 'W' || key === '\033[A') {
    connection.write('Move: up');
  }

  if (key === 'a' || key === 'A'|| key === '\033[D') {
    connection.write('Move: left');
  }

  if (key === 's' || key === 'S'|| key === '\033[B') {
    connection.write('Move: down');
  }

  if (key === 'd' || key === 'D'|| key === '\033[C') {
    connection.write('Move: right');
  }

  if (key === '\u0003') {
    process.exit();
  }
};

module.exports = {
  setupInput,
}