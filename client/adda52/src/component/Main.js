import React,{Component} from 'react';
var socket = require('socket.io-client')('http://localhost:3000');
socket.on('connect',()=>
{
    
});
class Main extends Component
{
    render()
    {
        return(
        <div>

        </div>);
    }
}

export default Main;