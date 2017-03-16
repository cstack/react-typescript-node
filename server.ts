import * as express from "express";
import * as Shared from "./shared";
let app = express();
const port = 3000;

let message: string = Shared.makeSharedMessage();
console.log(message);
console.log(`http://localhost:${port}/`)

app.use(express.static(__dirname + '/public'));
app.listen(port);