//import for socketio api
var io = require('socket.io')();
//function for each connection
io.on('connection', function(client){
    console.log('connected client');
    //function for message received and echo
    client.on('msg', function(data){
        console.log("received "+data);
        //writes to connection (socket)
        client.emit(data);
    });
    //function for disconnect
    client.on('disconnect', function(){
        console.log('disconnected');
    });
});
//server binding
io.listen(3000);