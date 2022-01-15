import { type Socket, Server } from "socket.io" 


export default (server) => {

    const io = new Server(server, {
        cors: {
          origin: "*",
        }
      })


      io.on('connection', (socket: Socket) => {
        console.log('hi', socket.id)
    
        socket.on('outloud', (data: any) => {
            console.log('outloud', data)
    
            // emit to all
            // socket.emit('outloud', data)
    
            // emit to all except sender
            socket.broadcast.emit('not-much', data)
    
            // emit to specific socket
            // socket.to(socket.id).emit('not-much', data)
    
        })
    
        socket.on('disconnect', () => {
            console.log('bye');
        });
    })

}