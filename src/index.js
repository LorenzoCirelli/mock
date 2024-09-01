import { dbRes } from "./db.js";
import { engine } from "./engine.js";

//Actual mock server
import http from "http";

import url from "url";

// Make our HTTP server
const server = http.createServer((req, res) => {
  // Parse the request url
  const reqUrl = url.parse(req.url).pathname;
  engine();
  dbRes(reqUrl).then((val) => {
    const rep = engine(val);
    res.setHeader("Content-Type", "text");
    res.writeHead(rep.status);
    res.end(rep.msg);
  });
});
// Have the server listen on port 9000
server.listen(9000);
