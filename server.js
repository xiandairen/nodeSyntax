/**
 * Created by Administrator on 2017/10/26.
 */
const http = require("http");
http.createServer((res, req) => {
    req.writeHead(200, {"Content-Type": "text/html"});
    req.end("<div>node server run port 3000</div>")
}).listen(3000);