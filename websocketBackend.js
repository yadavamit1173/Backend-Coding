const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 3000 })

wss.on('connection', (ws) => 
    {
  console.log('Client connected')

  // message receive
  ws.on('message', (message) => 
    {
    console.log('Received:', message)

    // response bhejna
    ws.send(JSON.stringify({ status: "OK" }))
  })

  // initial message
  ws.send(JSON.stringify({ message: "Welcome!" }))
})