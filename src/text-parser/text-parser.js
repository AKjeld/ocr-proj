export class TextParser {
    static test() {
        console.log("Hello World");
    }

    static getNumbers(txt) {
        const retArr = [];
        for (const subStr of txt) {
            const subStrArr = subStr.split(" ");
            const tags = subStrArr.filter(ss => !parseFloat(ss));
            const numbers = subStrArr.filter(ss => parseFloat(ss)).map(ss => parseFloat(ss));
            retArr.push({ tags, numbers });
        }
        return retArr;
    }
}