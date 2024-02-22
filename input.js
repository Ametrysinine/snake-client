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
    connection.write('Move: up');
  }

  if (key === 'a' || key === 'A' || key === '\x1b[D') {
    connection.write('Move: left');
  }

  if (key === 's' || key === 'S' || key === '\x1b[B') {
    connection.write('Move: down');
  }

  if (key === 'd' || key === 'D' || key === '\x1b[C') {
    connection.write('Move: right');
  }

  if (key === 'h' || key === 'H') {
    connection.write("Say: Hello!");
  }

  if (key === 'b' || key === 'B') {
    connection.write("Say: Bye!");
  }

  if (key === '\u0003') {
    process.exit();
  }
};

module.exports = {
  setupInput,
};