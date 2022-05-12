export class TextParser {

    /**
     * Example number extraction from receipt/invoice
     * @param {*} txt 
     * @returns 
     */
    static getNumbers(txt) {
        const retArr = [];
        for (const subStr of txt) {
            const subStrArr = subStr.split(" ");
            const tags = subStrArr.filter(ss => !parseFloat(ss));
            const numbers = subStrArr.filter(ss => parseFloat(ss)).map(ss => parseFloat(ss));
            numbers.push(...subStrArr.filter(ss => parseFloat(ss.replace(",", ""))).map(ss => parseFloat(ss.replace(",", ""))))
            retArr.push({ tags, numbers });
        }
        return retArr;
    }

    /**
     * Returns last row with valid number(s).
     * @param {*} numbers 
     * @returns 
     */
    static guessTotal(numbers) {
        let chosenNumber;
        for(const number of numbers) {
            if (number.numbers.length) chosenNumber = number.numbers;
        }
        return chosenNumber;
    }
}