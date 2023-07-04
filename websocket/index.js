const btn = document.getElementById('btn')
const socket = new WebSocket('ws://localhost:5000')

socket.onopen = () => {
    socket.send(JSON.stringify({
        method: 'connection',
        id: 555,
        username: "Ulbi TV"
    }))
}

socket.onmessage = (event) => {
    console.log('Message from server', event.data)
}

btn.onclick = () => {
    socket.send(JSON.stringify({
        method: 'message',
        message: 'Hello',
        id: 555,
        username: 'Ulbi tv'
    }))
}