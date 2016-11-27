# Node Server Boilerplate
Simple Node Server using Express

## Install

`npm install`

## Usage

Start the server locally on `http://localhost:8080`

`node server.js`

To run on a different port

`node server.js -p 9090`

## Docker

### Build

`docker build -t robtec/node-server .`

### Run

`docker run -it -d -p 9090:9090 robtec/node-server -p 9090`
