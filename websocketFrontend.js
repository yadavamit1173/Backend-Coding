const socket = new WebSocket('ws://localhost:3000')

// connection open
socket.onopen = () => {
  console.log('Connected to server')
}

// server se message aaya
socket.onmessage = (event) => {
  console.log('Received:', event.data)
}

// client se server ko bhejna
socket.send(JSON.stringify({ action: "PING" }))
/*
1- WebSocket connection establish karo
2- Server se message receive karo aur console me print karo
3- Client se server ko message bhejo, yaha hum ek simple JSON object bhej rahe hain jisme action "PING" hai.
*/