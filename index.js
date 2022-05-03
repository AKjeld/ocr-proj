import { TextParser } from "./src/text-parser/text-parser.js";
import Tesseract from 'tesseract.js';
import Express from "express";
import { promises as fs } from "fs";

// TextParser.test();
// Tesseract.recognize(
//     './src/images/test-receipt.jpg',
//     'eng', { logger: m => console.log(m) }
// ).then(({ data: { text } }) => {
//     console.log(text);
// })


const app = Express();
app.use("/src/public", Express.static("src/public"));

app.get("/", async(request, response) => {
    const file = await fs.readFile('./index.html', "utf8");
    if (!file) {
        app.error("Sorry page not goodie mac tootie.");
    };
    response.send(file);
});

app.listen(process.env.PORT || 3000, () => console.log("App available on http://localhost:3000"));