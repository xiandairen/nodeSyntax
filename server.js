/**
 * Created by Administrator on 2017/10/26.
 */
const http = require("http");
const test = require("./test");
http.createServer((res, req) => {
    req.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
    let list = "";
    for (let j  in req){
        list += `<div>${j}${test()} </div>`
    }
    req.end(`${list} <hr/>${req.getHeader('Connection')}`)
}).listen(3000);