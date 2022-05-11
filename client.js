const net = require('net');

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  conn.on('connect', () => {
    console.log("Successfully connected to game server")
    conn.write('Name: JDL')
    //setInterval(() => {conn.write('Move: up')}, 50);
    //setTimeout(() => {conn.write('Move: left')}, 100);
  })
  
  conn.on('data', (idleMessage) => {
    console.log(idleMessage)
  });
  
  // interpret incoming data as text
  conn.setEncoding('utf-8');
  
  return conn;
};

module.exports = {connect};