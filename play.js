const { connect } = require("./client");
const { setupInput } = require("./input");
const { serverConnectingMessage } = require("./constants");

console.log(serverConnectingMessage);
let conn = connect();
setupInput(conn);