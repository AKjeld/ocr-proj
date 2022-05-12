export class BankData {

    /**
     * Mock data from bank
     * @returns 
     */
    static getMockData() {
        return [
            ["Main Street Restaurant", "5. april 2022", 29.01],
            ["Dinero", "6. april 2022", 1000],
            ["Netto", "4. april 2022", 40.2],
            ["Byggemarked 2000", "2. april 2022", 5000],
            ["Rød Aalborg", "16. april 2022", 2400],
        ];
    }

    /**
     * Matches numbers with bank entries (very naive).
     * @param {*} numbers 
     * @returns 
     */
    static matchTotal(numbers) {
        const mockData = this.getMockData();
        for (const entry of mockData) {
            if (numbers.includes(entry[2])) return entry;
        }
    }

    /**
     * Get "column headers" from bank.
     * @returns 
     */
    static getMockHeader() {
        return ["Afsender", "Dato", "Beløb"];
    }
}