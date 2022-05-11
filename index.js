import { TextParser } from "./src/text-parser/text-parser.js";
import Tesseract from 'tesseract.js';
import path from "path";
import Express from "express";
import Multer from "multer";
import { promises as fs } from "fs";
import { OCR } from "./src/ocr/ocr.js";




const app = Express();


var storage = Multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });

const upload = Multer({ storage: storage });

app.use("/src/public", Express.static("src/public"));

app.get("/", async (request, response) => {
    const file = await fs.readFile('./index.html', "utf8");
    if (!file) {
        app.error("Sorry page not goodie mac tootie.");
    };
    response.send(file);
});

app.post("/test", upload.single("file"), async (request, response) => {
    console.log("Hello There");
    console.log(request.file.path);

    const text = await OCR.readImage(request.file.path);
    response.render()
    console.log(text);
});

app.listen(process.env.PORT || 3000, () => console.log("App available on http://localhost:3000"));