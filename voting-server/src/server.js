// module dependencies
import http from 'http';
import Server from 'socket.io'
    
export default function startServer(store) {
    
    // create http server
    const port = 8080;
    const server = http.createServer().listen(port, '0.0.0.0');
    
    
    // create socket server
    const io = Server.listen(server).sockets;
    
    store.subscribe(
        () => io.emit('state', store.getState().toJS())
    );
    
    io.on('connection', socket => {
        socket.emit('state', {port});
        
        socket.emit('state', store.getState().toJS());
        
        socket.on('action', store.dispatch.bind(store));
    });
}