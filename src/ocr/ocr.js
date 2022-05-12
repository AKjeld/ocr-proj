import Tesseract from 'tesseract.js';

export class OCR {
    /**
     * Uses Tesseract to extract text from image. Rather slow.
     * @param {*} imgPath 
     * @returns 
     */
    static async readImage(imgPath) {
        const res = await Tesseract.recognize(
            imgPath,
            "eng",
        );
        const lines = res.data.lines.map(l => l.text);

        return lines;
    }
}