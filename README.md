# socketio_echo_server

socket.io api implementation for web-socket echo server

This implementation is based on [Socket IO](http://socket.io) api for websockets. I played with it in order to find out a solution to make it work with a simple websocket client. After some homework, I could trace out.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

things you need to install the software:

```
* NODE JS
* NPM
* Socket io
```
### Installing

steps to use it:


```
* clone this repository
* cd Repo-name
* npm install
```

## Deployment

After running install, node package manager aka NPM will create a local directory for node_modules. After this in order to run it run:

```
npm start
```
The above command will bind the webcoket to the port given in index.js file.

**Note** - *if you bind server at localhost:3000, the actual ws url will be localhost:3000/socket.io/?EIO3&transport=websocket. The messages sent from client should be as shown below else websocket will disconnect.*

```
42["eventName","message"]
```

To read about socketio go here -> [Socket.io](https://socket.io)

## Authors

* **Pranav Kapoor**  - [pranavkapoor](https://github.com/pranavkapoorr)
