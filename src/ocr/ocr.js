import Tesseract from 'tesseract.js';

export class OCR {
    static async readImage(imgPath) {
        const res = await Tesseract.recognize(
            imgPath,
            "eng",
        );
        return res.data.text;
    }
}