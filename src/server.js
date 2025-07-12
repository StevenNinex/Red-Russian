const express = require('express');
const colors = require('colors');
const url = require('openurl');

var BANNER = `

 ██▀███  ▓█████ ▓█████▄     ██▀███   █    ██   ██████   ██████  ██▓ ▄▄▄       ███▄    █ 
▓██ ▒ ██▒▓█   ▀ ▒██▀ ██▌   ▓██ ▒ ██▒ ██  ▓██▒▒██    ▒ ▒██    ▒ ▓██▒▒████▄     ██ ▀█   █ 
▓██ ░▄█ ▒▒███   ░██   █▌   ▓██ ░▄█ ▒▓██  ▒██░░ ▓██▄   ░ ▓██▄   ▒██▒▒██  ▀█▄  ▓██  ▀█ ██▒
▒██▀▀█▄  ▒▓█  ▄ ░▓█▄   ▌   ▒██▀▀█▄  ▓▓█  ░██░  ▒   ██▒  ▒   ██▒░██░░██▄▄▄▄██ ▓██▒  ▐▌██▒
░██▓ ▒██▒░▒████▒░▒████▓    ░██▓ ▒██▒▒▒█████▓ ▒██████▒▒▒██████▒▒░██░ ▓█   ▓██▒▒██░   ▓██░
░ ▒▓ ░▒▓░░░ ▒░ ░ ▒▒▓  ▒    ░ ▒▓ ░▒▓░░▒▓▒ ▒ ▒ ▒ ▒▓▒ ▒ ░▒ ▒▓▒ ▒ ░░▓   ▒▒   ▓▒█░░ ▒░   ▒ ▒ 
  ░▒ ░ ▒░ ░ ░  ░ ░ ▒  ▒      ░▒ ░ ▒░░░▒░ ░ ░ ░ ░▒  ░ ░░ ░▒  ░ ░ ▒ ░  ▒   ▒▒ ░░ ░░   ░ ▒░
  ░░   ░    ░    ░ ░  ░      ░░   ░  ░░░ ░ ░ ░  ░  ░  ░  ░  ░   ▒ ░  ░   ▒      ░   ░ ░ 
   ░        ░  ░   ░          ░        ░           ░        ░   ░        ░  ░         ░ 
                 ░                                                                      
`

var path = require('path');
var app = express();

let port = 3000;

app.use(express.static(path.join(__dirname, 'dashboard')));

app.listen(port, () => {
    console.clear();
    console.log(BANNER.red.dim);
    console.log(`Servidor corriendo en el puerto: ${port}`.red.dim);
    url.open('http://localhost:3000');
});