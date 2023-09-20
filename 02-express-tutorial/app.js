const http=require("http");
const fs=require("fs");

const home=fs.readFileSync("./navbar-app/index.html",{"encoding":"utf8"});
const style=fs.readFileSync("./navbar-app/styles.css",{"encoding":"utf8"});
const script=fs.readFileSync("./navbar-app/browser-app.js",{"encoding":"utf8"});
const logo=fs.readFileSync("./navbar-app/logo.svg",{"encoding":"utf8"});

http.createServer((req,res)=>{
    let url=req.url;
    console.log(url);
    if(url==="/"){
        res.writeHead(200,{"content-type":"text/html"});
        res.end(home);
    }else if(url==="./styles.css"){
        res.writeHead(200,{"content-type":"text/css"});
        res.end(style);
    }else if(url==="./browser-app.js"){
        res.writeHead(200,{"content-type":"text/js"});
        res.end(script);
    }else if(url==="./logo.svg"){
        res.writeHead(200,{"content-type":"image/logo"});
        res.end(logo);
    }else{
        res.writeHead(404,{"content-type":"text/plain"});
        res.end("Resource not Found");
    }
}).listen(5000);
