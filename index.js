import { TextParser } from "./src/text-parser/text-parser.js";
import Tesseract from 'tesseract.js';
import path from "path";
import Express from "express";
import Multer from "multer";
import { promises as fs } from "fs";
import { OCR } from "./src/ocr/ocr.js";
import { BankData } from "./src/public/client-js/module/bank-data/bank-data.mjs";

const app = Express();

app.set("view engine", "ejs");

// storage
const storage = Multer.diskStorage({
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
    response.render("index", { data: "", numbers: "" });
});

app.post("/read", upload.single("file"), async (request, response) => {
    console.log("Request read of:");
    console.log(request.file.path);

    const text = await OCR.readImage(request.file.path);
    const numbers = TextParser.getNumbers(text);
    const totalGuess = TextParser.guessTotal(numbers);
    const bankMatch = BankData.matchTotal(totalGuess);
    response.render("index", { data: text, numbers: (bankMatch ?? []).join(", ") });
});

app.listen(process.env.PORT || 3000, () => console.log("App available on http://localhost:3000"));